# `redshiftCluster` Submodule <a name="`redshiftCluster` Submodule" id="@cdktf/provider-aws.redshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftCluster <a name="RedshiftCluster" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster aws_redshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_identifier: str,
  node_type: str,
  allow_version_upgrade: typing.Union[bool, IResolvable] = None,
  apply_immediately: typing.Union[bool, IResolvable] = None,
  aqua_configuration_status: str = None,
  automated_snapshot_retention_period: typing.Union[int, float] = None,
  availability_zone: str = None,
  availability_zone_relocation_enabled: typing.Union[bool, IResolvable] = None,
  cluster_parameter_group_name: str = None,
  cluster_public_key: str = None,
  cluster_revision_number: str = None,
  cluster_security_groups: typing.List[str] = None,
  cluster_subnet_group_name: str = None,
  cluster_type: str = None,
  cluster_version: str = None,
  database_name: str = None,
  default_iam_role_arn: str = None,
  elastic_ip: str = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  endpoint: str = None,
  enhanced_vpc_routing: typing.Union[bool, IResolvable] = None,
  final_snapshot_identifier: str = None,
  iam_roles: typing.List[str] = None,
  id: str = None,
  kms_key_id: str = None,
  logging: RedshiftClusterLogging = None,
  maintenance_track_name: str = None,
  manual_snapshot_retention_period: typing.Union[int, float] = None,
  master_password: str = None,
  master_username: str = None,
  number_of_nodes: typing.Union[int, float] = None,
  owner_account: str = None,
  port: typing.Union[int, float] = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  skip_final_snapshot: typing.Union[bool, IResolvable] = None,
  snapshot_cluster_identifier: str = None,
  snapshot_copy: RedshiftClusterSnapshotCopy = None,
  snapshot_identifier: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: RedshiftClusterTimeouts = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#node_type RedshiftCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.allowVersionUpgrade">allow_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.aquaConfigurationStatus">aqua_configuration_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.automatedSnapshotRetentionPeriod">automated_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone RedshiftCluster#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocationEnabled">availability_zone_relocation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterParameterGroupName">cluster_parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterPublicKey">cluster_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_public_key RedshiftCluster#cluster_public_key}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterRevisionNumber">cluster_revision_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_revision_number RedshiftCluster#cluster_revision_number}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSecurityGroups">cluster_security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSubnetGroupName">cluster_subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterType">cluster_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_type RedshiftCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_version RedshiftCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#database_name RedshiftCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.elasticIp">elastic_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#encrypted RedshiftCluster#encrypted}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#endpoint RedshiftCluster#endpoint}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#iam_roles RedshiftCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#id RedshiftCluster#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.maintenanceTrackName">maintenance_track_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPassword">master_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_password RedshiftCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUsername">master_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_username RedshiftCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.ownerAccount">owner_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#port RedshiftCluster#port}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotClusterIdentifier">snapshot_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopy">snapshot_copy</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a></code> | snapshot_copy block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags RedshiftCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags_all RedshiftCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.nodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#node_type RedshiftCluster#node_type}.

---

##### `allow_version_upgrade`<sup>Optional</sup> <a name="allow_version_upgrade" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.allowVersionUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}.

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.applyImmediately"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}.

---

##### `aqua_configuration_status`<sup>Optional</sup> <a name="aqua_configuration_status" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.aquaConfigurationStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}.

---

##### `automated_snapshot_retention_period`<sup>Optional</sup> <a name="automated_snapshot_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.automatedSnapshotRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone RedshiftCluster#availability_zone}.

---

##### `availability_zone_relocation_enabled`<sup>Optional</sup> <a name="availability_zone_relocation_enabled" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}.

---

##### `cluster_parameter_group_name`<sup>Optional</sup> <a name="cluster_parameter_group_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterParameterGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}.

---

##### `cluster_public_key`<sup>Optional</sup> <a name="cluster_public_key" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterPublicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_public_key RedshiftCluster#cluster_public_key}.

---

##### `cluster_revision_number`<sup>Optional</sup> <a name="cluster_revision_number" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterRevisionNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_revision_number RedshiftCluster#cluster_revision_number}.

---

##### `cluster_security_groups`<sup>Optional</sup> <a name="cluster_security_groups" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSecurityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}.

---

##### `cluster_subnet_group_name`<sup>Optional</sup> <a name="cluster_subnet_group_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSubnetGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}.

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_type RedshiftCluster#cluster_type}.

---

