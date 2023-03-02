# `neptuneCluster` Submodule <a name="`neptuneCluster` Submodule" id="@cdktf/provider-aws.neptuneCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneCluster <a name="NeptuneCluster" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster aws_neptune_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster

neptuneCluster.NeptuneCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allow_major_version_upgrade: typing.Union[bool, IResolvable] = None,
  apply_immediately: typing.Union[bool, IResolvable] = None,
  availability_zones: typing.List[str] = None,
  backup_retention_period: typing.Union[int, float] = None,
  cluster_identifier: str = None,
  cluster_identifier_prefix: str = None,
  copy_tags_to_snapshot: typing.Union[bool, IResolvable] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  enable_cloudwatch_logs_exports: typing.List[str] = None,
  engine: str = None,
  engine_version: str = None,
  final_snapshot_identifier: str = None,
  global_cluster_identifier: str = None,
  iam_database_authentication_enabled: typing.Union[bool, IResolvable] = None,
  iam_roles: typing.List[str] = None,
  id: str = None,
  kms_key_arn: str = None,
  neptune_cluster_parameter_group_name: str = None,
  neptune_instance_parameter_group_name: str = None,
  neptune_subnet_group_name: str = None,
  port: typing.Union[int, float] = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  replication_source_identifier: str = None,
  serverless_v2_scaling_configuration: NeptuneClusterServerlessV2ScalingConfiguration = None,
  skip_final_snapshot: typing.Union[bool, IResolvable] = None,
  snapshot_identifier: str = None,
  storage_encrypted: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: NeptuneClusterTimeouts = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.allowMajorVersionUpgrade">allow_major_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#allow_major_version_upgrade NeptuneCluster#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#availability_zones NeptuneCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.clusterIdentifierPrefix">cluster_identifier_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.enableCloudwatchLogsExports">enable_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine NeptuneCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine_version NeptuneCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.globalClusterIdentifier">global_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#global_cluster_identifier NeptuneCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.iamDatabaseAuthenticationEnabled">iam_database_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_roles NeptuneCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#id NeptuneCluster#id}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.neptuneClusterParameterGroupName">neptune_cluster_parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.neptuneInstanceParameterGroupName">neptune_instance_parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_instance_parameter_group_name NeptuneCluster#neptune_instance_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.neptuneSubnetGroupName">neptune_subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#port NeptuneCluster#port}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.replicationSourceIdentifier">replication_source_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.serverlessV2ScalingConfiguration">serverless_v2_scaling_configuration</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | serverless_v2_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.storageEncrypted">storage_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags NeptuneCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags_all NeptuneCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_major_version_upgrade`<sup>Optional</sup> <a name="allow_major_version_upgrade" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.allowMajorVersionUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#allow_major_version_upgrade NeptuneCluster#allow_major_version_upgrade}.

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.applyImmediately"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}.

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#availability_zones NeptuneCluster#availability_zones}.

---

##### `backup_retention_period`<sup>Optional</sup> <a name="backup_retention_period" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.backupRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}.

---

##### `cluster_identifier`<sup>Optional</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.clusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}.

---

##### `cluster_identifier_prefix`<sup>Optional</sup> <a name="cluster_identifier_prefix" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.clusterIdentifierPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}.

---

##### `copy_tags_to_snapshot`<sup>Optional</sup> <a name="copy_tags_to_snapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.copyTagsToSnapshot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}.

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}.

---

##### `enable_cloudwatch_logs_exports`<sup>Optional</sup> <a name="enable_cloudwatch_logs_exports" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.enableCloudwatchLogsExports"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine NeptuneCluster#engine}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine_version NeptuneCluster#engine_version}.

---

##### `final_snapshot_identifier`<sup>Optional</sup> <a name="final_snapshot_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.finalSnapshotIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}.

---

##### `global_cluster_identifier`<sup>Optional</sup> <a name="global_cluster_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.globalClusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#global_cluster_identifier NeptuneCluster#global_cluster_identifier}.

---

##### `iam_database_authentication_enabled`<sup>Optional</sup> <a name="iam_database_authentication_enabled" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.iamDatabaseAuthenticationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}.

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.iamRoles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_roles NeptuneCluster#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#id NeptuneCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}.

---

##### `neptune_cluster_parameter_group_name`<sup>Optional</sup> <a name="neptune_cluster_parameter_group_name" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.neptuneClusterParameterGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}.

---

