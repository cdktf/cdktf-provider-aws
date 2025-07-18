# `redshiftCluster` Submodule <a name="`redshiftCluster` Submodule" id="@cdktf/provider-aws.redshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftCluster <a name="RedshiftCluster" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster aws_redshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
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
  cluster_subnet_group_name: str = None,
  cluster_type: str = None,
  cluster_version: str = None,
  database_name: str = None,
  default_iam_role_arn: str = None,
  elastic_ip: str = None,
  encrypted: str = None,
  enhanced_vpc_routing: typing.Union[bool, IResolvable] = None,
  final_snapshot_identifier: str = None,
  iam_roles: typing.List[str] = None,
  id: str = None,
  kms_key_id: str = None,
  maintenance_track_name: str = None,
  manage_master_password: typing.Union[bool, IResolvable] = None,
  manual_snapshot_retention_period: typing.Union[int, float] = None,
  master_password: str = None,
  master_password_secret_kms_key_id: str = None,
  master_password_wo: str = None,
  master_password_wo_version: typing.Union[int, float] = None,
  master_username: str = None,
  multi_az: typing.Union[bool, IResolvable] = None,
  number_of_nodes: typing.Union[int, float] = None,
  owner_account: str = None,
  port: typing.Union[int, float] = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  region: str = None,
  skip_final_snapshot: typing.Union[bool, IResolvable] = None,
  snapshot_arn: str = None,
  snapshot_cluster_identifier: str = None,
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
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#node_type RedshiftCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.allowVersionUpgrade">allow_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.aquaConfigurationStatus">aqua_configuration_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.automatedSnapshotRetentionPeriod">automated_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#availability_zone RedshiftCluster#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocationEnabled">availability_zone_relocation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterParameterGroupName">cluster_parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSubnetGroupName">cluster_subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterType">cluster_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_type RedshiftCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_version RedshiftCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#database_name RedshiftCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.elasticIp">elastic_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.encrypted">encrypted</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#encrypted RedshiftCluster#encrypted}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#iam_roles RedshiftCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#id RedshiftCluster#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.maintenanceTrackName">maintenance_track_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.manageMasterPassword">manage_master_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#manage_master_password RedshiftCluster#manage_master_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPassword">master_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password RedshiftCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPasswordSecretKmsKeyId">master_password_secret_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_secret_kms_key_id RedshiftCluster#master_password_secret_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPasswordWo">master_password_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_wo RedshiftCluster#master_password_wo}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPasswordWoVersion">master_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_wo_version RedshiftCluster#master_password_wo_version}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUsername">master_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_username RedshiftCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#multi_az RedshiftCluster#multi_az}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.ownerAccount">owner_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#port RedshiftCluster#port}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotArn">snapshot_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_arn RedshiftCluster#snapshot_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotClusterIdentifier">snapshot_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#tags RedshiftCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#tags_all RedshiftCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}. |

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

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.nodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#node_type RedshiftCluster#node_type}.

---

##### `allow_version_upgrade`<sup>Optional</sup> <a name="allow_version_upgrade" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.allowVersionUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}.

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.applyImmediately"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}.

---

##### `aqua_configuration_status`<sup>Optional</sup> <a name="aqua_configuration_status" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.aquaConfigurationStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}.

---

##### `automated_snapshot_retention_period`<sup>Optional</sup> <a name="automated_snapshot_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.automatedSnapshotRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#availability_zone RedshiftCluster#availability_zone}.

---

##### `availability_zone_relocation_enabled`<sup>Optional</sup> <a name="availability_zone_relocation_enabled" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}.

---

##### `cluster_parameter_group_name`<sup>Optional</sup> <a name="cluster_parameter_group_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterParameterGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}.

---

##### `cluster_subnet_group_name`<sup>Optional</sup> <a name="cluster_subnet_group_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSubnetGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}.

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_type RedshiftCluster#cluster_type}.

---

##### `cluster_version`<sup>Optional</sup> <a name="cluster_version" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_version RedshiftCluster#cluster_version}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#database_name RedshiftCluster#database_name}.

---

##### `default_iam_role_arn`<sup>Optional</sup> <a name="default_iam_role_arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.defaultIamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}.

---

##### `elastic_ip`<sup>Optional</sup> <a name="elastic_ip" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.elasticIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.encrypted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#encrypted RedshiftCluster#encrypted}.

---

##### `enhanced_vpc_routing`<sup>Optional</sup> <a name="enhanced_vpc_routing" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.enhancedVpcRouting"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}.