##### `cluster_version`<sup>Optional</sup> <a name="cluster_version" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_version RedshiftCluster#cluster_version}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#database_name RedshiftCluster#database_name}.

---

##### `default_iam_role_arn`<sup>Optional</sup> <a name="default_iam_role_arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.defaultIamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}.

---

##### `elastic_ip`<sup>Optional</sup> <a name="elastic_ip" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.elasticIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.encrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#encrypted RedshiftCluster#encrypted}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#endpoint RedshiftCluster#endpoint}.

---

##### `enhanced_vpc_routing`<sup>Optional</sup> <a name="enhanced_vpc_routing" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.enhancedVpcRouting"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}.

---

##### `final_snapshot_identifier`<sup>Optional</sup> <a name="final_snapshot_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.finalSnapshotIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}.

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.iamRoles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#iam_roles RedshiftCluster#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#id RedshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#logging RedshiftCluster#logging}

---

##### `maintenance_track_name`<sup>Optional</sup> <a name="maintenance_track_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.maintenanceTrackName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}.

---

##### `manual_snapshot_retention_period`<sup>Optional</sup> <a name="manual_snapshot_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.manualSnapshotRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}.

---

##### `master_password`<sup>Optional</sup> <a name="master_password" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_password RedshiftCluster#master_password}.

---

##### `master_username`<sup>Optional</sup> <a name="master_username" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_username RedshiftCluster#master_username}.

---

##### `number_of_nodes`<sup>Optional</sup> <a name="number_of_nodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.numberOfNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}.

---

##### `owner_account`<sup>Optional</sup> <a name="owner_account" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.ownerAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#port RedshiftCluster#port}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}.

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.publiclyAccessible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}.

---

##### `skip_final_snapshot`<sup>Optional</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.skipFinalSnapshot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}.

---

##### `snapshot_cluster_identifier`<sup>Optional</sup> <a name="snapshot_cluster_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotClusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}.

---

##### `snapshot_copy`<sup>Optional</sup> <a name="snapshot_copy" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopy"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a>

snapshot_copy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_copy RedshiftCluster#snapshot_copy}

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags RedshiftCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags_all RedshiftCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#timeouts RedshiftCluster#timeouts}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putSnapshotCopy">put_snapshot_copy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade">reset_allow_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetApplyImmediately">reset_apply_immediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus">reset_aqua_configuration_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod">reset_automated_snapshot_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationEnabled">reset_availability_zone_relocation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName">reset_cluster_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterPublicKey">reset_cluster_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterRevisionNumber">reset_cluster_revision_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups">reset_cluster_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName">reset_cluster_subnet_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterType">reset_cluster_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterVersion">reset_cluster_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDefaultIamRoleArn">reset_default_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetElasticIp">reset_elastic_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting">reset_enhanced_vpc_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetFinalSnapshotIdentifier">reset_final_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetIamRoles">reset_iam_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName">reset_maintenance_track_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod">reset_manual_snapshot_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPassword">reset_master_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterUsername">reset_master_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetNumberOfNodes">reset_number_of_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOwnerAccount">reset_owner_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSkipFinalSnapshot">reset_skip_final_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier">reset_snapshot_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotCopy">reset_snapshot_copy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier">reset_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putLogging"></a>

```python
def put_logging(
  enable: typing.Union[bool, IResolvable],
  bucket_name: str = None,
  log_destination_type: str = None,
  log_exports: typing.List[str] = None,
  s3_key_prefix: str = None
) -> None
```

###### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putLogging.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enable RedshiftCluster#enable}.

---

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putLogging.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#bucket_name RedshiftCluster#bucket_name}.

---

###### `log_destination_type`<sup>Optional</sup> <a name="log_destination_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putLogging.parameter.logDestinationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}.

---

###### `log_exports`<sup>Optional</sup> <a name="log_exports" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putLogging.parameter.logExports"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_exports RedshiftCluster#log_exports}.

---

###### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putLogging.parameter.s3KeyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}.

---

##### `put_snapshot_copy` <a name="put_snapshot_copy" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putSnapshotCopy"></a>

```python
def put_snapshot_copy(
  destination_region: str,
  grant_name: str = None,
  retention_period: typing.Union[int, float] = None
) -> None
```

###### `destination_region`<sup>Required</sup> <a name="destination_region" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putSnapshotCopy.parameter.destinationRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#destination_region RedshiftCluster#destination_region}.

---