##### `neptune_instance_parameter_group_name`<sup>Optional</sup> <a name="neptune_instance_parameter_group_name" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.neptuneInstanceParameterGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_instance_parameter_group_name NeptuneCluster#neptune_instance_parameter_group_name}.

---

##### `neptune_subnet_group_name`<sup>Optional</sup> <a name="neptune_subnet_group_name" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.neptuneSubnetGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#port NeptuneCluster#port}.

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}.

---

##### `replication_source_identifier`<sup>Optional</sup> <a name="replication_source_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.replicationSourceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}.

---

##### `serverless_v2_scaling_configuration`<sup>Optional</sup> <a name="serverless_v2_scaling_configuration" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.serverlessV2ScalingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

serverless_v2_scaling_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#serverless_v2_scaling_configuration NeptuneCluster#serverless_v2_scaling_configuration}

---

##### `skip_final_snapshot`<sup>Optional</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.skipFinalSnapshot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}.

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}.

---

##### `storage_encrypted`<sup>Optional</sup> <a name="storage_encrypted" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.storageEncrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags NeptuneCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags_all NeptuneCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#timeouts NeptuneCluster#timeouts}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putServerlessV2ScalingConfiguration">put_serverless_v2_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetAllowMajorVersionUpgrade">reset_allow_major_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetApplyImmediately">reset_apply_immediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetAvailabilityZones">reset_availability_zones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetBackupRetentionPeriod">reset_backup_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifier">reset_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifierPrefix">reset_cluster_identifier_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetCopyTagsToSnapshot">reset_copy_tags_to_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEnableCloudwatchLogsExports">reset_enable_cloudwatch_logs_exports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetFinalSnapshotIdentifier">reset_final_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetGlobalClusterIdentifier">reset_global_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetIamDatabaseAuthenticationEnabled">reset_iam_database_authentication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetIamRoles">reset_iam_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneClusterParameterGroupName">reset_neptune_cluster_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneInstanceParameterGroupName">reset_neptune_instance_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneSubnetGroupName">reset_neptune_subnet_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredBackupWindow">reset_preferred_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetReplicationSourceIdentifier">reset_replication_source_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetServerlessV2ScalingConfiguration">reset_serverless_v2_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetSkipFinalSnapshot">reset_skip_final_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetSnapshotIdentifier">reset_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetStorageEncrypted">reset_storage_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_serverless_v2_scaling_configuration` <a name="put_serverless_v2_scaling_configuration" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putServerlessV2ScalingConfiguration"></a>

```python
def put_serverless_v2_scaling_configuration(
  max_capacity: typing.Union[int, float] = None,
  min_capacity: typing.Union[int, float] = None
) -> None
```

###### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putServerlessV2ScalingConfiguration.parameter.maxCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#max_capacity NeptuneCluster#max_capacity}.

---

###### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putServerlessV2ScalingConfiguration.parameter.minCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#min_capacity NeptuneCluster#min_capacity}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#create NeptuneCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#delete NeptuneCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#update NeptuneCluster#update}.

---

##### `reset_allow_major_version_upgrade` <a name="reset_allow_major_version_upgrade" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetAllowMajorVersionUpgrade"></a>

```python
def reset_allow_major_version_upgrade() -> None
```

##### `reset_apply_immediately` <a name="reset_apply_immediately" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetApplyImmediately"></a>

```python
def reset_apply_immediately() -> None
```

##### `reset_availability_zones` <a name="reset_availability_zones" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetAvailabilityZones"></a>

```python
def reset_availability_zones() -> None
```

##### `reset_backup_retention_period` <a name="reset_backup_retention_period" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetBackupRetentionPeriod"></a>

```python
def reset_backup_retention_period() -> None
```

##### `reset_cluster_identifier` <a name="reset_cluster_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifier"></a>

```python
def reset_cluster_identifier() -> None
```

##### `reset_cluster_identifier_prefix` <a name="reset_cluster_identifier_prefix" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifierPrefix"></a>

```python
def reset_cluster_identifier_prefix() -> None
```

##### `reset_copy_tags_to_snapshot` <a name="reset_copy_tags_to_snapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetCopyTagsToSnapshot"></a>

```python
def reset_copy_tags_to_snapshot() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_enable_cloudwatch_logs_exports` <a name="reset_enable_cloudwatch_logs_exports" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEnableCloudwatchLogsExports"></a>

```python
def reset_enable_cloudwatch_logs_exports() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_final_snapshot_identifier` <a name="reset_final_snapshot_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetFinalSnapshotIdentifier"></a>

```python
def reset_final_snapshot_identifier() -> None
```

##### `reset_global_cluster_identifier` <a name="reset_global_cluster_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetGlobalClusterIdentifier"></a>

```python
def reset_global_cluster_identifier() -> None
```

##### `reset_iam_database_authentication_enabled` <a name="reset_iam_database_authentication_enabled" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetIamDatabaseAuthenticationEnabled"></a>

```python
def reset_iam_database_authentication_enabled() -> None
```

##### `reset_iam_roles` <a name="reset_iam_roles" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetIamRoles"></a>

```python
def reset_iam_roles() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_neptune_cluster_parameter_group_name` <a name="reset_neptune_cluster_parameter_group_name" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneClusterParameterGroupName"></a>

```python
def reset_neptune_cluster_parameter_group_name() -> None
```

##### `reset_neptune_instance_parameter_group_name` <a name="reset_neptune_instance_parameter_group_name" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneInstanceParameterGroupName"></a>

```python
def reset_neptune_instance_parameter_group_name() -> None
```

##### `reset_neptune_subnet_group_name` <a name="reset_neptune_subnet_group_name" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneSubnetGroupName"></a>

```python
def reset_neptune_subnet_group_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_preferred_backup_window` <a name="reset_preferred_backup_window" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredBackupWindow"></a>

```python
def reset_preferred_backup_window() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_replication_source_identifier` <a name="reset_replication_source_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetReplicationSourceIdentifier"></a>

```python
def reset_replication_source_identifier() -> None
```

##### `reset_serverless_v2_scaling_configuration` <a name="reset_serverless_v2_scaling_configuration" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetServerlessV2ScalingConfiguration"></a>

```python
def reset_serverless_v2_scaling_configuration() -> None
```

##### `reset_skip_final_snapshot` <a name="reset_skip_final_snapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetSkipFinalSnapshot"></a>

```python
def reset_skip_final_snapshot() -> None
```

##### `reset_snapshot_identifier` <a name="reset_snapshot_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetSnapshotIdentifier"></a>

```python
def reset_snapshot_identifier() -> None
```

##### `reset_storage_encrypted` <a name="reset_storage_encrypted" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetStorageEncrypted"></a>

```python
def reset_storage_encrypted() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster

neptuneCluster.NeptuneCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster

neptuneCluster.NeptuneCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster

neptuneCluster.NeptuneCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterMembers">cluster_members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterResourceId">cluster_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.readerEndpoint">reader_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfiguration">serverless_v2_scaling_configuration</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference">NeptuneClusterServerlessV2ScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference">NeptuneClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgradeInput">allow_major_version_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediatelyInput">apply_immediately_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriodInput">backup_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefixInput">cluster_identifier_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshotInput">copy_tags_to_snapshot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExportsInput">enable_cloudwatch_logs_exports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifierInput">final_snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifierInput">global_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabledInput">iam_database_authentication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamRolesInput">iam_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupNameInput">neptune_cluster_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupNameInput">neptune_instance_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupNameInput">neptune_subnet_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindowInput">preferred_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifierInput">replication_source_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfigurationInput">serverless_v2_scaling_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshotInput">skip_final_snapshot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifierInput">snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncryptedInput">storage_encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgrade">allow_major_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefix">cluster_identifier_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExports">enable_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifier">global_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabled">iam_database_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupName">neptune_cluster_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupName">neptune_instance_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupName">neptune_subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifier">replication_source_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncrypted">storage_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cluster_members`<sup>Required</sup> <a name="cluster_members" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterMembers"></a>

```python
cluster_members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_resource_id`<sup>Required</sup> <a name="cluster_resource_id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterResourceId"></a>

```python
cluster_resource_id: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `reader_endpoint`<sup>Required</sup> <a name="reader_endpoint" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.readerEndpoint"></a>

```python
reader_endpoint: str
```

- *Type:* str

---

##### `serverless_v2_scaling_configuration`<sup>Required</sup> <a name="serverless_v2_scaling_configuration" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfiguration"></a>

```python
serverless_v2_scaling_configuration: NeptuneClusterServerlessV2ScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference">NeptuneClusterServerlessV2ScalingConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.timeouts"></a>

```python
timeouts: NeptuneClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference">NeptuneClusterTimeoutsOutputReference</a>

---

##### `allow_major_version_upgrade_input`<sup>Optional</sup> <a name="allow_major_version_upgrade_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgradeInput"></a>

```python
allow_major_version_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `apply_immediately_input`<sup>Optional</sup> <a name="apply_immediately_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediatelyInput"></a>