---

##### `final_snapshot_identifier`<sup>Optional</sup> <a name="final_snapshot_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.finalSnapshotIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}.

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.iamRoles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#iam_roles RedshiftCluster#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#id RedshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}.

---

##### `maintenance_track_name`<sup>Optional</sup> <a name="maintenance_track_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.maintenanceTrackName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}.

---

##### `manage_master_password`<sup>Optional</sup> <a name="manage_master_password" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.manageMasterPassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#manage_master_password RedshiftCluster#manage_master_password}.

---

##### `manual_snapshot_retention_period`<sup>Optional</sup> <a name="manual_snapshot_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.manualSnapshotRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}.

---

##### `master_password`<sup>Optional</sup> <a name="master_password" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password RedshiftCluster#master_password}.

---

##### `master_password_secret_kms_key_id`<sup>Optional</sup> <a name="master_password_secret_kms_key_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPasswordSecretKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_secret_kms_key_id RedshiftCluster#master_password_secret_kms_key_id}.

---

##### `master_password_wo`<sup>Optional</sup> <a name="master_password_wo" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPasswordWo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_wo RedshiftCluster#master_password_wo}.

---

##### `master_password_wo_version`<sup>Optional</sup> <a name="master_password_wo_version" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPasswordWoVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_wo_version RedshiftCluster#master_password_wo_version}.

---

##### `master_username`<sup>Optional</sup> <a name="master_username" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_username RedshiftCluster#master_username}.

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.multiAz"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#multi_az RedshiftCluster#multi_az}.

---

##### `number_of_nodes`<sup>Optional</sup> <a name="number_of_nodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.numberOfNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}.

---

##### `owner_account`<sup>Optional</sup> <a name="owner_account" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.ownerAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#port RedshiftCluster#port}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}.

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.publiclyAccessible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#region RedshiftCluster#region}

---

##### `skip_final_snapshot`<sup>Optional</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.skipFinalSnapshot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}.

---

##### `snapshot_arn`<sup>Optional</sup> <a name="snapshot_arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_arn RedshiftCluster#snapshot_arn}.

---

##### `snapshot_cluster_identifier`<sup>Optional</sup> <a name="snapshot_cluster_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotClusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}.

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#tags RedshiftCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#tags_all RedshiftCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#timeouts RedshiftCluster#timeouts}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade">reset_allow_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetApplyImmediately">reset_apply_immediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus">reset_aqua_configuration_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod">reset_automated_snapshot_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationEnabled">reset_availability_zone_relocation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName">reset_cluster_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName">reset_cluster_subnet_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterType">reset_cluster_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterVersion">reset_cluster_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDefaultIamRoleArn">reset_default_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetElasticIp">reset_elastic_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting">reset_enhanced_vpc_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetFinalSnapshotIdentifier">reset_final_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetIamRoles">reset_iam_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName">reset_maintenance_track_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetManageMasterPassword">reset_manage_master_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod">reset_manual_snapshot_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPassword">reset_master_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPasswordSecretKmsKeyId">reset_master_password_secret_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPasswordWo">reset_master_password_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPasswordWoVersion">reset_master_password_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterUsername">reset_master_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMultiAz">reset_multi_az</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetNumberOfNodes">reset_number_of_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOwnerAccount">reset_owner_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSkipFinalSnapshot">reset_skip_final_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotArn">reset_snapshot_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier">reset_snapshot_cluster_identifier</a></code> | *No description.* |
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

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

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

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

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

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#create RedshiftCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#delete RedshiftCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#update RedshiftCluster#update}.

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

##### `reset_maintenance_track_name` <a name="reset_maintenance_track_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName"></a>

```python
def reset_maintenance_track_name() -> None
```

##### `reset_manage_master_password` <a name="reset_manage_master_password" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetManageMasterPassword"></a>

```python
def reset_manage_master_password() -> None
```

##### `reset_manual_snapshot_retention_period` <a name="reset_manual_snapshot_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod"></a>

```python
def reset_manual_snapshot_retention_period() -> None
```

##### `reset_master_password` <a name="reset_master_password" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPassword"></a>

```python
def reset_master_password() -> None
```

##### `reset_master_password_secret_kms_key_id` <a name="reset_master_password_secret_kms_key_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPasswordSecretKmsKeyId"></a>

```python
def reset_master_password_secret_kms_key_id() -> None
```

##### `reset_master_password_wo` <a name="reset_master_password_wo" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPasswordWo"></a>

```python
def reset_master_password_wo() -> None
```

