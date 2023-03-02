# `rdsClusterInstance` Submodule <a name="`rdsClusterInstance` Submodule" id="@cdktf/provider-aws.rdsClusterInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsClusterInstance <a name="RdsClusterInstance" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance aws_rds_cluster_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_instance

rdsClusterInstance.RdsClusterInstance(
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
  instance_class: str,
  apply_immediately: typing.Union[bool, IResolvable] = None,
  auto_minor_version_upgrade: typing.Union[bool, IResolvable] = None,
  availability_zone: str = None,
  ca_cert_identifier: str = None,
  copy_tags_to_snapshot: typing.Union[bool, IResolvable] = None,
  db_parameter_group_name: str = None,
  db_subnet_group_name: str = None,
  engine: str = None,
  engine_version: str = None,
  id: str = None,
  identifier: str = None,
  identifier_prefix: str = None,
  monitoring_interval: typing.Union[int, float] = None,
  monitoring_role_arn: str = None,
  performance_insights_enabled: typing.Union[bool, IResolvable] = None,
  performance_insights_kms_key_id: str = None,
  performance_insights_retention_period: typing.Union[int, float] = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  promotion_tier: typing.Union[int, float] = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: RdsClusterInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#cluster_identifier RdsClusterInstance#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.instanceClass">instance_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#instance_class RdsClusterInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#apply_immediately RdsClusterInstance#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#auto_minor_version_upgrade RdsClusterInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#availability_zone RdsClusterInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.caCertIdentifier">ca_cert_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#ca_cert_identifier RdsClusterInstance#ca_cert_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#copy_tags_to_snapshot RdsClusterInstance#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.dbParameterGroupName">db_parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#db_parameter_group_name RdsClusterInstance#db_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#db_subnet_group_name RdsClusterInstance#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#engine RdsClusterInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#engine_version RdsClusterInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#id RdsClusterInstance#id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#identifier RdsClusterInstance#identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.identifierPrefix">identifier_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#identifier_prefix RdsClusterInstance#identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.monitoringInterval">monitoring_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#monitoring_interval RdsClusterInstance#monitoring_interval}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.monitoringRoleArn">monitoring_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#monitoring_role_arn RdsClusterInstance#monitoring_role_arn}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.performanceInsightsEnabled">performance_insights_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_enabled RdsClusterInstance#performance_insights_enabled}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.performanceInsightsKmsKeyId">performance_insights_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_kms_key_id RdsClusterInstance#performance_insights_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.performanceInsightsRetentionPeriod">performance_insights_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_retention_period RdsClusterInstance#performance_insights_retention_period}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#preferred_backup_window RdsClusterInstance#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#preferred_maintenance_window RdsClusterInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.promotionTier">promotion_tier</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#promotion_tier RdsClusterInstance#promotion_tier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#publicly_accessible RdsClusterInstance#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#tags RdsClusterInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#tags_all RdsClusterInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts">RdsClusterInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.clusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#cluster_identifier RdsClusterInstance#cluster_identifier}.

---

##### `instance_class`<sup>Required</sup> <a name="instance_class" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.instanceClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#instance_class RdsClusterInstance#instance_class}.

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.applyImmediately"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#apply_immediately RdsClusterInstance#apply_immediately}.

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#auto_minor_version_upgrade RdsClusterInstance#auto_minor_version_upgrade}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#availability_zone RdsClusterInstance#availability_zone}.

---

##### `ca_cert_identifier`<sup>Optional</sup> <a name="ca_cert_identifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.caCertIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#ca_cert_identifier RdsClusterInstance#ca_cert_identifier}.

---

##### `copy_tags_to_snapshot`<sup>Optional</sup> <a name="copy_tags_to_snapshot" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.copyTagsToSnapshot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#copy_tags_to_snapshot RdsClusterInstance#copy_tags_to_snapshot}.

---

##### `db_parameter_group_name`<sup>Optional</sup> <a name="db_parameter_group_name" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.dbParameterGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#db_parameter_group_name RdsClusterInstance#db_parameter_group_name}.

---

##### `db_subnet_group_name`<sup>Optional</sup> <a name="db_subnet_group_name" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.dbSubnetGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#db_subnet_group_name RdsClusterInstance#db_subnet_group_name}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#engine RdsClusterInstance#engine}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#engine_version RdsClusterInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#id RdsClusterInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#identifier RdsClusterInstance#identifier}.

---

##### `identifier_prefix`<sup>Optional</sup> <a name="identifier_prefix" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.identifierPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#identifier_prefix RdsClusterInstance#identifier_prefix}.

---

##### `monitoring_interval`<sup>Optional</sup> <a name="monitoring_interval" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.monitoringInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#monitoring_interval RdsClusterInstance#monitoring_interval}.

---

##### `monitoring_role_arn`<sup>Optional</sup> <a name="monitoring_role_arn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.monitoringRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#monitoring_role_arn RdsClusterInstance#monitoring_role_arn}.

---

##### `performance_insights_enabled`<sup>Optional</sup> <a name="performance_insights_enabled" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.performanceInsightsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_enabled RdsClusterInstance#performance_insights_enabled}.

---

##### `performance_insights_kms_key_id`<sup>Optional</sup> <a name="performance_insights_kms_key_id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.performanceInsightsKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_kms_key_id RdsClusterInstance#performance_insights_kms_key_id}.

---

##### `performance_insights_retention_period`<sup>Optional</sup> <a name="performance_insights_retention_period" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.performanceInsightsRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_retention_period RdsClusterInstance#performance_insights_retention_period}.

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#preferred_backup_window RdsClusterInstance#preferred_backup_window}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#preferred_maintenance_window RdsClusterInstance#preferred_maintenance_window}.

---

##### `promotion_tier`<sup>Optional</sup> <a name="promotion_tier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.promotionTier"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#promotion_tier RdsClusterInstance#promotion_tier}.

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.publiclyAccessible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#publicly_accessible RdsClusterInstance#publicly_accessible}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#tags RdsClusterInstance#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#tags_all RdsClusterInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts">RdsClusterInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#timeouts RdsClusterInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetApplyImmediately">reset_apply_immediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetAutoMinorVersionUpgrade">reset_auto_minor_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetCaCertIdentifier">reset_ca_cert_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetCopyTagsToSnapshot">reset_copy_tags_to_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetDbParameterGroupName">reset_db_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetDbSubnetGroupName">reset_db_subnet_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetIdentifier">reset_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetIdentifierPrefix">reset_identifier_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetMonitoringInterval">reset_monitoring_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetMonitoringRoleArn">reset_monitoring_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPerformanceInsightsEnabled">reset_performance_insights_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPerformanceInsightsKmsKeyId">reset_performance_insights_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPerformanceInsightsRetentionPeriod">reset_performance_insights_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPreferredBackupWindow">reset_preferred_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPromotionTier">reset_promotion_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#create RdsClusterInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#delete RdsClusterInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#update RdsClusterInstance#update}.

---

##### `reset_apply_immediately` <a name="reset_apply_immediately" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetApplyImmediately"></a>

```python
def reset_apply_immediately() -> None
```

##### `reset_auto_minor_version_upgrade` <a name="reset_auto_minor_version_upgrade" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetAutoMinorVersionUpgrade"></a>

```python
def reset_auto_minor_version_upgrade() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_ca_cert_identifier` <a name="reset_ca_cert_identifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetCaCertIdentifier"></a>

```python
def reset_ca_cert_identifier() -> None
```

##### `reset_copy_tags_to_snapshot` <a name="reset_copy_tags_to_snapshot" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetCopyTagsToSnapshot"></a>

```python
def reset_copy_tags_to_snapshot() -> None
```

##### `reset_db_parameter_group_name` <a name="reset_db_parameter_group_name" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetDbParameterGroupName"></a>

```python
def reset_db_parameter_group_name() -> None
```

##### `reset_db_subnet_group_name` <a name="reset_db_subnet_group_name" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetDbSubnetGroupName"></a>

```python
def reset_db_subnet_group_name() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetIdentifier"></a>

```python
def reset_identifier() -> None
```

##### `reset_identifier_prefix` <a name="reset_identifier_prefix" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetIdentifierPrefix"></a>

```python
def reset_identifier_prefix() -> None
```

##### `reset_monitoring_interval` <a name="reset_monitoring_interval" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetMonitoringInterval"></a>

```python
def reset_monitoring_interval() -> None
```

##### `reset_monitoring_role_arn` <a name="reset_monitoring_role_arn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetMonitoringRoleArn"></a>

```python
def reset_monitoring_role_arn() -> None
```

##### `reset_performance_insights_enabled` <a name="reset_performance_insights_enabled" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPerformanceInsightsEnabled"></a>

```python
def reset_performance_insights_enabled() -> None
```

##### `reset_performance_insights_kms_key_id` <a name="reset_performance_insights_kms_key_id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPerformanceInsightsKmsKeyId"></a>

```python
def reset_performance_insights_kms_key_id() -> None
```

##### `reset_performance_insights_retention_period` <a name="reset_performance_insights_retention_period" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPerformanceInsightsRetentionPeriod"></a>

```python
def reset_performance_insights_retention_period() -> None
```

##### `reset_preferred_backup_window` <a name="reset_preferred_backup_window" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPreferredBackupWindow"></a>

```python
def reset_preferred_backup_window() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_promotion_tier` <a name="reset_promotion_tier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPromotionTier"></a>

```python
def reset_promotion_tier() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_instance

rdsClusterInstance.RdsClusterInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_instance

rdsClusterInstance.RdsClusterInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_instance

rdsClusterInstance.RdsClusterInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbiResourceId">dbi_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineVersionActual">engine_version_actual</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.storageEncrypted">storage_encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference">RdsClusterInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.writer">writer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.applyImmediatelyInput">apply_immediately_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.autoMinorVersionUpgradeInput">auto_minor_version_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.caCertIdentifierInput">ca_cert_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.copyTagsToSnapshotInput">copy_tags_to_snapshot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbParameterGroupNameInput">db_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbSubnetGroupNameInput">db_subnet_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifierPrefixInput">identifier_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.instanceClassInput">instance_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringIntervalInput">monitoring_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringRoleArnInput">monitoring_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsEnabledInput">performance_insights_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsKmsKeyIdInput">performance_insights_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsRetentionPeriodInput">performance_insights_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredBackupWindowInput">preferred_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.promotionTierInput">promotion_tier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts">RdsClusterInstanceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.caCertIdentifier">ca_cert_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbParameterGroupName">db_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifierPrefix">identifier_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.instanceClass">instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringInterval">monitoring_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringRoleArn">monitoring_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsEnabled">performance_insights_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsKmsKeyId">performance_insights_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsRetentionPeriod">performance_insights_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.promotionTier">promotion_tier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `dbi_resource_id`<sup>Required</sup> <a name="dbi_resource_id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbiResourceId"></a>

```python
dbi_resource_id: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `engine_version_actual`<sup>Required</sup> <a name="engine_version_actual" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineVersionActual"></a>

```python
engine_version_actual: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_encrypted`<sup>Required</sup> <a name="storage_encrypted" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.storageEncrypted"></a>

```python
storage_encrypted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.timeouts"></a>

```python
timeouts: RdsClusterInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference">RdsClusterInstanceTimeoutsOutputReference</a>

---

##### `writer`<sup>Required</sup> <a name="writer" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.writer"></a>

```python
writer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `apply_immediately_input`<sup>Optional</sup> <a name="apply_immediately_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.applyImmediatelyInput"></a>

```python
apply_immediately_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_minor_version_upgrade_input`<sup>Optional</sup> <a name="auto_minor_version_upgrade_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.autoMinorVersionUpgradeInput"></a>

```python
auto_minor_version_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `ca_cert_identifier_input`<sup>Optional</sup> <a name="ca_cert_identifier_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.caCertIdentifierInput"></a>

```python
ca_cert_identifier_input: str
```

- *Type:* str

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `copy_tags_to_snapshot_input`<sup>Optional</sup> <a name="copy_tags_to_snapshot_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.copyTagsToSnapshotInput"></a>

```python
copy_tags_to_snapshot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `db_parameter_group_name_input`<sup>Optional</sup> <a name="db_parameter_group_name_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbParameterGroupNameInput"></a>

```python
db_parameter_group_name_input: str
```

- *Type:* str

---

##### `db_subnet_group_name_input`<sup>Optional</sup> <a name="db_subnet_group_name_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbSubnetGroupNameInput"></a>

```python
db_subnet_group_name_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `identifier_prefix_input`<sup>Optional</sup> <a name="identifier_prefix_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifierPrefixInput"></a>

```python
identifier_prefix_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_class_input`<sup>Optional</sup> <a name="instance_class_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.instanceClassInput"></a>

```python
instance_class_input: str
```

- *Type:* str

---

##### `monitoring_interval_input`<sup>Optional</sup> <a name="monitoring_interval_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringIntervalInput"></a>

```python
monitoring_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_role_arn_input`<sup>Optional</sup> <a name="monitoring_role_arn_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringRoleArnInput"></a>

```python
monitoring_role_arn_input: str
```

- *Type:* str

---

##### `performance_insights_enabled_input`<sup>Optional</sup> <a name="performance_insights_enabled_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsEnabledInput"></a>

```python
performance_insights_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `performance_insights_kms_key_id_input`<sup>Optional</sup> <a name="performance_insights_kms_key_id_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsKmsKeyIdInput"></a>

```python
performance_insights_kms_key_id_input: str
```

- *Type:* str

---

##### `performance_insights_retention_period_input`<sup>Optional</sup> <a name="performance_insights_retention_period_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsRetentionPeriodInput"></a>

```python
performance_insights_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_backup_window_input`<sup>Optional</sup> <a name="preferred_backup_window_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredBackupWindowInput"></a>

```python
preferred_backup_window_input: str
```

- *Type:* str

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `promotion_tier_input`<sup>Optional</sup> <a name="promotion_tier_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.promotionTierInput"></a>

```python
promotion_tier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[RdsClusterInstanceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts">RdsClusterInstanceTimeouts</a>, cdktf.IResolvable]

---

##### `apply_immediately`<sup>Required</sup> <a name="apply_immediately" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.applyImmediately"></a>

```python
apply_immediately: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `ca_cert_identifier`<sup>Required</sup> <a name="ca_cert_identifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.caCertIdentifier"></a>

```python
ca_cert_identifier: str
```

- *Type:* str

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `copy_tags_to_snapshot`<sup>Required</sup> <a name="copy_tags_to_snapshot" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.copyTagsToSnapshot"></a>

```python
copy_tags_to_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `db_parameter_group_name`<sup>Required</sup> <a name="db_parameter_group_name" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbParameterGroupName"></a>

```python
db_parameter_group_name: str
```

- *Type:* str

---

##### `db_subnet_group_name`<sup>Required</sup> <a name="db_subnet_group_name" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbSubnetGroupName"></a>

```python
db_subnet_group_name: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `identifier_prefix`<sup>Required</sup> <a name="identifier_prefix" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifierPrefix"></a>

```python
identifier_prefix: str
```

- *Type:* str

---

##### `instance_class`<sup>Required</sup> <a name="instance_class" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

---

##### `monitoring_interval`<sup>Required</sup> <a name="monitoring_interval" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringInterval"></a>

```python
monitoring_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_role_arn`<sup>Required</sup> <a name="monitoring_role_arn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringRoleArn"></a>

```python
monitoring_role_arn: str
```

- *Type:* str

---

##### `performance_insights_enabled`<sup>Required</sup> <a name="performance_insights_enabled" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsEnabled"></a>

```python
performance_insights_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `performance_insights_kms_key_id`<sup>Required</sup> <a name="performance_insights_kms_key_id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsKmsKeyId"></a>

```python
performance_insights_kms_key_id: str
```

- *Type:* str

---

##### `performance_insights_retention_period`<sup>Required</sup> <a name="performance_insights_retention_period" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsRetentionPeriod"></a>

```python
performance_insights_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_backup_window`<sup>Required</sup> <a name="preferred_backup_window" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `promotion_tier`<sup>Required</sup> <a name="promotion_tier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.promotionTier"></a>

```python
promotion_tier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsClusterInstanceConfig <a name="RdsClusterInstanceConfig" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_instance

rdsClusterInstance.RdsClusterInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_identifier: str,
  instance_class: str,
  apply_immediately: typing.Union[bool, IResolvable] = None,
  auto_minor_version_upgrade: typing.Union[bool, IResolvable] = None,
  availability_zone: str = None,
  ca_cert_identifier: str = None,
  copy_tags_to_snapshot: typing.Union[bool, IResolvable] = None,
  db_parameter_group_name: str = None,
  db_subnet_group_name: str = None,
  engine: str = None,
  engine_version: str = None,
  id: str = None,
  identifier: str = None,
  identifier_prefix: str = None,
  monitoring_interval: typing.Union[int, float] = None,
  monitoring_role_arn: str = None,
  performance_insights_enabled: typing.Union[bool, IResolvable] = None,
  performance_insights_kms_key_id: str = None,
  performance_insights_retention_period: typing.Union[int, float] = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  promotion_tier: typing.Union[int, float] = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: RdsClusterInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#cluster_identifier RdsClusterInstance#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.instanceClass">instance_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#instance_class RdsClusterInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#apply_immediately RdsClusterInstance#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#auto_minor_version_upgrade RdsClusterInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#availability_zone RdsClusterInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.caCertIdentifier">ca_cert_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#ca_cert_identifier RdsClusterInstance#ca_cert_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#copy_tags_to_snapshot RdsClusterInstance#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.dbParameterGroupName">db_parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#db_parameter_group_name RdsClusterInstance#db_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#db_subnet_group_name RdsClusterInstance#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#engine RdsClusterInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#engine_version RdsClusterInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#id RdsClusterInstance#id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#identifier RdsClusterInstance#identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.identifierPrefix">identifier_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#identifier_prefix RdsClusterInstance#identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.monitoringInterval">monitoring_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#monitoring_interval RdsClusterInstance#monitoring_interval}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.monitoringRoleArn">monitoring_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#monitoring_role_arn RdsClusterInstance#monitoring_role_arn}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.performanceInsightsEnabled">performance_insights_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_enabled RdsClusterInstance#performance_insights_enabled}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.performanceInsightsKmsKeyId">performance_insights_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_kms_key_id RdsClusterInstance#performance_insights_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.performanceInsightsRetentionPeriod">performance_insights_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_retention_period RdsClusterInstance#performance_insights_retention_period}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#preferred_backup_window RdsClusterInstance#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#preferred_maintenance_window RdsClusterInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.promotionTier">promotion_tier</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#promotion_tier RdsClusterInstance#promotion_tier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#publicly_accessible RdsClusterInstance#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#tags RdsClusterInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#tags_all RdsClusterInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts">RdsClusterInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#cluster_identifier RdsClusterInstance#cluster_identifier}.

---

##### `instance_class`<sup>Required</sup> <a name="instance_class" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#instance_class RdsClusterInstance#instance_class}.

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.applyImmediately"></a>

```python
apply_immediately: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#apply_immediately RdsClusterInstance#apply_immediately}.

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#auto_minor_version_upgrade RdsClusterInstance#auto_minor_version_upgrade}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#availability_zone RdsClusterInstance#availability_zone}.

---

##### `ca_cert_identifier`<sup>Optional</sup> <a name="ca_cert_identifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.caCertIdentifier"></a>

```python
ca_cert_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#ca_cert_identifier RdsClusterInstance#ca_cert_identifier}.

---

##### `copy_tags_to_snapshot`<sup>Optional</sup> <a name="copy_tags_to_snapshot" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.copyTagsToSnapshot"></a>

```python
copy_tags_to_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#copy_tags_to_snapshot RdsClusterInstance#copy_tags_to_snapshot}.

---

##### `db_parameter_group_name`<sup>Optional</sup> <a name="db_parameter_group_name" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.dbParameterGroupName"></a>

```python
db_parameter_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#db_parameter_group_name RdsClusterInstance#db_parameter_group_name}.

---

##### `db_subnet_group_name`<sup>Optional</sup> <a name="db_subnet_group_name" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.dbSubnetGroupName"></a>

```python
db_subnet_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#db_subnet_group_name RdsClusterInstance#db_subnet_group_name}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#engine RdsClusterInstance#engine}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#engine_version RdsClusterInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#id RdsClusterInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#identifier RdsClusterInstance#identifier}.

---

##### `identifier_prefix`<sup>Optional</sup> <a name="identifier_prefix" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.identifierPrefix"></a>

```python
identifier_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#identifier_prefix RdsClusterInstance#identifier_prefix}.

---

##### `monitoring_interval`<sup>Optional</sup> <a name="monitoring_interval" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.monitoringInterval"></a>

```python
monitoring_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#monitoring_interval RdsClusterInstance#monitoring_interval}.

---

##### `monitoring_role_arn`<sup>Optional</sup> <a name="monitoring_role_arn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.monitoringRoleArn"></a>

```python
monitoring_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#monitoring_role_arn RdsClusterInstance#monitoring_role_arn}.

---

##### `performance_insights_enabled`<sup>Optional</sup> <a name="performance_insights_enabled" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.performanceInsightsEnabled"></a>

```python
performance_insights_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_enabled RdsClusterInstance#performance_insights_enabled}.

---

##### `performance_insights_kms_key_id`<sup>Optional</sup> <a name="performance_insights_kms_key_id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.performanceInsightsKmsKeyId"></a>

```python
performance_insights_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_kms_key_id RdsClusterInstance#performance_insights_kms_key_id}.

---

##### `performance_insights_retention_period`<sup>Optional</sup> <a name="performance_insights_retention_period" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.performanceInsightsRetentionPeriod"></a>

```python
performance_insights_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_retention_period RdsClusterInstance#performance_insights_retention_period}.

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#preferred_backup_window RdsClusterInstance#preferred_backup_window}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#preferred_maintenance_window RdsClusterInstance#preferred_maintenance_window}.

---

##### `promotion_tier`<sup>Optional</sup> <a name="promotion_tier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.promotionTier"></a>

```python
promotion_tier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#promotion_tier RdsClusterInstance#promotion_tier}.

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#publicly_accessible RdsClusterInstance#publicly_accessible}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#tags RdsClusterInstance#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#tags_all RdsClusterInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.timeouts"></a>

```python
timeouts: RdsClusterInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts">RdsClusterInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#timeouts RdsClusterInstance#timeouts}

---

### RdsClusterInstanceTimeouts <a name="RdsClusterInstanceTimeouts" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_instance

rdsClusterInstance.RdsClusterInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#create RdsClusterInstance#create}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#delete RdsClusterInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#update RdsClusterInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#create RdsClusterInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#delete RdsClusterInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#update RdsClusterInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsClusterInstanceTimeoutsOutputReference <a name="RdsClusterInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_instance

rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts">RdsClusterInstanceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RdsClusterInstanceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts">RdsClusterInstanceTimeouts</a>, cdktf.IResolvable]

---



