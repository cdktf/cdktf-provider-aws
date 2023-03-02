# `memorydbCluster` Submodule <a name="`memorydbCluster` Submodule" id="@cdktf/provider-aws.memorydbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorydbCluster <a name="MemorydbCluster" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster aws_memorydb_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acl_name: str,
  node_type: str,
  auto_minor_version_upgrade: typing.Union[bool, IResolvable] = None,
  data_tiering: typing.Union[bool, IResolvable] = None,
  description: str = None,
  engine_version: str = None,
  final_snapshot_name: str = None,
  id: str = None,
  kms_key_arn: str = None,
  maintenance_window: str = None,
  name: str = None,
  name_prefix: str = None,
  num_replicas_per_shard: typing.Union[int, float] = None,
  num_shards: typing.Union[int, float] = None,
  parameter_group_name: str = None,
  port: typing.Union[int, float] = None,
  security_group_ids: typing.List[str] = None,
  snapshot_arns: typing.List[str] = None,
  snapshot_name: str = None,
  snapshot_retention_limit: typing.Union[int, float] = None,
  snapshot_window: str = None,
  sns_topic_arn: str = None,
  subnet_group_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: MemorydbClusterTimeouts = None,
  tls_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.aclName">acl_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#acl_name MemorydbCluster#acl_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#node_type MemorydbCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.dataTiering">data_tiering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#description MemorydbCluster#description}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#engine_version MemorydbCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.finalSnapshotName">final_snapshot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#id MemorydbCluster#id}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#kms_key_arn MemorydbCluster#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name MemorydbCluster#name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name_prefix MemorydbCluster#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.numReplicasPerShard">num_replicas_per_shard</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.numShards">num_shards</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_shards MemorydbCluster#num_shards}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#port MemorydbCluster#port}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotArns">snapshot_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotName">snapshot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotWindow">snapshot_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.subnetGroupName">subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags MemorydbCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags_all MemorydbCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts">MemorydbClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.tlsEnabled">tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl_name`<sup>Required</sup> <a name="acl_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.aclName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#acl_name MemorydbCluster#acl_name}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.nodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#node_type MemorydbCluster#node_type}.

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}.

---

##### `data_tiering`<sup>Optional</sup> <a name="data_tiering" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.dataTiering"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#description MemorydbCluster#description}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#engine_version MemorydbCluster#engine_version}.

---

##### `final_snapshot_name`<sup>Optional</sup> <a name="final_snapshot_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.finalSnapshotName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#id MemorydbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#kms_key_arn MemorydbCluster#kms_key_arn}.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.maintenanceWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name MemorydbCluster#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name_prefix MemorydbCluster#name_prefix}.

---

##### `num_replicas_per_shard`<sup>Optional</sup> <a name="num_replicas_per_shard" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.numReplicasPerShard"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}.

---

##### `num_shards`<sup>Optional</sup> <a name="num_shards" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.numShards"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_shards MemorydbCluster#num_shards}.

---

##### `parameter_group_name`<sup>Optional</sup> <a name="parameter_group_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.parameterGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#port MemorydbCluster#port}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}.

---

##### `snapshot_arns`<sup>Optional</sup> <a name="snapshot_arns" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}.

---

##### `snapshot_name`<sup>Optional</sup> <a name="snapshot_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}.

---

##### `snapshot_retention_limit`<sup>Optional</sup> <a name="snapshot_retention_limit" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotRetentionLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}.

---

##### `snapshot_window`<sup>Optional</sup> <a name="snapshot_window" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}.

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.snsTopicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}.

---

##### `subnet_group_name`<sup>Optional</sup> <a name="subnet_group_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.subnetGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags MemorydbCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags_all MemorydbCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts">MemorydbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#timeouts MemorydbCluster#timeouts}

---

##### `tls_enabled`<sup>Optional</sup> <a name="tls_enabled" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.tlsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade">reset_auto_minor_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetDataTiering">reset_data_tiering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetFinalSnapshotName">reset_final_snapshot_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard">reset_num_replicas_per_shard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetNumShards">reset_num_shards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetParameterGroupName">reset_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotArns">reset_snapshot_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotName">reset_snapshot_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit">reset_snapshot_retention_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotWindow">reset_snapshot_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSubnetGroupName">reset_subnet_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTlsEnabled">reset_tls_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#create MemorydbCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#delete MemorydbCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#update MemorydbCluster#update}.

---

##### `reset_auto_minor_version_upgrade` <a name="reset_auto_minor_version_upgrade" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade"></a>

```python
def reset_auto_minor_version_upgrade() -> None
```