```python
apply_immediately_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_retention_period_input`<sup>Optional</sup> <a name="backup_retention_period_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriodInput"></a>

```python
backup_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `cluster_identifier_prefix_input`<sup>Optional</sup> <a name="cluster_identifier_prefix_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefixInput"></a>

```python
cluster_identifier_prefix_input: str
```

- *Type:* str

---

##### `copy_tags_to_snapshot_input`<sup>Optional</sup> <a name="copy_tags_to_snapshot_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshotInput"></a>

```python
copy_tags_to_snapshot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_cloudwatch_logs_exports_input`<sup>Optional</sup> <a name="enable_cloudwatch_logs_exports_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExportsInput"></a>

```python
enable_cloudwatch_logs_exports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `final_snapshot_identifier_input`<sup>Optional</sup> <a name="final_snapshot_identifier_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifierInput"></a>

```python
final_snapshot_identifier_input: str
```

- *Type:* str

---

##### `global_cluster_identifier_input`<sup>Optional</sup> <a name="global_cluster_identifier_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifierInput"></a>

```python
global_cluster_identifier_input: str
```

- *Type:* str

---

##### `iam_database_authentication_enabled_input`<sup>Optional</sup> <a name="iam_database_authentication_enabled_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabledInput"></a>

```python
iam_database_authentication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iam_roles_input`<sup>Optional</sup> <a name="iam_roles_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamRolesInput"></a>

```python
iam_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `neptune_cluster_parameter_group_name_input`<sup>Optional</sup> <a name="neptune_cluster_parameter_group_name_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupNameInput"></a>

```python
neptune_cluster_parameter_group_name_input: str
```

- *Type:* str

---

##### `neptune_instance_parameter_group_name_input`<sup>Optional</sup> <a name="neptune_instance_parameter_group_name_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupNameInput"></a>

```python
neptune_instance_parameter_group_name_input: str
```

- *Type:* str

---

##### `neptune_subnet_group_name_input`<sup>Optional</sup> <a name="neptune_subnet_group_name_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupNameInput"></a>

```python
neptune_subnet_group_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_backup_window_input`<sup>Optional</sup> <a name="preferred_backup_window_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindowInput"></a>

```python
preferred_backup_window_input: str
```

- *Type:* str

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `replication_source_identifier_input`<sup>Optional</sup> <a name="replication_source_identifier_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifierInput"></a>

```python
replication_source_identifier_input: str
```

- *Type:* str

---

##### `serverless_v2_scaling_configuration_input`<sup>Optional</sup> <a name="serverless_v2_scaling_configuration_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfigurationInput"></a>

```python
serverless_v2_scaling_configuration_input: NeptuneClusterServerlessV2ScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

---

##### `skip_final_snapshot_input`<sup>Optional</sup> <a name="skip_final_snapshot_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshotInput"></a>

```python
skip_final_snapshot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_identifier_input`<sup>Optional</sup> <a name="snapshot_identifier_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifierInput"></a>

```python
snapshot_identifier_input: str
```

- *Type:* str

---

##### `storage_encrypted_input`<sup>Optional</sup> <a name="storage_encrypted_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncryptedInput"></a>

```python
storage_encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NeptuneClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_major_version_upgrade`<sup>Required</sup> <a name="allow_major_version_upgrade" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgrade"></a>

```python
allow_major_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `apply_immediately`<sup>Required</sup> <a name="apply_immediately" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediately"></a>

```python
apply_immediately: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_retention_period`<sup>Required</sup> <a name="backup_retention_period" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriod"></a>

```python
backup_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `cluster_identifier_prefix`<sup>Required</sup> <a name="cluster_identifier_prefix" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefix"></a>

```python
cluster_identifier_prefix: str
```

- *Type:* str

---

##### `copy_tags_to_snapshot`<sup>Required</sup> <a name="copy_tags_to_snapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshot"></a>

```python
copy_tags_to_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_cloudwatch_logs_exports`<sup>Required</sup> <a name="enable_cloudwatch_logs_exports" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExports"></a>