###### `grant_name`<sup>Optional</sup> <a name="grant_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putSnapshotCopy.parameter.grantName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#grant_name RedshiftCluster#grant_name}.

---

###### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putSnapshotCopy.parameter.retentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#retention_period RedshiftCluster#retention_period}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#create RedshiftCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#delete RedshiftCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#update RedshiftCluster#update}.

---

##### `reset_allow_version_upgrade` <a name="reset_allow_version_upgrade" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade"></a>

```python
def reset_allow_version_upgrade() -> None
```

##### `reset_apply_immediately` <a name="reset_apply_immediately" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetApplyImmediately"></a>

```python
def reset_apply_immediately() -> None
```

##### `reset_aqua_configuration_status` <a name="reset_aqua_configuration_status" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus"></a>

```python
def reset_aqua_configuration_status() -> None
```

##### `reset_automated_snapshot_retention_period` <a name="reset_automated_snapshot_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod"></a>

```python
def reset_automated_snapshot_retention_period() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_availability_zone_relocation_enabled` <a name="reset_availability_zone_relocation_enabled" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationEnabled"></a>

```python
def reset_availability_zone_relocation_enabled() -> None
```

##### `reset_cluster_parameter_group_name` <a name="reset_cluster_parameter_group_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName"></a>

```python
def reset_cluster_parameter_group_name() -> None
```

##### `reset_cluster_public_key` <a name="reset_cluster_public_key" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterPublicKey"></a>

```python
def reset_cluster_public_key() -> None
```

##### `reset_cluster_revision_number` <a name="reset_cluster_revision_number" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterRevisionNumber"></a>

```python
def reset_cluster_revision_number() -> None
```

##### `reset_cluster_security_groups` <a name="reset_cluster_security_groups" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups"></a>

```python
def reset_cluster_security_groups() -> None
```

##### `reset_cluster_subnet_group_name` <a name="reset_cluster_subnet_group_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName"></a>

```python
def reset_cluster_subnet_group_name() -> None
```

##### `reset_cluster_type` <a name="reset_cluster_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterType"></a>

```python
def reset_cluster_type() -> None
```

##### `reset_cluster_version` <a name="reset_cluster_version" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterVersion"></a>

```python
def reset_cluster_version() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_default_iam_role_arn` <a name="reset_default_iam_role_arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDefaultIamRoleArn"></a>

```python
def reset_default_iam_role_arn() -> None
```

##### `reset_elastic_ip` <a name="reset_elastic_ip" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetElasticIp"></a>

```python
def reset_elastic_ip() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_enhanced_vpc_routing` <a name="reset_enhanced_vpc_routing" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting"></a>

```python
def reset_enhanced_vpc_routing() -> None
```

##### `reset_final_snapshot_identifier` <a name="reset_final_snapshot_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetFinalSnapshotIdentifier"></a>

```python
def reset_final_snapshot_identifier() -> None
```

##### `reset_iam_roles` <a name="reset_iam_roles" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetIamRoles"></a>

```python
def reset_iam_roles() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_maintenance_track_name` <a name="reset_maintenance_track_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName"></a>

```python
def reset_maintenance_track_name() -> None
```

##### `reset_manual_snapshot_retention_period` <a name="reset_manual_snapshot_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod"></a>

```python
def reset_manual_snapshot_retention_period() -> None
```

##### `reset_master_password` <a name="reset_master_password" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPassword"></a>

```python
def reset_master_password() -> None
```

##### `reset_master_username` <a name="reset_master_username" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterUsername"></a>

```python
def reset_master_username() -> None
```

##### `reset_number_of_nodes` <a name="reset_number_of_nodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetNumberOfNodes"></a>

```python
def reset_number_of_nodes() -> None
```

##### `reset_owner_account` <a name="reset_owner_account" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOwnerAccount"></a>

```python
def reset_owner_account() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_skip_final_snapshot` <a name="reset_skip_final_snapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSkipFinalSnapshot"></a>

```python
def reset_skip_final_snapshot() -> None
```

##### `reset_snapshot_cluster_identifier` <a name="reset_snapshot_cluster_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier"></a>

```python
def reset_snapshot_cluster_identifier() -> None
```

##### `reset_snapshot_copy` <a name="reset_snapshot_copy" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotCopy"></a>

```python
def reset_snapshot_copy() -> None
```

##### `reset_snapshot_identifier` <a name="reset_snapshot_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier"></a>