##### `reset_data_tiering` <a name="reset_data_tiering" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetDataTiering"></a>

```python
def reset_data_tiering() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_final_snapshot_name` <a name="reset_final_snapshot_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetFinalSnapshotName"></a>

```python
def reset_final_snapshot_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_num_replicas_per_shard` <a name="reset_num_replicas_per_shard" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard"></a>

```python
def reset_num_replicas_per_shard() -> None
```

##### `reset_num_shards` <a name="reset_num_shards" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetNumShards"></a>

```python
def reset_num_shards() -> None
```

##### `reset_parameter_group_name` <a name="reset_parameter_group_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetParameterGroupName"></a>

```python
def reset_parameter_group_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_snapshot_arns` <a name="reset_snapshot_arns" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotArns"></a>

```python
def reset_snapshot_arns() -> None
```

##### `reset_snapshot_name` <a name="reset_snapshot_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotName"></a>

```python
def reset_snapshot_name() -> None
```

##### `reset_snapshot_retention_limit` <a name="reset_snapshot_retention_limit" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit"></a>

```python
def reset_snapshot_retention_limit() -> None
```

##### `reset_snapshot_window` <a name="reset_snapshot_window" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotWindow"></a>

```python
def reset_snapshot_window() -> None
```

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```

##### `reset_subnet_group_name` <a name="reset_subnet_group_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSubnetGroupName"></a>

```python
def reset_subnet_group_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_enabled` <a name="reset_tls_enabled" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTlsEnabled"></a>

```python
def reset_tls_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.clusterEndpoint">cluster_endpoint</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList">MemorydbClusterClusterEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.enginePatchVersion">engine_patch_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.shards">shards</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList">MemorydbClusterShardsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference">MemorydbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.aclNameInput">acl_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput">auto_minor_version_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.dataTieringInput">data_tiering_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput">final_snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput">num_replicas_per_shard_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numShardsInput">num_shards_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput">parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotArnsInput">snapshot_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotNameInput">snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput">snapshot_retention_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotWindowInput">snapshot_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput">subnet_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts">MemorydbClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tlsEnabledInput">tls_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.aclName">acl_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.dataTiering">data_tiering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.finalSnapshotName">final_snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numReplicasPerShard">num_replicas_per_shard</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numShards">num_shards</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotArns">snapshot_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotWindow">snapshot_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.subnetGroupName">subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tlsEnabled">tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cluster_endpoint`<sup>Required</sup> <a name="cluster_endpoint" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.clusterEndpoint"></a>

```python
cluster_endpoint: MemorydbClusterClusterEndpointList
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList">MemorydbClusterClusterEndpointList</a>

---

##### `engine_patch_version`<sup>Required</sup> <a name="engine_patch_version" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.enginePatchVersion"></a>

```python
engine_patch_version: str
```

- *Type:* str

---

##### `shards`<sup>Required</sup> <a name="shards" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.shards"></a>

```python
shards: MemorydbClusterShardsList
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList">MemorydbClusterShardsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.timeouts"></a>

```python
timeouts: MemorydbClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference">MemorydbClusterTimeoutsOutputReference</a>

---

##### `acl_name_input`<sup>Optional</sup> <a name="acl_name_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.aclNameInput"></a>

```python
acl_name_input: str
```

- *Type:* str

---

##### `auto_minor_version_upgrade_input`<sup>Optional</sup> <a name="auto_minor_version_upgrade_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput"></a>

```python
auto_minor_version_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_tiering_input`<sup>Optional</sup> <a name="data_tiering_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.dataTieringInput"></a>

```python
data_tiering_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `final_snapshot_name_input`<sup>Optional</sup> <a name="final_snapshot_name_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput"></a>

