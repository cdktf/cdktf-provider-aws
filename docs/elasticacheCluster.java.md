# `elasticacheCluster` Submodule <a name="`elasticacheCluster` Submodule" id="@cdktf/provider-aws.elasticacheCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheCluster <a name="ElasticacheCluster" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster aws_elasticache_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_cluster.ElasticacheCluster;

ElasticacheCluster.Builder.create(Construct scope, java.lang.String id)
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
    .clusterId(java.lang.String)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .autoMinorVersionUpgrade(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .azMode(java.lang.String)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .finalSnapshotIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .ipDiscovery(java.lang.String)
//  .logDeliveryConfiguration(IResolvable)
//  .logDeliveryConfiguration(java.util.List<ElasticacheClusterLogDeliveryConfiguration>)
//  .maintenanceWindow(java.lang.String)
//  .networkType(java.lang.String)
//  .nodeType(java.lang.String)
//  .notificationTopicArn(java.lang.String)
//  .numCacheNodes(java.lang.Number)
//  .outpostMode(java.lang.String)
//  .parameterGroupName(java.lang.String)
//  .port(java.lang.Number)
//  .preferredAvailabilityZones(java.util.List<java.lang.String>)
//  .preferredOutpostArn(java.lang.String)
//  .replicationGroupId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .securityGroupNames(java.util.List<java.lang.String>)
//  .snapshotArns(java.util.List<java.lang.String>)
//  .snapshotName(java.lang.String)
//  .snapshotRetentionLimit(java.lang.Number)
//  .snapshotWindow(java.lang.String)
//  .subnetGroupName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#cluster_id ElasticacheCluster#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#apply_immediately ElasticacheCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#auto_minor_version_upgrade ElasticacheCluster#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#availability_zone ElasticacheCluster#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.azMode">azMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#az_mode ElasticacheCluster#az_mode}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine ElasticacheCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine_version ElasticacheCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#final_snapshot_identifier ElasticacheCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#id ElasticacheCluster#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.ipDiscovery">ipDiscovery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#ip_discovery ElasticacheCluster#ip_discovery}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration">ElasticacheClusterLogDeliveryConfiguration</a>></code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#maintenance_window ElasticacheCluster#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#network_type ElasticacheCluster#network_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#node_type ElasticacheCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.notificationTopicArn">notificationTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#notification_topic_arn ElasticacheCluster#notification_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.numCacheNodes">numCacheNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#num_cache_nodes ElasticacheCluster#num_cache_nodes}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.outpostMode">outpostMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#outpost_mode ElasticacheCluster#outpost_mode}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#parameter_group_name ElasticacheCluster#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#port ElasticacheCluster#port}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.preferredAvailabilityZones">preferredAvailabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_availability_zones ElasticacheCluster#preferred_availability_zones}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.preferredOutpostArn">preferredOutpostArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_outpost_arn ElasticacheCluster#preferred_outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#replication_group_id ElasticacheCluster#replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_ids ElasticacheCluster#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.securityGroupNames">securityGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_names ElasticacheCluster#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.snapshotArns">snapshotArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_arns ElasticacheCluster#snapshot_arns}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_name ElasticacheCluster#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_retention_limit ElasticacheCluster#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.snapshotWindow">snapshotWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_window ElasticacheCluster#snapshot_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#subnet_group_name ElasticacheCluster#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags ElasticacheCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags_all ElasticacheCluster#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#cluster_id ElasticacheCluster#cluster_id}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.applyImmediately"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#apply_immediately ElasticacheCluster#apply_immediately}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#auto_minor_version_upgrade ElasticacheCluster#auto_minor_version_upgrade}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#availability_zone ElasticacheCluster#availability_zone}.

---

##### `azMode`<sup>Optional</sup> <a name="azMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.azMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#az_mode ElasticacheCluster#az_mode}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine ElasticacheCluster#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine_version ElasticacheCluster#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.finalSnapshotIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#final_snapshot_identifier ElasticacheCluster#final_snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#id ElasticacheCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipDiscovery`<sup>Optional</sup> <a name="ipDiscovery" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.ipDiscovery"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#ip_discovery ElasticacheCluster#ip_discovery}.

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.logDeliveryConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration">ElasticacheClusterLogDeliveryConfiguration</a>>

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_delivery_configuration ElasticacheCluster#log_delivery_configuration}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.maintenanceWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#maintenance_window ElasticacheCluster#maintenance_window}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#network_type ElasticacheCluster#network_type}.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#node_type ElasticacheCluster#node_type}.

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.notificationTopicArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#notification_topic_arn ElasticacheCluster#notification_topic_arn}.

---

##### `numCacheNodes`<sup>Optional</sup> <a name="numCacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.numCacheNodes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#num_cache_nodes ElasticacheCluster#num_cache_nodes}.

---

##### `outpostMode`<sup>Optional</sup> <a name="outpostMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.outpostMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#outpost_mode ElasticacheCluster#outpost_mode}.

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.parameterGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#parameter_group_name ElasticacheCluster#parameter_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#port ElasticacheCluster#port}.

---

##### `preferredAvailabilityZones`<sup>Optional</sup> <a name="preferredAvailabilityZones" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.preferredAvailabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_availability_zones ElasticacheCluster#preferred_availability_zones}.

---

##### `preferredOutpostArn`<sup>Optional</sup> <a name="preferredOutpostArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.preferredOutpostArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_outpost_arn ElasticacheCluster#preferred_outpost_arn}.

---

##### `replicationGroupId`<sup>Optional</sup> <a name="replicationGroupId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.replicationGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#replication_group_id ElasticacheCluster#replication_group_id}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_ids ElasticacheCluster#security_group_ids}.

---

##### `securityGroupNames`<sup>Optional</sup> <a name="securityGroupNames" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.securityGroupNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_names ElasticacheCluster#security_group_names}.

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.snapshotArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_arns ElasticacheCluster#snapshot_arns}.

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.snapshotName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_name ElasticacheCluster#snapshot_name}.

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.snapshotRetentionLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_retention_limit ElasticacheCluster#snapshot_retention_limit}.

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.snapshotWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_window ElasticacheCluster#snapshot_window}.

---

##### `subnetGroupName`<sup>Optional</sup> <a name="subnetGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.subnetGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#subnet_group_name ElasticacheCluster#subnet_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags ElasticacheCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags_all ElasticacheCluster#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.putLogDeliveryConfiguration">putLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAzMode">resetAzMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetFinalSnapshotIdentifier">resetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetIpDiscovery">resetIpDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetLogDeliveryConfiguration">resetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNotificationTopicArn">resetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNumCacheNodes">resetNumCacheNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetOutpostMode">resetOutpostMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetParameterGroupName">resetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPreferredAvailabilityZones">resetPreferredAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPreferredOutpostArn">resetPreferredOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetReplicationGroupId">resetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSecurityGroupNames">resetSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotArns">resetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotRetentionLimit">resetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotWindow">resetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSubnetGroupName">resetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLogDeliveryConfiguration` <a name="putLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.putLogDeliveryConfiguration"></a>

```java
public void putLogDeliveryConfiguration(IResolvable OR java.util.List<ElasticacheClusterLogDeliveryConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration">ElasticacheClusterLogDeliveryConfiguration</a>>

---

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetApplyImmediately"></a>

```java
public void resetApplyImmediately()
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAutoMinorVersionUpgrade"></a>

```java
public void resetAutoMinorVersionUpgrade()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetAzMode` <a name="resetAzMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAzMode"></a>

```java
public void resetAzMode()
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetEngine"></a>

```java
public void resetEngine()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetFinalSnapshotIdentifier` <a name="resetFinalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetFinalSnapshotIdentifier"></a>

```java
public void resetFinalSnapshotIdentifier()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetId"></a>

```java
public void resetId()
```

##### `resetIpDiscovery` <a name="resetIpDiscovery" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetIpDiscovery"></a>

```java
public void resetIpDiscovery()
```

##### `resetLogDeliveryConfiguration` <a name="resetLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetLogDeliveryConfiguration"></a>

```java
public void resetLogDeliveryConfiguration()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNodeType"></a>

```java
public void resetNodeType()
```

##### `resetNotificationTopicArn` <a name="resetNotificationTopicArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNotificationTopicArn"></a>

```java
public void resetNotificationTopicArn()
```

##### `resetNumCacheNodes` <a name="resetNumCacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNumCacheNodes"></a>

```java
public void resetNumCacheNodes()
```

##### `resetOutpostMode` <a name="resetOutpostMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetOutpostMode"></a>

```java
public void resetOutpostMode()
```

##### `resetParameterGroupName` <a name="resetParameterGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetParameterGroupName"></a>

```java
public void resetParameterGroupName()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPort"></a>

```java
public void resetPort()
```

##### `resetPreferredAvailabilityZones` <a name="resetPreferredAvailabilityZones" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPreferredAvailabilityZones"></a>

```java
public void resetPreferredAvailabilityZones()
```

##### `resetPreferredOutpostArn` <a name="resetPreferredOutpostArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPreferredOutpostArn"></a>

```java
public void resetPreferredOutpostArn()
```

##### `resetReplicationGroupId` <a name="resetReplicationGroupId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetReplicationGroupId"></a>

```java
public void resetReplicationGroupId()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSecurityGroupNames` <a name="resetSecurityGroupNames" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSecurityGroupNames"></a>

```java
public void resetSecurityGroupNames()
```

##### `resetSnapshotArns` <a name="resetSnapshotArns" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotArns"></a>

```java
public void resetSnapshotArns()
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotName"></a>

```java
public void resetSnapshotName()
```

##### `resetSnapshotRetentionLimit` <a name="resetSnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotRetentionLimit"></a>

```java
public void resetSnapshotRetentionLimit()
```

##### `resetSnapshotWindow` <a name="resetSnapshotWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotWindow"></a>

```java
public void resetSnapshotWindow()
```

##### `resetSubnetGroupName` <a name="resetSubnetGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSubnetGroupName"></a>

```java
public void resetSubnetGroupName()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_cluster.ElasticacheCluster;

ElasticacheCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_cluster.ElasticacheCluster;

ElasticacheCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_cluster.ElasticacheCluster;

ElasticacheCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.cacheNodes">cacheNodes</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList">ElasticacheClusterCacheNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterAddress">clusterAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.configurationEndpoint">configurationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersionActual">engineVersionActual</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList">ElasticacheClusterLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.azModeInput">azModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifierInput">finalSnapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.ipDiscoveryInput">ipDiscoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.logDeliveryConfigurationInput">logDeliveryConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration">ElasticacheClusterLogDeliveryConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.notificationTopicArnInput">notificationTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.numCacheNodesInput">numCacheNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.outpostModeInput">outpostModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.parameterGroupNameInput">parameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZonesInput">preferredAvailabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredOutpostArnInput">preferredOutpostArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.replicationGroupIdInput">replicationGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupNamesInput">securityGroupNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotArnsInput">snapshotArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimitInput">snapshotRetentionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotWindowInput">snapshotWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.subnetGroupNameInput">subnetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.azMode">azMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.ipDiscovery">ipDiscovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.notificationTopicArn">notificationTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.numCacheNodes">numCacheNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.outpostMode">outpostMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZones">preferredAvailabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredOutpostArn">preferredOutpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupNames">securityGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotArns">snapshotArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotWindow">snapshotWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cacheNodes`<sup>Required</sup> <a name="cacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.cacheNodes"></a>

```java
public ElasticacheClusterCacheNodesList getCacheNodes();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList">ElasticacheClusterCacheNodesList</a>

---

##### `clusterAddress`<sup>Required</sup> <a name="clusterAddress" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterAddress"></a>

```java
public java.lang.String getClusterAddress();
```

- *Type:* java.lang.String

---

##### `configurationEndpoint`<sup>Required</sup> <a name="configurationEndpoint" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.configurationEndpoint"></a>

```java
public java.lang.String getConfigurationEndpoint();
```

- *Type:* java.lang.String

---

##### `engineVersionActual`<sup>Required</sup> <a name="engineVersionActual" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersionActual"></a>

```java
public java.lang.String getEngineVersionActual();
```

- *Type:* java.lang.String

---

##### `logDeliveryConfiguration`<sup>Required</sup> <a name="logDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.logDeliveryConfiguration"></a>

```java
public ElasticacheClusterLogDeliveryConfigurationList getLogDeliveryConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList">ElasticacheClusterLogDeliveryConfigurationList</a>

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.applyImmediatelyInput"></a>

```java
public java.lang.Object getApplyImmediatelyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.autoMinorVersionUpgradeInput"></a>

```java
public java.lang.String getAutoMinorVersionUpgradeInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `azModeInput`<sup>Optional</sup> <a name="azModeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.azModeInput"></a>

```java
public java.lang.String getAzModeInput();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `finalSnapshotIdentifierInput`<sup>Optional</sup> <a name="finalSnapshotIdentifierInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifierInput"></a>

```java
public java.lang.String getFinalSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipDiscoveryInput`<sup>Optional</sup> <a name="ipDiscoveryInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.ipDiscoveryInput"></a>

```java
public java.lang.String getIpDiscoveryInput();
```

- *Type:* java.lang.String

---

##### `logDeliveryConfigurationInput`<sup>Optional</sup> <a name="logDeliveryConfigurationInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.logDeliveryConfigurationInput"></a>

```java
public java.lang.Object getLogDeliveryConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration">ElasticacheClusterLogDeliveryConfiguration</a>>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.maintenanceWindowInput"></a>

```java
public java.lang.String getMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `notificationTopicArnInput`<sup>Optional</sup> <a name="notificationTopicArnInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.notificationTopicArnInput"></a>

```java
public java.lang.String getNotificationTopicArnInput();
```

- *Type:* java.lang.String

---

##### `numCacheNodesInput`<sup>Optional</sup> <a name="numCacheNodesInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.numCacheNodesInput"></a>

```java
public java.lang.Number getNumCacheNodesInput();
```

- *Type:* java.lang.Number

---

##### `outpostModeInput`<sup>Optional</sup> <a name="outpostModeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.outpostModeInput"></a>

```java
public java.lang.String getOutpostModeInput();
```

- *Type:* java.lang.String

---

##### `parameterGroupNameInput`<sup>Optional</sup> <a name="parameterGroupNameInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.parameterGroupNameInput"></a>

```java
public java.lang.String getParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `preferredAvailabilityZonesInput`<sup>Optional</sup> <a name="preferredAvailabilityZonesInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getPreferredAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preferredOutpostArnInput`<sup>Optional</sup> <a name="preferredOutpostArnInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredOutpostArnInput"></a>

```java
public java.lang.String getPreferredOutpostArnInput();
```

- *Type:* java.lang.String

---

##### `replicationGroupIdInput`<sup>Optional</sup> <a name="replicationGroupIdInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.replicationGroupIdInput"></a>

```java
public java.lang.String getReplicationGroupIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupNamesInput`<sup>Optional</sup> <a name="securityGroupNamesInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupNamesInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotArnsInput`<sup>Optional</sup> <a name="snapshotArnsInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotArnsInput"></a>

```java
public java.util.List<java.lang.String> getSnapshotArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionLimitInput`<sup>Optional</sup> <a name="snapshotRetentionLimitInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimitInput"></a>

```java
public java.lang.Number getSnapshotRetentionLimitInput();
```

- *Type:* java.lang.Number

---

##### `snapshotWindowInput`<sup>Optional</sup> <a name="snapshotWindowInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotWindowInput"></a>

```java
public java.lang.String getSnapshotWindowInput();
```

- *Type:* java.lang.String

---

##### `subnetGroupNameInput`<sup>Optional</sup> <a name="subnetGroupNameInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.subnetGroupNameInput"></a>

```java
public java.lang.String getSubnetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.String getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.azMode"></a>

```java
public java.lang.String getAzMode();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `finalSnapshotIdentifier`<sup>Required</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifier"></a>

```java
public java.lang.String getFinalSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipDiscovery`<sup>Required</sup> <a name="ipDiscovery" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.ipDiscovery"></a>

```java
public java.lang.String getIpDiscovery();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.maintenanceWindow"></a>

```java
public java.lang.String getMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.notificationTopicArn"></a>

```java
public java.lang.String getNotificationTopicArn();
```

- *Type:* java.lang.String

---

##### `numCacheNodes`<sup>Required</sup> <a name="numCacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.numCacheNodes"></a>

```java
public java.lang.Number getNumCacheNodes();
```

- *Type:* java.lang.Number

---

##### `outpostMode`<sup>Required</sup> <a name="outpostMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.outpostMode"></a>

```java
public java.lang.String getOutpostMode();
```

- *Type:* java.lang.String

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.parameterGroupName"></a>

```java
public java.lang.String getParameterGroupName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `preferredAvailabilityZones`<sup>Required</sup> <a name="preferredAvailabilityZones" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZones"></a>

```java
public java.util.List<java.lang.String> getPreferredAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preferredOutpostArn`<sup>Required</sup> <a name="preferredOutpostArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredOutpostArn"></a>

```java
public java.lang.String getPreferredOutpostArn();
```

- *Type:* java.lang.String

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.replicationGroupId"></a>

```java
public java.lang.String getReplicationGroupId();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupNames`<sup>Required</sup> <a name="securityGroupNames" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupNames"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotArns`<sup>Required</sup> <a name="snapshotArns" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotArns"></a>

```java
public java.util.List<java.lang.String> getSnapshotArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="snapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimit"></a>

```java
public java.lang.Number getSnapshotRetentionLimit();
```

- *Type:* java.lang.Number

---

##### `snapshotWindow`<sup>Required</sup> <a name="snapshotWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotWindow"></a>

```java
public java.lang.String getSnapshotWindow();
```

- *Type:* java.lang.String

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.subnetGroupName"></a>

```java
public java.lang.String getSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheClusterCacheNodes <a name="ElasticacheClusterCacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_cluster.ElasticacheClusterCacheNodes;

ElasticacheClusterCacheNodes.builder()
    .build();
```


### ElasticacheClusterConfig <a name="ElasticacheClusterConfig" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_cluster.ElasticacheClusterConfig;

ElasticacheClusterConfig.builder()
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
    .clusterId(java.lang.String)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .autoMinorVersionUpgrade(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .azMode(java.lang.String)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .finalSnapshotIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .ipDiscovery(java.lang.String)
//  .logDeliveryConfiguration(IResolvable)
//  .logDeliveryConfiguration(java.util.List<ElasticacheClusterLogDeliveryConfiguration>)
//  .maintenanceWindow(java.lang.String)
//  .networkType(java.lang.String)
//  .nodeType(java.lang.String)
//  .notificationTopicArn(java.lang.String)
//  .numCacheNodes(java.lang.Number)
//  .outpostMode(java.lang.String)
//  .parameterGroupName(java.lang.String)
//  .port(java.lang.Number)
//  .preferredAvailabilityZones(java.util.List<java.lang.String>)
//  .preferredOutpostArn(java.lang.String)
//  .replicationGroupId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .securityGroupNames(java.util.List<java.lang.String>)
//  .snapshotArns(java.util.List<java.lang.String>)
//  .snapshotName(java.lang.String)
//  .snapshotRetentionLimit(java.lang.Number)
//  .snapshotWindow(java.lang.String)
//  .subnetGroupName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#cluster_id ElasticacheCluster#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#apply_immediately ElasticacheCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#auto_minor_version_upgrade ElasticacheCluster#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#availability_zone ElasticacheCluster#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.azMode">azMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#az_mode ElasticacheCluster#az_mode}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine ElasticacheCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine_version ElasticacheCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#final_snapshot_identifier ElasticacheCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#id ElasticacheCluster#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.ipDiscovery">ipDiscovery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#ip_discovery ElasticacheCluster#ip_discovery}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration">ElasticacheClusterLogDeliveryConfiguration</a>></code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#maintenance_window ElasticacheCluster#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#network_type ElasticacheCluster#network_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#node_type ElasticacheCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.notificationTopicArn">notificationTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#notification_topic_arn ElasticacheCluster#notification_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.numCacheNodes">numCacheNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#num_cache_nodes ElasticacheCluster#num_cache_nodes}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.outpostMode">outpostMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#outpost_mode ElasticacheCluster#outpost_mode}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#parameter_group_name ElasticacheCluster#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#port ElasticacheCluster#port}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.preferredAvailabilityZones">preferredAvailabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_availability_zones ElasticacheCluster#preferred_availability_zones}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.preferredOutpostArn">preferredOutpostArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_outpost_arn ElasticacheCluster#preferred_outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#replication_group_id ElasticacheCluster#replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_ids ElasticacheCluster#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupNames">securityGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_names ElasticacheCluster#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotArns">snapshotArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_arns ElasticacheCluster#snapshot_arns}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_name ElasticacheCluster#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_retention_limit ElasticacheCluster#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotWindow">snapshotWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_window ElasticacheCluster#snapshot_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#subnet_group_name ElasticacheCluster#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags ElasticacheCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags_all ElasticacheCluster#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#cluster_id ElasticacheCluster#cluster_id}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#apply_immediately ElasticacheCluster#apply_immediately}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.String getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#auto_minor_version_upgrade ElasticacheCluster#auto_minor_version_upgrade}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#availability_zone ElasticacheCluster#availability_zone}.

---

##### `azMode`<sup>Optional</sup> <a name="azMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.azMode"></a>

```java
public java.lang.String getAzMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#az_mode ElasticacheCluster#az_mode}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine ElasticacheCluster#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine_version ElasticacheCluster#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.finalSnapshotIdentifier"></a>

```java
public java.lang.String getFinalSnapshotIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#final_snapshot_identifier ElasticacheCluster#final_snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#id ElasticacheCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipDiscovery`<sup>Optional</sup> <a name="ipDiscovery" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.ipDiscovery"></a>

```java
public java.lang.String getIpDiscovery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#ip_discovery ElasticacheCluster#ip_discovery}.

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.logDeliveryConfiguration"></a>

```java
public java.lang.Object getLogDeliveryConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration">ElasticacheClusterLogDeliveryConfiguration</a>>

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_delivery_configuration ElasticacheCluster#log_delivery_configuration}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.maintenanceWindow"></a>

```java
public java.lang.String getMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#maintenance_window ElasticacheCluster#maintenance_window}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#network_type ElasticacheCluster#network_type}.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#node_type ElasticacheCluster#node_type}.

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.notificationTopicArn"></a>

```java
public java.lang.String getNotificationTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#notification_topic_arn ElasticacheCluster#notification_topic_arn}.

---

##### `numCacheNodes`<sup>Optional</sup> <a name="numCacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.numCacheNodes"></a>

```java
public java.lang.Number getNumCacheNodes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#num_cache_nodes ElasticacheCluster#num_cache_nodes}.

---

##### `outpostMode`<sup>Optional</sup> <a name="outpostMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.outpostMode"></a>

```java
public java.lang.String getOutpostMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#outpost_mode ElasticacheCluster#outpost_mode}.

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.parameterGroupName"></a>

```java
public java.lang.String getParameterGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#parameter_group_name ElasticacheCluster#parameter_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#port ElasticacheCluster#port}.

---

##### `preferredAvailabilityZones`<sup>Optional</sup> <a name="preferredAvailabilityZones" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.preferredAvailabilityZones"></a>

```java
public java.util.List<java.lang.String> getPreferredAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_availability_zones ElasticacheCluster#preferred_availability_zones}.

---

##### `preferredOutpostArn`<sup>Optional</sup> <a name="preferredOutpostArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.preferredOutpostArn"></a>

```java
public java.lang.String getPreferredOutpostArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_outpost_arn ElasticacheCluster#preferred_outpost_arn}.

---

##### `replicationGroupId`<sup>Optional</sup> <a name="replicationGroupId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.replicationGroupId"></a>

```java
public java.lang.String getReplicationGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#replication_group_id ElasticacheCluster#replication_group_id}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_ids ElasticacheCluster#security_group_ids}.

---

##### `securityGroupNames`<sup>Optional</sup> <a name="securityGroupNames" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupNames"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_names ElasticacheCluster#security_group_names}.

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotArns"></a>

```java
public java.util.List<java.lang.String> getSnapshotArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_arns ElasticacheCluster#snapshot_arns}.

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_name ElasticacheCluster#snapshot_name}.

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotRetentionLimit"></a>

```java
public java.lang.Number getSnapshotRetentionLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_retention_limit ElasticacheCluster#snapshot_retention_limit}.

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotWindow"></a>

```java
public java.lang.String getSnapshotWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_window ElasticacheCluster#snapshot_window}.

---

##### `subnetGroupName`<sup>Optional</sup> <a name="subnetGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.subnetGroupName"></a>

```java
public java.lang.String getSubnetGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#subnet_group_name ElasticacheCluster#subnet_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags ElasticacheCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags_all ElasticacheCluster#tags_all}.

---

### ElasticacheClusterLogDeliveryConfiguration <a name="ElasticacheClusterLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_cluster.ElasticacheClusterLogDeliveryConfiguration;

ElasticacheClusterLogDeliveryConfiguration.builder()
    .destination(java.lang.String)
    .destinationType(java.lang.String)
    .logFormat(java.lang.String)
    .logType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#destination ElasticacheCluster#destination}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#destination_type ElasticacheCluster#destination_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_format ElasticacheCluster#log_format}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.logType">logType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_type ElasticacheCluster#log_type}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#destination ElasticacheCluster#destination}.

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#destination_type ElasticacheCluster#destination_type}.

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_format ElasticacheCluster#log_format}.

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_type ElasticacheCluster#log_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheClusterCacheNodesList <a name="ElasticacheClusterCacheNodesList" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_cluster.ElasticacheClusterCacheNodesList;

new ElasticacheClusterCacheNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.get"></a>

```java
public ElasticacheClusterCacheNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ElasticacheClusterCacheNodesOutputReference <a name="ElasticacheClusterCacheNodesOutputReference" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_cluster.ElasticacheClusterCacheNodesOutputReference;

new ElasticacheClusterCacheNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodes">ElasticacheClusterCacheNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.internalValue"></a>

```java
public ElasticacheClusterCacheNodes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodes">ElasticacheClusterCacheNodes</a>

---


### ElasticacheClusterLogDeliveryConfigurationList <a name="ElasticacheClusterLogDeliveryConfigurationList" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_cluster.ElasticacheClusterLogDeliveryConfigurationList;

new ElasticacheClusterLogDeliveryConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.get"></a>

```java
public ElasticacheClusterLogDeliveryConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration">ElasticacheClusterLogDeliveryConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration">ElasticacheClusterLogDeliveryConfiguration</a>>

---


### ElasticacheClusterLogDeliveryConfigurationOutputReference <a name="ElasticacheClusterLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_cluster.ElasticacheClusterLogDeliveryConfigurationOutputReference;

new ElasticacheClusterLogDeliveryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logType">logType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration">ElasticacheClusterLogDeliveryConfiguration</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormatInput"></a>

```java
public java.lang.String getLogFormatInput();
```

- *Type:* java.lang.String

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logTypeInput"></a>

```java
public java.lang.String getLogTypeInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration">ElasticacheClusterLogDeliveryConfiguration</a> OR com.hashicorp.cdktf.IResolvable

---