```python
def reset_snapshot_identifier() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterNodes">cluster_nodes</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList">RedshiftClusterClusterNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference">RedshiftClusterLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotCopy">snapshot_copy</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference">RedshiftClusterSnapshotCopyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference">RedshiftClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput">allow_version_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediatelyInput">apply_immediately_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput">aqua_configuration_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput">automated_snapshot_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabledInput">availability_zone_relocation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput">cluster_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterPublicKeyInput">cluster_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterRevisionNumberInput">cluster_revision_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput">cluster_security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput">cluster_subnet_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterTypeInput">cluster_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersionInput">cluster_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArnInput">default_iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIpInput">elastic_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput">enhanced_vpc_routing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifierInput">final_snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRolesInput">iam_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput">maintenance_track_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput">manual_snapshot_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordInput">master_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsernameInput">master_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodesInput">number_of_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccountInput">owner_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshotInput">skip_final_snapshot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput">snapshot_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotCopyInput">snapshot_copy_input</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput">snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade">allow_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus">aqua_configuration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod">automated_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabled">availability_zone_relocation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName">cluster_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterPublicKey">cluster_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterRevisionNumber">cluster_revision_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups">cluster_security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName">cluster_subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIp">elastic_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackName">maintenance_track_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPassword">master_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsername">master_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccount">owner_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier">snapshot_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cluster_nodes`<sup>Required</sup> <a name="cluster_nodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterNodes"></a>

```python
cluster_nodes: RedshiftClusterClusterNodesList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList">RedshiftClusterClusterNodesList</a>

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.logging"></a>

```python
logging: RedshiftClusterLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference">RedshiftClusterLoggingOutputReference</a>

---

##### `snapshot_copy`<sup>Required</sup> <a name="snapshot_copy" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotCopy"></a>

```python
snapshot_copy: RedshiftClusterSnapshotCopyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference">RedshiftClusterSnapshotCopyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeouts"></a>

```python
timeouts: RedshiftClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference">RedshiftClusterTimeoutsOutputReference</a>

---

##### `allow_version_upgrade_input`<sup>Optional</sup> <a name="allow_version_upgrade_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput"></a>

```python
allow_version_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `apply_immediately_input`<sup>Optional</sup> <a name="apply_immediately_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediatelyInput"></a>

```python
apply_immediately_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aqua_configuration_status_input`<sup>Optional</sup> <a name="aqua_configuration_status_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput"></a>

```python
aqua_configuration_status_input: str
```

- *Type:* str

---

##### `automated_snapshot_retention_period_input`<sup>Optional</sup> <a name="automated_snapshot_retention_period_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput"></a>

```python
automated_snapshot_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `availability_zone_relocation_enabled_input`<sup>Optional</sup> <a name="availability_zone_relocation_enabled_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabledInput"></a>

```python
availability_zone_relocation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `cluster_parameter_group_name_input`<sup>Optional</sup> <a name="cluster_parameter_group_name_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput"></a>

```python
cluster_parameter_group_name_input: str
```

- *Type:* str

---

##### `cluster_public_key_input`<sup>Optional</sup> <a name="cluster_public_key_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterPublicKeyInput"></a>

```python
cluster_public_key_input: str
```

- *Type:* str

---

##### `cluster_revision_number_input`<sup>Optional</sup> <a name="cluster_revision_number_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterRevisionNumberInput"></a>

```python
cluster_revision_number_input: str
```

- *Type:* str

---

##### `cluster_security_groups_input`<sup>Optional</sup> <a name="cluster_security_groups_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput"></a>

```python
cluster_security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_subnet_group_name_input`<sup>Optional</sup> <a name="cluster_subnet_group_name_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput"></a>

```python
cluster_subnet_group_name_input: str
```

- *Type:* str

---

##### `cluster_type_input`<sup>Optional</sup> <a name="cluster_type_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterTypeInput"></a>

```python
cluster_type_input: str
```

- *Type:* str

---

##### `cluster_version_input`<sup>Optional</sup> <a name="cluster_version_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersionInput"></a>

```python
cluster_version_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `default_iam_role_arn_input`<sup>Optional</sup> <a name="default_iam_role_arn_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArnInput"></a>

```python
default_iam_role_arn_input: str
```

- *Type:* str

---

##### `elastic_ip_input`<sup>Optional</sup> <a name="elastic_ip_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIpInput"></a>

```python
elastic_ip_input: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `enhanced_vpc_routing_input`<sup>Optional</sup> <a name="enhanced_vpc_routing_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput"></a>

```python
enhanced_vpc_routing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `final_snapshot_identifier_input`<sup>Optional</sup> <a name="final_snapshot_identifier_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifierInput"></a>