```python
final_snapshot_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `num_replicas_per_shard_input`<sup>Optional</sup> <a name="num_replicas_per_shard_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput"></a>

```python
num_replicas_per_shard_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_shards_input`<sup>Optional</sup> <a name="num_shards_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numShardsInput"></a>

```python
num_shards_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parameter_group_name_input`<sup>Optional</sup> <a name="parameter_group_name_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput"></a>

```python
parameter_group_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_arns_input`<sup>Optional</sup> <a name="snapshot_arns_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotArnsInput"></a>

```python
snapshot_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_name_input`<sup>Optional</sup> <a name="snapshot_name_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotNameInput"></a>

```python
snapshot_name_input: str
```

- *Type:* str

---

##### `snapshot_retention_limit_input`<sup>Optional</sup> <a name="snapshot_retention_limit_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput"></a>

```python
snapshot_retention_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_window_input`<sup>Optional</sup> <a name="snapshot_window_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotWindowInput"></a>

```python
snapshot_window_input: str
```

- *Type:* str

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `subnet_group_name_input`<sup>Optional</sup> <a name="subnet_group_name_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput"></a>

```python
subnet_group_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[MemorydbClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts">MemorydbClusterTimeouts</a>, cdktf.IResolvable]

---

##### `tls_enabled_input`<sup>Optional</sup> <a name="tls_enabled_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tlsEnabledInput"></a>

```python
tls_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `acl_name`<sup>Required</sup> <a name="acl_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.aclName"></a>

```python
acl_name: str
```

- *Type:* str

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_tiering`<sup>Required</sup> <a name="data_tiering" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.dataTiering"></a>

```python
data_tiering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `final_snapshot_name`<sup>Required</sup> <a name="final_snapshot_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.finalSnapshotName"></a>

```python
final_snapshot_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.maintenanceWindow"></a>

```python
maintenance_window: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `num_replicas_per_shard`<sup>Required</sup> <a name="num_replicas_per_shard" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numReplicasPerShard"></a>

```python
num_replicas_per_shard: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_shards`<sup>Required</sup> <a name="num_shards" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numShards"></a>

```python
num_shards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parameter_group_name`<sup>Required</sup> <a name="parameter_group_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_arns`<sup>Required</sup> <a name="snapshot_arns" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotArns"></a>

```python
snapshot_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

##### `snapshot_retention_limit`<sup>Required</sup> <a name="snapshot_retention_limit" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit"></a>

```python
snapshot_retention_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_window`<sup>Required</sup> <a name="snapshot_window" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotWindow"></a>

```python
snapshot_window: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `subnet_group_name`<sup>Required</sup> <a name="subnet_group_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.subnetGroupName"></a>

```python
subnet_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tls_enabled`<sup>Required</sup> <a name="tls_enabled" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tlsEnabled"></a>

```python
tls_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MemorydbClusterClusterEndpoint <a name="MemorydbClusterClusterEndpoint" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterClusterEndpoint()
```


### MemorydbClusterConfig <a name="MemorydbClusterConfig" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acl_name: str,
  node_type: str,
  auto_minor_version_upgrade: typing.Union[bool, IResolvable] = None,
  data_tiering: typing.Union[bool, IResolvable] = None,
  description: str = None,
  engine_version: str = None,
  final_snapshot_name: str = None,
  id: str = None,
  kms_key_arn: str = None,
  maintenance_window: str = None,
  name: str = None,
  name_prefix: str = None,
  num_replicas_per_shard: typing.Union[int, float] = None,
  num_shards: typing.Union[int, float] = None,
  parameter_group_name: str = None,
  port: typing.Union[int, float] = None,
  security_group_ids: typing.List[str] = None,
  snapshot_arns: typing.List[str] = None,
  snapshot_name: str = None,
  snapshot_retention_limit: typing.Union[int, float] = None,
  snapshot_window: str = None,
  sns_topic_arn: str = None,
  subnet_group_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: MemorydbClusterTimeouts = None,
  tls_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.aclName">acl_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#acl_name MemorydbCluster#acl_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#node_type MemorydbCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.dataTiering">data_tiering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#description MemorydbCluster#description}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#engine_version MemorydbCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName">final_snapshot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#id MemorydbCluster#id}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#kms_key_arn MemorydbCluster#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name MemorydbCluster#name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name_prefix MemorydbCluster#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard">num_replicas_per_shard</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.numShards">num_shards</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_shards MemorydbCluster#num_shards}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#port MemorydbCluster#port}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotArns">snapshot_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotName">snapshot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow">snapshot_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName">subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags MemorydbCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags_all MemorydbCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts">MemorydbClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled">tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl_name`<sup>Required</sup> <a name="acl_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.aclName"></a>

```python
acl_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#acl_name MemorydbCluster#acl_name}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#node_type MemorydbCluster#node_type}.

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}.

---

##### `data_tiering`<sup>Optional</sup> <a name="data_tiering" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.dataTiering"></a>

```python
data_tiering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#description MemorydbCluster#description}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#engine_version MemorydbCluster#engine_version}.

---

##### `final_snapshot_name`<sup>Optional</sup> <a name="final_snapshot_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName"></a>

```python
final_snapshot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#id MemorydbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#kms_key_arn MemorydbCluster#kms_key_arn}.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow"></a>

```python
maintenance_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name MemorydbCluster#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name_prefix MemorydbCluster#name_prefix}.

---

##### `num_replicas_per_shard`<sup>Optional</sup> <a name="num_replicas_per_shard" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard"></a>

```python
num_replicas_per_shard: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}.

---

##### `num_shards`<sup>Optional</sup> <a name="num_shards" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.numShards"></a>

```python
num_shards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_shards MemorydbCluster#num_shards}.

---

##### `parameter_group_name`<sup>Optional</sup> <a name="parameter_group_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#port MemorydbCluster#port}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}.

---

##### `snapshot_arns`<sup>Optional</sup> <a name="snapshot_arns" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotArns"></a>

```python
snapshot_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}.

---

##### `snapshot_name`<sup>Optional</sup> <a name="snapshot_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}.

---

##### `snapshot_retention_limit`<sup>Optional</sup> <a name="snapshot_retention_limit" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit"></a>

```python
snapshot_retention_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}.