##### `reset_master_password_wo_version` <a name="reset_master_password_wo_version" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPasswordWoVersion"></a>

```python
def reset_master_password_wo_version() -> None
```

##### `reset_master_username` <a name="reset_master_username" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterUsername"></a>

```python
def reset_master_username() -> None
```

##### `reset_multi_az` <a name="reset_multi_az" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMultiAz"></a>

```python
def reset_multi_az() -> None
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

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_skip_final_snapshot` <a name="reset_skip_final_snapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSkipFinalSnapshot"></a>

```python
def reset_skip_final_snapshot() -> None
```

##### `reset_snapshot_arn` <a name="reset_snapshot_arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotArn"></a>

```python
def reset_snapshot_arn() -> None
```

##### `reset_snapshot_cluster_identifier` <a name="reset_snapshot_cluster_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier"></a>

```python
def reset_snapshot_cluster_identifier() -> None
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
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RedshiftCluster resource upon running "cdktf plan <stack-name>". |

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

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster

redshiftCluster.RedshiftCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RedshiftCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftCluster to import is found.

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
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterNamespaceArn">cluster_namespace_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterNodes">cluster_nodes</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList">RedshiftClusterClusterNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterPublicKey">cluster_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterRevisionNumber">cluster_revision_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordSecretArn">master_password_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference">RedshiftClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput">allow_version_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediatelyInput">apply_immediately_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput">aqua_configuration_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput">automated_snapshot_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabledInput">availability_zone_relocation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput">cluster_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput">cluster_subnet_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterTypeInput">cluster_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersionInput">cluster_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArnInput">default_iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIpInput">elastic_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encryptedInput">encrypted_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput">enhanced_vpc_routing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifierInput">final_snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRolesInput">iam_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput">maintenance_track_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manageMasterPasswordInput">manage_master_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput">manual_snapshot_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordInput">master_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyIdInput">master_password_secret_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordWoInput">master_password_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordWoVersionInput">master_password_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsernameInput">master_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.multiAzInput">multi_az_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodesInput">number_of_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccountInput">owner_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshotInput">skip_final_snapshot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotArnInput">snapshot_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput">snapshot_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput">snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade">allow_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus">aqua_configuration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod">automated_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabled">availability_zone_relocation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName">cluster_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName">cluster_subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIp">elastic_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encrypted">encrypted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackName">maintenance_track_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manageMasterPassword">manage_master_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPassword">master_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyId">master_password_secret_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordWo">master_password_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordWoVersion">master_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsername">master_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccount">owner_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotArn">snapshot_arn</a></code> | <code>str</code> | *No description.* |
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
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

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

##### `cluster_namespace_arn`<sup>Required</sup> <a name="cluster_namespace_arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterNamespaceArn"></a>

```python
cluster_namespace_arn: str
```

- *Type:* str

---

##### `cluster_nodes`<sup>Required</sup> <a name="cluster_nodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterNodes"></a>

```python
cluster_nodes: RedshiftClusterClusterNodesList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList">RedshiftClusterClusterNodesList</a>

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

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `master_password_secret_arn`<sup>Required</sup> <a name="master_password_secret_arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordSecretArn"></a>

```python
master_password_secret_arn: str
```

- *Type:* str

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
encrypted_input: str
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

##### `maintenance_track_name_input`<sup>Optional</sup> <a name="maintenance_track_name_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput"></a>

```python
maintenance_track_name_input: str
```

- *Type:* str

---

##### `manage_master_password_input`<sup>Optional</sup> <a name="manage_master_password_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manageMasterPasswordInput"></a>

```python
manage_master_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

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

##### `master_password_secret_kms_key_id_input`<sup>Optional</sup> <a name="master_password_secret_kms_key_id_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyIdInput"></a>

```python
master_password_secret_kms_key_id_input: str
```

- *Type:* str

---

##### `master_password_wo_input`<sup>Optional</sup> <a name="master_password_wo_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordWoInput"></a>

```python
master_password_wo_input: str
```

- *Type:* str

---

##### `master_password_wo_version_input`<sup>Optional</sup> <a name="master_password_wo_version_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordWoVersionInput"></a>

```python
master_password_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_username_input`<sup>Optional</sup> <a name="master_username_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsernameInput"></a>

```python
master_username_input: str
```

- *Type:* str

---

##### `multi_az_input`<sup>Optional</sup> <a name="multi_az_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.multiAzInput"></a>

```python
multi_az_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

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

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `skip_final_snapshot_input`<sup>Optional</sup> <a name="skip_final_snapshot_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshotInput"></a>