```python
final_snapshot_identifier_input: str
```

- *Type:* str

---

##### `iam_roles_input`<sup>Optional</sup> <a name="iam_roles_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRolesInput"></a>

```python
iam_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.loggingInput"></a>

```python
logging_input: RedshiftClusterLogging
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a>

---

##### `maintenance_track_name_input`<sup>Optional</sup> <a name="maintenance_track_name_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput"></a>

```python
maintenance_track_name_input: str
```

- *Type:* str

---

##### `manual_snapshot_retention_period_input`<sup>Optional</sup> <a name="manual_snapshot_retention_period_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput"></a>

```python
manual_snapshot_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_password_input`<sup>Optional</sup> <a name="master_password_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordInput"></a>

```python
master_password_input: str
```

- *Type:* str

---

##### `master_username_input`<sup>Optional</sup> <a name="master_username_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsernameInput"></a>

```python
master_username_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `number_of_nodes_input`<sup>Optional</sup> <a name="number_of_nodes_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodesInput"></a>

```python
number_of_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_account_input`<sup>Optional</sup> <a name="owner_account_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccountInput"></a>

```python
owner_account_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_final_snapshot_input`<sup>Optional</sup> <a name="skip_final_snapshot_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshotInput"></a>

```python
skip_final_snapshot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_cluster_identifier_input`<sup>Optional</sup> <a name="snapshot_cluster_identifier_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput"></a>

```python
snapshot_cluster_identifier_input: str
```

- *Type:* str

---

##### `snapshot_copy_input`<sup>Optional</sup> <a name="snapshot_copy_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotCopyInput"></a>

```python
snapshot_copy_input: RedshiftClusterSnapshotCopy
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a>

---

##### `snapshot_identifier_input`<sup>Optional</sup> <a name="snapshot_identifier_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput"></a>

```python
snapshot_identifier_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[RedshiftClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_version_upgrade`<sup>Required</sup> <a name="allow_version_upgrade" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade"></a>

```python
allow_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `apply_immediately`<sup>Required</sup> <a name="apply_immediately" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediately"></a>

```python
apply_immediately: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aqua_configuration_status`<sup>Required</sup> <a name="aqua_configuration_status" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus"></a>

```python
aqua_configuration_status: str
```

- *Type:* str

---

##### `automated_snapshot_retention_period`<sup>Required</sup> <a name="automated_snapshot_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod"></a>

```python
automated_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_relocation_enabled`<sup>Required</sup> <a name="availability_zone_relocation_enabled" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabled"></a>

```python
availability_zone_relocation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `cluster_parameter_group_name`<sup>Required</sup> <a name="cluster_parameter_group_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName"></a>

```python
cluster_parameter_group_name: str
```

- *Type:* str

---

##### `cluster_public_key`<sup>Required</sup> <a name="cluster_public_key" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterPublicKey"></a>

```python
cluster_public_key: str
```

- *Type:* str

---

##### `cluster_revision_number`<sup>Required</sup> <a name="cluster_revision_number" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterRevisionNumber"></a>

```python
cluster_revision_number: str
```

- *Type:* str

---

##### `cluster_security_groups`<sup>Required</sup> <a name="cluster_security_groups" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups"></a>

```python
cluster_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_subnet_group_name`<sup>Required</sup> <a name="cluster_subnet_group_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName"></a>

```python
cluster_subnet_group_name: str
```

- *Type:* str

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `default_iam_role_arn`<sup>Required</sup> <a name="default_iam_role_arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArn"></a>

```python
default_iam_role_arn: str
```

- *Type:* str

---

##### `elastic_ip`<sup>Required</sup> <a name="elastic_ip" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIp"></a>

```python
elastic_ip: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `enhanced_vpc_routing`<sup>Required</sup> <a name="enhanced_vpc_routing" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting"></a>

```python
enhanced_vpc_routing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `final_snapshot_identifier`<sup>Required</sup> <a name="final_snapshot_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifier"></a>

```python
final_snapshot_identifier: str
```

- *Type:* str

---

##### `iam_roles`<sup>Required</sup> <a name="iam_roles" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `maintenance_track_name`<sup>Required</sup> <a name="maintenance_track_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackName"></a>

```python
maintenance_track_name: str
```

- *Type:* str

---