---

##### `snapshot_window`<sup>Optional</sup> <a name="snapshot_window" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow"></a>

```python
snapshot_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}.

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}.

---

##### `subnet_group_name`<sup>Optional</sup> <a name="subnet_group_name" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName"></a>

```python
subnet_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags MemorydbCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags_all MemorydbCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.timeouts"></a>

```python
timeouts: MemorydbClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts">MemorydbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#timeouts MemorydbCluster#timeouts}

---

##### `tls_enabled`<sup>Optional</sup> <a name="tls_enabled" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled"></a>

```python
tls_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}.

---

### MemorydbClusterShards <a name="MemorydbClusterShards" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShards"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShards.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterShards()
```


### MemorydbClusterShardsNodes <a name="MemorydbClusterShardsNodes" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterShardsNodes()
```


### MemorydbClusterShardsNodesEndpoint <a name="MemorydbClusterShardsNodesEndpoint" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterShardsNodesEndpoint()
```


### MemorydbClusterTimeouts <a name="MemorydbClusterTimeouts" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#create MemorydbCluster#create}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#delete MemorydbCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#update MemorydbCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#create MemorydbCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#delete MemorydbCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#update MemorydbCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MemorydbClusterClusterEndpointList <a name="MemorydbClusterClusterEndpointList" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterClusterEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MemorydbClusterClusterEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MemorydbClusterClusterEndpointOutputReference <a name="MemorydbClusterClusterEndpointOutputReference" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterClusterEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue"></a>

```python
internal_value: MemorydbClusterClusterEndpoint
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---


### MemorydbClusterShardsList <a name="MemorydbClusterShardsList" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterShardsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MemorydbClusterShardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MemorydbClusterShardsNodesEndpointList <a name="MemorydbClusterShardsNodesEndpointList" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterShardsNodesEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MemorydbClusterShardsNodesEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MemorydbClusterShardsNodesEndpointOutputReference <a name="MemorydbClusterShardsNodesEndpointOutputReference" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpoint">MemorydbClusterShardsNodesEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.internalValue"></a>

```python
internal_value: MemorydbClusterShardsNodesEndpoint
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpoint">MemorydbClusterShardsNodesEndpoint</a>

---


### MemorydbClusterShardsNodesList <a name="MemorydbClusterShardsNodesList" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterShardsNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MemorydbClusterShardsNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MemorydbClusterShardsNodesOutputReference <a name="MemorydbClusterShardsNodesOutputReference" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterShardsNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList">MemorydbClusterShardsNodesEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodes">MemorydbClusterShardsNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.endpoint"></a>

```python
endpoint: MemorydbClusterShardsNodesEndpointList
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList">MemorydbClusterShardsNodesEndpointList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.internalValue"></a>

```python
internal_value: MemorydbClusterShardsNodes
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodes">MemorydbClusterShardsNodes</a>

---


### MemorydbClusterShardsOutputReference <a name="MemorydbClusterShardsOutputReference" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterShardsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList">MemorydbClusterShardsNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.numNodes">num_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.slots">slots</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShards">MemorydbClusterShards</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.nodes"></a>

```python
nodes: MemorydbClusterShardsNodesList
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList">MemorydbClusterShardsNodesList</a>

---

##### `num_nodes`<sup>Required</sup> <a name="num_nodes" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.numNodes"></a>

```python
num_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `slots`<sup>Required</sup> <a name="slots" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.slots"></a>

```python
slots: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.internalValue"></a>

```python
internal_value: MemorydbClusterShards
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShards">MemorydbClusterShards</a>

---


### MemorydbClusterTimeoutsOutputReference <a name="MemorydbClusterTimeoutsOutputReference" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_cluster

memorydbCluster.MemorydbClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts">MemorydbClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MemorydbClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts">MemorydbClusterTimeouts</a>, cdktf.IResolvable]

---