```python
enable_cloudwatch_logs_exports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `final_snapshot_identifier`<sup>Required</sup> <a name="final_snapshot_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifier"></a>

```python
final_snapshot_identifier: str
```

- *Type:* str

---

##### `global_cluster_identifier`<sup>Required</sup> <a name="global_cluster_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifier"></a>

```python
global_cluster_identifier: str
```

- *Type:* str

---

##### `iam_database_authentication_enabled`<sup>Required</sup> <a name="iam_database_authentication_enabled" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabled"></a>

```python
iam_database_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iam_roles`<sup>Required</sup> <a name="iam_roles" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `neptune_cluster_parameter_group_name`<sup>Required</sup> <a name="neptune_cluster_parameter_group_name" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupName"></a>

```python
neptune_cluster_parameter_group_name: str
```

- *Type:* str

---

##### `neptune_instance_parameter_group_name`<sup>Required</sup> <a name="neptune_instance_parameter_group_name" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupName"></a>

```python
neptune_instance_parameter_group_name: str
```

- *Type:* str

---

##### `neptune_subnet_group_name`<sup>Required</sup> <a name="neptune_subnet_group_name" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupName"></a>

```python
neptune_subnet_group_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_backup_window`<sup>Required</sup> <a name="preferred_backup_window" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `replication_source_identifier`<sup>Required</sup> <a name="replication_source_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifier"></a>

```python
replication_source_identifier: str
```

- *Type:* str

---

##### `skip_final_snapshot`<sup>Required</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshot"></a>

```python
skip_final_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_identifier`<sup>Required</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

---

##### `storage_encrypted`<sup>Required</sup> <a name="storage_encrypted" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncrypted"></a>

```python
storage_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneClusterConfig <a name="NeptuneClusterConfig" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster

neptuneCluster.NeptuneClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allow_major_version_upgrade: typing.Union[bool, IResolvable] = None,
  apply_immediately: typing.Union[bool, IResolvable] = None,
  availability_zones: typing.List[str] = None,
  backup_retention_period: typing.Union[int, float] = None,
  cluster_identifier: str = None,
  cluster_identifier_prefix: str = None,
  copy_tags_to_snapshot: typing.Union[bool, IResolvable] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  enable_cloudwatch_logs_exports: typing.List[str] = None,
  engine: str = None,
  engine_version: str = None,
  final_snapshot_identifier: str = None,
  global_cluster_identifier: str = None,
  iam_database_authentication_enabled: typing.Union[bool, IResolvable] = None,
  iam_roles: typing.List[str] = None,
  id: str = None,
  kms_key_arn: str = None,
  neptune_cluster_parameter_group_name: str = None,
  neptune_instance_parameter_group_name: str = None,
  neptune_subnet_group_name: str = None,
  port: typing.Union[int, float] = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  replication_source_identifier: str = None,
  serverless_v2_scaling_configuration: NeptuneClusterServerlessV2ScalingConfiguration = None,
  skip_final_snapshot: typing.Union[bool, IResolvable] = None,
  snapshot_identifier: str = None,
  storage_encrypted: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: NeptuneClusterTimeouts = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.allowMajorVersionUpgrade">allow_major_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#allow_major_version_upgrade NeptuneCluster#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#availability_zones NeptuneCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifierPrefix">cluster_identifier_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.enableCloudwatchLogsExports">enable_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine NeptuneCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine_version NeptuneCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.globalClusterIdentifier">global_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#global_cluster_identifier NeptuneCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamDatabaseAuthenticationEnabled">iam_database_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_roles NeptuneCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#id NeptuneCluster#id}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneClusterParameterGroupName">neptune_cluster_parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneInstanceParameterGroupName">neptune_instance_parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_instance_parameter_group_name NeptuneCluster#neptune_instance_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneSubnetGroupName">neptune_subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#port NeptuneCluster#port}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.replicationSourceIdentifier">replication_source_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.serverlessV2ScalingConfiguration">serverless_v2_scaling_configuration</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | serverless_v2_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.storageEncrypted">storage_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags NeptuneCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags_all NeptuneCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_major_version_upgrade`<sup>Optional</sup> <a name="allow_major_version_upgrade" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.allowMajorVersionUpgrade"></a>

```python
allow_major_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#allow_major_version_upgrade NeptuneCluster#allow_major_version_upgrade}.

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.applyImmediately"></a>

```python
apply_immediately: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}.

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#availability_zones NeptuneCluster#availability_zones}.

---

##### `backup_retention_period`<sup>Optional</sup> <a name="backup_retention_period" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.backupRetentionPeriod"></a>