```python
skip_final_snapshot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_arn_input`<sup>Optional</sup> <a name="snapshot_arn_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotArnInput"></a>

```python
snapshot_arn_input: str
```

- *Type:* str

---

##### `snapshot_cluster_identifier_input`<sup>Optional</sup> <a name="snapshot_cluster_identifier_input" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput"></a>

```python
snapshot_cluster_identifier_input: str
```

- *Type:* str

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
timeouts_input: typing.Union[IResolvable, RedshiftClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>]

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
encrypted: str
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

##### `manage_master_password`<sup>Required</sup> <a name="manage_master_password" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manageMasterPassword"></a>

```python
manage_master_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

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

##### `master_password_secret_kms_key_id`<sup>Required</sup> <a name="master_password_secret_kms_key_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyId"></a>

```python
master_password_secret_kms_key_id: str
```

- *Type:* str

---

##### `master_password_wo`<sup>Required</sup> <a name="master_password_wo" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordWo"></a>

```python
master_password_wo: str
```

- *Type:* str

---

##### `master_password_wo_version`<sup>Required</sup> <a name="master_password_wo_version" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordWoVersion"></a>

```python
master_password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.multiAz"></a>

```python
multi_az: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

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

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `skip_final_snapshot`<sup>Required</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshot"></a>

```python
skip_final_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_arn`<sup>Required</sup> <a name="snapshot_arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotArn"></a>

```python
snapshot_arn: str
```

- *Type:* str

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
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
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
  cluster_subnet_group_name: str = None,
  cluster_type: str = None,
  cluster_version: str = None,
  database_name: str = None,
  default_iam_role_arn: str = None,
  elastic_ip: str = None,
  encrypted: str = None,
  enhanced_vpc_routing: typing.Union[bool, IResolvable] = None,
  final_snapshot_identifier: str = None,
  iam_roles: typing.List[str] = None,
  id: str = None,
  kms_key_id: str = None,
  maintenance_track_name: str = None,
  manage_master_password: typing.Union[bool, IResolvable] = None,
  manual_snapshot_retention_period: typing.Union[int, float] = None,
  master_password: str = None,
  master_password_secret_kms_key_id: str = None,
  master_password_wo: str = None,
  master_password_wo_version: typing.Union[int, float] = None,
  master_username: str = None,
  multi_az: typing.Union[bool, IResolvable] = None,
  number_of_nodes: typing.Union[int, float] = None,
  owner_account: str = None,
  port: typing.Union[int, float] = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  region: str = None,
  skip_final_snapshot: typing.Union[bool, IResolvable] = None,
  snapshot_arn: str = None,
  snapshot_cluster_identifier: str = None,
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
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#node_type RedshiftCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade">allow_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus">aqua_configuration_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod">automated_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#availability_zone RedshiftCluster#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationEnabled">availability_zone_relocation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName">cluster_parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName">cluster_subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterType">cluster_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_type RedshiftCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_version RedshiftCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#database_name RedshiftCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.elasticIp">elastic_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.encrypted">encrypted</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#encrypted RedshiftCluster#encrypted}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#iam_roles RedshiftCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#id RedshiftCluster#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName">maintenance_track_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.manageMasterPassword">manage_master_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#manage_master_password RedshiftCluster#manage_master_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPassword">master_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password RedshiftCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPasswordSecretKmsKeyId">master_password_secret_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_secret_kms_key_id RedshiftCluster#master_password_secret_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPasswordWo">master_password_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_wo RedshiftCluster#master_password_wo}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPasswordWoVersion">master_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_wo_version RedshiftCluster#master_password_wo_version}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterUsername">master_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_username RedshiftCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#multi_az RedshiftCluster#multi_az}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.ownerAccount">owner_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#port RedshiftCluster#port}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotArn">snapshot_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_arn RedshiftCluster#snapshot_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier">snapshot_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#tags RedshiftCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#tags_all RedshiftCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#node_type RedshiftCluster#node_type}.

---

##### `allow_version_upgrade`<sup>Optional</sup> <a name="allow_version_upgrade" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade"></a>

```python
allow_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}.

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.applyImmediately"></a>

```python
apply_immediately: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}.

---

##### `aqua_configuration_status`<sup>Optional</sup> <a name="aqua_configuration_status" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus"></a>

```python
aqua_configuration_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}.

---