##### `manual_snapshot_retention_period`<sup>Required</sup> <a name="manual_snapshot_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod"></a>

```python
manual_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_password`<sup>Required</sup> <a name="master_password" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPassword"></a>

```python
master_password: str
```

- *Type:* str

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_account`<sup>Required</sup> <a name="owner_account" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_final_snapshot`<sup>Required</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshot"></a>

```python
skip_final_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_cluster_identifier`<sup>Required</sup> <a name="snapshot_cluster_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier"></a>

```python
snapshot_cluster_identifier: str
```

- *Type:* str

---

##### `snapshot_identifier`<sup>Required</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterClusterNodes <a name="RedshiftClusterClusterNodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftClusterClusterNodes()
```


### RedshiftClusterConfig <a name="RedshiftClusterConfig" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_identifier: str,
  node_type: str,
  allow_version_upgrade: typing.Union[bool, IResolvable] = None,
  apply_immediately: typing.Union[bool, IResolvable] = None,
  aqua_configuration_status: str = None,
  automated_snapshot_retention_period: typing.Union[int, float] = None,
  availability_zone: str = None,
  availability_zone_relocation_enabled: typing.Union[bool, IResolvable] = None,
  cluster_parameter_group_name: str = None,
  cluster_public_key: str = None,
  cluster_revision_number: str = None,
  cluster_security_groups: typing.List[str] = None,
  cluster_subnet_group_name: str = None,
  cluster_type: str = None,
  cluster_version: str = None,
  database_name: str = None,
  default_iam_role_arn: str = None,
  elastic_ip: str = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  endpoint: str = None,
  enhanced_vpc_routing: typing.Union[bool, IResolvable] = None,
  final_snapshot_identifier: str = None,
  iam_roles: typing.List[str] = None,
  id: str = None,
  kms_key_id: str = None,
  logging: RedshiftClusterLogging = None,
  maintenance_track_name: str = None,
  manual_snapshot_retention_period: typing.Union[int, float] = None,
  master_password: str = None,
  master_username: str = None,
  number_of_nodes: typing.Union[int, float] = None,
  owner_account: str = None,
  port: typing.Union[int, float] = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  skip_final_snapshot: typing.Union[bool, IResolvable] = None,
  snapshot_cluster_identifier: str = None,
  snapshot_copy: RedshiftClusterSnapshotCopy = None,
  snapshot_identifier: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: RedshiftClusterTimeouts = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#node_type RedshiftCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade">allow_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus">aqua_configuration_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod">automated_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone RedshiftCluster#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationEnabled">availability_zone_relocation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName">cluster_parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterPublicKey">cluster_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_public_key RedshiftCluster#cluster_public_key}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterRevisionNumber">cluster_revision_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_revision_number RedshiftCluster#cluster_revision_number}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups">cluster_security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName">cluster_subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterType">cluster_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_type RedshiftCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_version RedshiftCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#database_name RedshiftCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.elasticIp">elastic_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#encrypted RedshiftCluster#encrypted}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#endpoint RedshiftCluster#endpoint}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#iam_roles RedshiftCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#id RedshiftCluster#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName">maintenance_track_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPassword">master_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_password RedshiftCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterUsername">master_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_username RedshiftCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.ownerAccount">owner_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#port RedshiftCluster#port}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier">snapshot_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotCopy">snapshot_copy</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a></code> | snapshot_copy block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags RedshiftCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags_all RedshiftCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#node_type RedshiftCluster#node_type}.

---

##### `allow_version_upgrade`<sup>Optional</sup> <a name="allow_version_upgrade" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade"></a>

```python
allow_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}.

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.applyImmediately"></a>

```python
apply_immediately: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}.

---

##### `aqua_configuration_status`<sup>Optional</sup> <a name="aqua_configuration_status" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus"></a>

```python
aqua_configuration_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}.

---

##### `automated_snapshot_retention_period`<sup>Optional</sup> <a name="automated_snapshot_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod"></a>

```python
automated_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone RedshiftCluster#availability_zone}.

---

##### `availability_zone_relocation_enabled`<sup>Optional</sup> <a name="availability_zone_relocation_enabled" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationEnabled"></a>

```python
availability_zone_relocation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}.

---

##### `cluster_parameter_group_name`<sup>Optional</sup> <a name="cluster_parameter_group_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName"></a>

```python
cluster_parameter_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}.

---

##### `cluster_public_key`<sup>Optional</sup> <a name="cluster_public_key" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterPublicKey"></a>

```python
cluster_public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_public_key RedshiftCluster#cluster_public_key}.