```python
backup_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}.

---

##### `cluster_identifier`<sup>Optional</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}.

---

##### `cluster_identifier_prefix`<sup>Optional</sup> <a name="cluster_identifier_prefix" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifierPrefix"></a>

```python
cluster_identifier_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}.

---

##### `copy_tags_to_snapshot`<sup>Optional</sup> <a name="copy_tags_to_snapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.copyTagsToSnapshot"></a>

```python
copy_tags_to_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}.

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}.

---

##### `enable_cloudwatch_logs_exports`<sup>Optional</sup> <a name="enable_cloudwatch_logs_exports" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.enableCloudwatchLogsExports"></a>

```python
enable_cloudwatch_logs_exports: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine NeptuneCluster#engine}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine_version NeptuneCluster#engine_version}.

---

##### `final_snapshot_identifier`<sup>Optional</sup> <a name="final_snapshot_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.finalSnapshotIdentifier"></a>

```python
final_snapshot_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}.

---

##### `global_cluster_identifier`<sup>Optional</sup> <a name="global_cluster_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.globalClusterIdentifier"></a>

```python
global_cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#global_cluster_identifier NeptuneCluster#global_cluster_identifier}.

---

##### `iam_database_authentication_enabled`<sup>Optional</sup> <a name="iam_database_authentication_enabled" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamDatabaseAuthenticationEnabled"></a>

```python
iam_database_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}.

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_roles NeptuneCluster#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#id NeptuneCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}.

---

##### `neptune_cluster_parameter_group_name`<sup>Optional</sup> <a name="neptune_cluster_parameter_group_name" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneClusterParameterGroupName"></a>

```python
neptune_cluster_parameter_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}.

---

##### `neptune_instance_parameter_group_name`<sup>Optional</sup> <a name="neptune_instance_parameter_group_name" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneInstanceParameterGroupName"></a>

```python
neptune_instance_parameter_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_instance_parameter_group_name NeptuneCluster#neptune_instance_parameter_group_name}.

---

##### `neptune_subnet_group_name`<sup>Optional</sup> <a name="neptune_subnet_group_name" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneSubnetGroupName"></a>

```python
neptune_subnet_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#port NeptuneCluster#port}.

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}.

---

##### `replication_source_identifier`<sup>Optional</sup> <a name="replication_source_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.replicationSourceIdentifier"></a>

```python
replication_source_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}.

---

##### `serverless_v2_scaling_configuration`<sup>Optional</sup> <a name="serverless_v2_scaling_configuration" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.serverlessV2ScalingConfiguration"></a>

```python
serverless_v2_scaling_configuration: NeptuneClusterServerlessV2ScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

serverless_v2_scaling_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#serverless_v2_scaling_configuration NeptuneCluster#serverless_v2_scaling_configuration}

---

##### `skip_final_snapshot`<sup>Optional</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.skipFinalSnapshot"></a>

```python
skip_final_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}.

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}.

---

##### `storage_encrypted`<sup>Optional</sup> <a name="storage_encrypted" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.storageEncrypted"></a>

```python
storage_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags NeptuneCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags_all NeptuneCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.timeouts"></a>

```python
timeouts: NeptuneClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#timeouts NeptuneCluster#timeouts}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}.

---

### NeptuneClusterServerlessV2ScalingConfiguration <a name="NeptuneClusterServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster

neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration(
  max_capacity: typing.Union[int, float] = None,
  min_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#max_capacity NeptuneCluster#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#min_capacity NeptuneCluster#min_capacity}. |

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#max_capacity NeptuneCluster#max_capacity}.

---

##### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#min_capacity NeptuneCluster#min_capacity}.

---

### NeptuneClusterTimeouts <a name="NeptuneClusterTimeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster

neptuneCluster.NeptuneClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#create NeptuneCluster#create}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#delete NeptuneCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#update NeptuneCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#create NeptuneCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#delete NeptuneCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#update NeptuneCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneClusterServerlessV2ScalingConfigurationOutputReference <a name="NeptuneClusterServerlessV2ScalingConfigurationOutputReference" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster

neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity">reset_min_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_min_capacity` <a name="reset_min_capacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity"></a>

```python
def reset_min_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput">min_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity_input`<sup>Optional</sup> <a name="min_capacity_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput"></a>

```python
min_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: NeptuneClusterServerlessV2ScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

---


### NeptuneClusterTimeoutsOutputReference <a name="NeptuneClusterTimeoutsOutputReference" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster

neptuneCluster.NeptuneClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NeptuneClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>, cdktf.IResolvable]

---