##### `automated_snapshot_retention_period`<sup>Optional</sup> <a name="automated_snapshot_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod"></a>

```python
automated_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#availability_zone RedshiftCluster#availability_zone}.

---

##### `availability_zone_relocation_enabled`<sup>Optional</sup> <a name="availability_zone_relocation_enabled" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationEnabled"></a>

```python
availability_zone_relocation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}.

---

##### `cluster_parameter_group_name`<sup>Optional</sup> <a name="cluster_parameter_group_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName"></a>

```python
cluster_parameter_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}.

---

##### `cluster_subnet_group_name`<sup>Optional</sup> <a name="cluster_subnet_group_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName"></a>

```python
cluster_subnet_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}.

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_type RedshiftCluster#cluster_type}.

---

##### `cluster_version`<sup>Optional</sup> <a name="cluster_version" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_version RedshiftCluster#cluster_version}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#database_name RedshiftCluster#database_name}.

---

##### `default_iam_role_arn`<sup>Optional</sup> <a name="default_iam_role_arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.defaultIamRoleArn"></a>

```python
default_iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}.

---

##### `elastic_ip`<sup>Optional</sup> <a name="elastic_ip" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.elasticIp"></a>

```python
elastic_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.encrypted"></a>

```python
encrypted: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#encrypted RedshiftCluster#encrypted}.

---

##### `enhanced_vpc_routing`<sup>Optional</sup> <a name="enhanced_vpc_routing" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting"></a>

```python
enhanced_vpc_routing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}.

---

##### `final_snapshot_identifier`<sup>Optional</sup> <a name="final_snapshot_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.finalSnapshotIdentifier"></a>

```python
final_snapshot_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}.

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#iam_roles RedshiftCluster#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#id RedshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}.

---

##### `maintenance_track_name`<sup>Optional</sup> <a name="maintenance_track_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName"></a>

```python
maintenance_track_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}.

---

##### `manage_master_password`<sup>Optional</sup> <a name="manage_master_password" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.manageMasterPassword"></a>

```python
manage_master_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#manage_master_password RedshiftCluster#manage_master_password}.

---

##### `manual_snapshot_retention_period`<sup>Optional</sup> <a name="manual_snapshot_retention_period" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod"></a>

```python
manual_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}.

---

##### `master_password`<sup>Optional</sup> <a name="master_password" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPassword"></a>

```python
master_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password RedshiftCluster#master_password}.

---

##### `master_password_secret_kms_key_id`<sup>Optional</sup> <a name="master_password_secret_kms_key_id" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPasswordSecretKmsKeyId"></a>

```python
master_password_secret_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_secret_kms_key_id RedshiftCluster#master_password_secret_kms_key_id}.

---

##### `master_password_wo`<sup>Optional</sup> <a name="master_password_wo" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPasswordWo"></a>

```python
master_password_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_wo RedshiftCluster#master_password_wo}.

---

##### `master_password_wo_version`<sup>Optional</sup> <a name="master_password_wo_version" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPasswordWoVersion"></a>

```python
master_password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_wo_version RedshiftCluster#master_password_wo_version}.

---

##### `master_username`<sup>Optional</sup> <a name="master_username" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_username RedshiftCluster#master_username}.

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.multiAz"></a>

```python
multi_az: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#multi_az RedshiftCluster#multi_az}.

---

##### `number_of_nodes`<sup>Optional</sup> <a name="number_of_nodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}.

---

##### `owner_account`<sup>Optional</sup> <a name="owner_account" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#port RedshiftCluster#port}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}.

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#region RedshiftCluster#region}

---

##### `skip_final_snapshot`<sup>Optional</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.skipFinalSnapshot"></a>

```python
skip_final_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}.

---

##### `snapshot_arn`<sup>Optional</sup> <a name="snapshot_arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotArn"></a>

```python
snapshot_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_arn RedshiftCluster#snapshot_arn}.

---

##### `snapshot_cluster_identifier`<sup>Optional</sup> <a name="snapshot_cluster_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier"></a>

```python
snapshot_cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}.

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#tags RedshiftCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#tags_all RedshiftCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.timeouts"></a>

```python
timeouts: RedshiftClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#timeouts RedshiftCluster#timeouts}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}.

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
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#create RedshiftCluster#create}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#delete RedshiftCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#update RedshiftCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#create RedshiftCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#delete RedshiftCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#update RedshiftCluster#update}.

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
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

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
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>]</code> | *No description.* |

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
internal_value: typing.Union[IResolvable, RedshiftClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>]

---