---

##### `cluster_revision_number`<sup>Optional</sup> <a name="cluster_revision_number" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterRevisionNumber"></a>

```python
cluster_revision_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_revision_number RedshiftCluster#cluster_revision_number}.

---

##### `cluster_security_groups`<sup>Optional</sup> <a name="cluster_security_groups" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups"></a>

```python
cluster_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}.

---

##### `cluster_subnet_group_name`<sup>Optional</sup> <a name="cluster_subnet_group_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName"></a>

```python
cluster_subnet_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}.

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_type RedshiftCluster#cluster_type}.

---

##### `cluster_version`<sup>Optional</sup> <a name="cluster_version" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_version RedshiftCluster#cluster_version}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#database_name RedshiftCluster#database_name}.

---

##### `default_iam_role_arn`<sup>Optional</sup> <a name="default_iam_role_arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.defaultIamRoleArn"></a>

```python
default_iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}.

---

##### `elastic_ip`<sup>Optional</sup> <a name="elastic_ip" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.elasticIp"></a>

```python
elastic_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#encrypted RedshiftCluster#encrypted}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#endpoint RedshiftCluster#endpoint}.

---

##### `enhanced_vpc_routing`<sup>Optional</sup> <a name="enhanced_vpc_routing" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting"></a>

```python
enhanced_vpc_routing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}.

---

##### `final_snapshot_identifier`<sup>Optional</sup> <a name="final_snapshot_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.finalSnapshotIdentifier"></a>

```python
final_snapshot_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}.

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#iam_roles RedshiftCluster#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#id RedshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.logging"></a>

```python
logging: RedshiftClusterLogging
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#logging RedshiftCluster#logging}

---

##### `maintenance_track_name`<sup>Optional</sup> <a name="maintenance_track_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName"></a>

```python
maintenance_track_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}.

---

##### `manual_snapshot_retention_period`<sup>Optional</sup> <a name="manual_snapshot_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod"></a>

```python
manual_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}.

---

##### `master_password`<sup>Optional</sup> <a name="master_password" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPassword"></a>

```python
master_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_password RedshiftCluster#master_password}.

---

##### `master_username`<sup>Optional</sup> <a name="master_username" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_username RedshiftCluster#master_username}.

---

##### `number_of_nodes`<sup>Optional</sup> <a name="number_of_nodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}.

---

##### `owner_account`<sup>Optional</sup> <a name="owner_account" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#port RedshiftCluster#port}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}.

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}.

---

##### `skip_final_snapshot`<sup>Optional</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.skipFinalSnapshot"></a>

```python
skip_final_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}.

---

##### `snapshot_cluster_identifier`<sup>Optional</sup> <a name="snapshot_cluster_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier"></a>

```python
snapshot_cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}.

---

##### `snapshot_copy`<sup>Optional</sup> <a name="snapshot_copy" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotCopy"></a>

```python
snapshot_copy: RedshiftClusterSnapshotCopy
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a>

snapshot_copy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_copy RedshiftCluster#snapshot_copy}

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags RedshiftCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags_all RedshiftCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.timeouts"></a>

```python
timeouts: RedshiftClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#timeouts RedshiftCluster#timeouts}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}.

---

### RedshiftClusterLogging <a name="RedshiftClusterLogging" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftClusterLogging(
  enable: typing.Union[bool, IResolvable],
  bucket_name: str = None,
  log_destination_type: str = None,
  log_exports: typing.List[str] = None,
  s3_key_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enable RedshiftCluster#enable}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#bucket_name RedshiftCluster#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.logDestinationType">log_destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.logExports">log_exports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_exports RedshiftCluster#log_exports}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enable RedshiftCluster#enable}.

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#bucket_name RedshiftCluster#bucket_name}.

---

##### `log_destination_type`<sup>Optional</sup> <a name="log_destination_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.logDestinationType"></a>

```python
log_destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}.

---

##### `log_exports`<sup>Optional</sup> <a name="log_exports" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.logExports"></a>

```python
log_exports: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_exports RedshiftCluster#log_exports}.

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}.

---

### RedshiftClusterSnapshotCopy <a name="RedshiftClusterSnapshotCopy" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftClusterSnapshotCopy(
  destination_region: str,
  grant_name: str = None,
  retention_period: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.destinationRegion">destination_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#destination_region RedshiftCluster#destination_region}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.grantName">grant_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#grant_name RedshiftCluster#grant_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#retention_period RedshiftCluster#retention_period}. |

---

##### `destination_region`<sup>Required</sup> <a name="destination_region" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.destinationRegion"></a>

```python
destination_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#destination_region RedshiftCluster#destination_region}.

---

##### `grant_name`<sup>Optional</sup> <a name="grant_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.grantName"></a>

```python
grant_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#grant_name RedshiftCluster#grant_name}.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#retention_period RedshiftCluster#retention_period}.

---

### RedshiftClusterTimeouts <a name="RedshiftClusterTimeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#create RedshiftCluster#create}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#delete RedshiftCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#update RedshiftCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#create RedshiftCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#delete RedshiftCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#update RedshiftCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftClusterClusterNodesList <a name="RedshiftClusterClusterNodesList" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftClusterClusterNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftClusterClusterNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RedshiftClusterClusterNodesOutputReference <a name="RedshiftClusterClusterNodesOutputReference" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftClusterClusterNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.nodeRole">node_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodes">RedshiftClusterClusterNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_role`<sup>Required</sup> <a name="node_role" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.nodeRole"></a>

```python
node_role: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.internalValue"></a>

```python
internal_value: RedshiftClusterClusterNodes
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodes">RedshiftClusterClusterNodes</a>

---


### RedshiftClusterLoggingOutputReference <a name="RedshiftClusterLoggingOutputReference" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftClusterLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetLogDestinationType">reset_log_destination_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetLogExports">reset_log_exports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetS3KeyPrefix">reset_s3_key_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_log_destination_type` <a name="reset_log_destination_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetLogDestinationType"></a>

```python
def reset_log_destination_type() -> None
```

##### `reset_log_exports` <a name="reset_log_exports" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetLogExports"></a>

```python
def reset_log_exports() -> None
```

##### `reset_s3_key_prefix` <a name="reset_s3_key_prefix" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetS3KeyPrefix"></a>

```python
def reset_s3_key_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logDestinationTypeInput">log_destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logExportsInput">log_exports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.s3KeyPrefixInput">s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logDestinationType">log_destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logExports">log_exports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_destination_type_input`<sup>Optional</sup> <a name="log_destination_type_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logDestinationTypeInput"></a>

```python
log_destination_type_input: str
```

- *Type:* str

---

##### `log_exports_input`<sup>Optional</sup> <a name="log_exports_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logExportsInput"></a>

```python
log_exports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_key_prefix_input`<sup>Optional</sup> <a name="s3_key_prefix_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.s3KeyPrefixInput"></a>

```python
s3_key_prefix_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_destination_type`<sup>Required</sup> <a name="log_destination_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logDestinationType"></a>

```python
log_destination_type: str
```

- *Type:* str

---

##### `log_exports`<sup>Required</sup> <a name="log_exports" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logExports"></a>

```python
log_exports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.internalValue"></a>

```python
internal_value: RedshiftClusterLogging
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a>

---


### RedshiftClusterSnapshotCopyOutputReference <a name="RedshiftClusterSnapshotCopyOutputReference" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftClusterSnapshotCopyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resetGrantName">reset_grant_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resetRetentionPeriod">reset_retention_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grant_name` <a name="reset_grant_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resetGrantName"></a>

```python
def reset_grant_name() -> None
```

##### `reset_retention_period` <a name="reset_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resetRetentionPeriod"></a>

```python
def reset_retention_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.destinationRegionInput">destination_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.grantNameInput">grant_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.retentionPeriodInput">retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.destinationRegion">destination_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.grantName">grant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_region_input`<sup>Optional</sup> <a name="destination_region_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.destinationRegionInput"></a>

```python
destination_region_input: str
```

- *Type:* str

---

##### `grant_name_input`<sup>Optional</sup> <a name="grant_name_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.grantNameInput"></a>

```python
grant_name_input: str
```

- *Type:* str

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.retentionPeriodInput"></a>

```python
retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `destination_region`<sup>Required</sup> <a name="destination_region" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.destinationRegion"></a>

```python
destination_region: str
```

- *Type:* str

---

##### `grant_name`<sup>Required</sup> <a name="grant_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.grantName"></a>

```python
grant_name: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.internalValue"></a>

```python
internal_value: RedshiftClusterSnapshotCopy
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a>

---


### RedshiftClusterTimeoutsOutputReference <a name="RedshiftClusterTimeoutsOutputReference" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RedshiftClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>, cdktf.IResolvable]

---



