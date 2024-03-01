# `elasticacheServerlessCache` Submodule <a name="`elasticacheServerlessCache` Submodule" id="@cdktf/provider-aws.elasticacheServerlessCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheServerlessCache <a name="ElasticacheServerlessCache" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache aws_elasticache_serverless_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCache(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str,
  name: str,
  cache_usage_limits: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimits]] = None,
  daily_snapshot_time: str = None,
  description: str = None,
  kms_key_id: str = None,
  major_engine_version: str = None,
  security_group_ids: typing.List[str] = None,
  snapshot_arns_to_restore: typing.List[str] = None,
  snapshot_retention_limit: typing.Union[int, float] = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ElasticacheServerlessCacheTimeouts = None,
  user_group_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.cacheUsageLimits">cache_usage_limits</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>]]</code> | cache_usage_limits block. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.dailySnapshotTime">daily_snapshot_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.majorEngineVersion">major_engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.snapshotArnsToRestore">snapshot_arns_to_restore</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.userGroupId">user_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}.

---

##### `cache_usage_limits`<sup>Optional</sup> <a name="cache_usage_limits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.cacheUsageLimits"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>]]

cache_usage_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#cache_usage_limits ElasticacheServerlessCache#cache_usage_limits}

---

##### `daily_snapshot_time`<sup>Optional</sup> <a name="daily_snapshot_time" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.dailySnapshotTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}.

---

##### `major_engine_version`<sup>Optional</sup> <a name="major_engine_version" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.majorEngineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}.

---

##### `snapshot_arns_to_restore`<sup>Optional</sup> <a name="snapshot_arns_to_restore" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.snapshotArnsToRestore"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}.

---

##### `snapshot_retention_limit`<sup>Optional</sup> <a name="snapshot_retention_limit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.snapshotRetentionLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#timeouts ElasticacheServerlessCache#timeouts}

---

##### `user_group_id`<sup>Optional</sup> <a name="user_group_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.userGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits">put_cache_usage_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetCacheUsageLimits">reset_cache_usage_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDailySnapshotTime">reset_daily_snapshot_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetMajorEngineVersion">reset_major_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotArnsToRestore">reset_snapshot_arns_to_restore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotRetentionLimit">reset_snapshot_retention_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetUserGroupId">reset_user_group_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cache_usage_limits` <a name="put_cache_usage_limits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits"></a>

```python
def put_cache_usage_limits(
  value: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimits]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#create ElasticacheServerlessCache#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#delete ElasticacheServerlessCache#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#update ElasticacheServerlessCache#update}

---

##### `reset_cache_usage_limits` <a name="reset_cache_usage_limits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetCacheUsageLimits"></a>

```python
def reset_cache_usage_limits() -> None
```

##### `reset_daily_snapshot_time` <a name="reset_daily_snapshot_time" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDailySnapshotTime"></a>

```python
def reset_daily_snapshot_time() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_major_engine_version` <a name="reset_major_engine_version" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetMajorEngineVersion"></a>

```python
def reset_major_engine_version() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_snapshot_arns_to_restore` <a name="reset_snapshot_arns_to_restore" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotArnsToRestore"></a>

```python
def reset_snapshot_arns_to_restore() -> None
```

##### `reset_snapshot_retention_limit` <a name="reset_snapshot_retention_limit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotRetentionLimit"></a>

```python
def reset_snapshot_retention_limit() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_group_id` <a name="reset_user_group_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetUserGroupId"></a>

```python
def reset_user_group_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ElasticacheServerlessCache resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCache.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCache.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCache.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCache.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ElasticacheServerlessCache resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElasticacheServerlessCache to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElasticacheServerlessCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElasticacheServerlessCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimits">cache_usage_limits</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList">ElasticacheServerlessCacheCacheUsageLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList">ElasticacheServerlessCacheEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fullEngineVersion">full_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.readerEndpoint">reader_endpoint</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList">ElasticacheServerlessCacheReaderEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference">ElasticacheServerlessCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimitsInput">cache_usage_limits_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTimeInput">daily_snapshot_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersionInput">major_engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestoreInput">snapshot_arns_to_restore_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimitInput">snapshot_retention_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupIdInput">user_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTime">daily_snapshot_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersion">major_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestore">snapshot_arns_to_restore</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupId">user_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cache_usage_limits`<sup>Required</sup> <a name="cache_usage_limits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimits"></a>

```python
cache_usage_limits: ElasticacheServerlessCacheCacheUsageLimitsList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList">ElasticacheServerlessCacheCacheUsageLimitsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.endpoint"></a>

```python
endpoint: ElasticacheServerlessCacheEndpointList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList">ElasticacheServerlessCacheEndpointList</a>

---

##### `full_engine_version`<sup>Required</sup> <a name="full_engine_version" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fullEngineVersion"></a>

```python
full_engine_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `reader_endpoint`<sup>Required</sup> <a name="reader_endpoint" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.readerEndpoint"></a>

```python
reader_endpoint: ElasticacheServerlessCacheReaderEndpointList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList">ElasticacheServerlessCacheReaderEndpointList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeouts"></a>

```python
timeouts: ElasticacheServerlessCacheTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference">ElasticacheServerlessCacheTimeoutsOutputReference</a>

---

##### `cache_usage_limits_input`<sup>Optional</sup> <a name="cache_usage_limits_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimitsInput"></a>

```python
cache_usage_limits_input: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>]]

---

##### `daily_snapshot_time_input`<sup>Optional</sup> <a name="daily_snapshot_time_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTimeInput"></a>

```python
daily_snapshot_time_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `major_engine_version_input`<sup>Optional</sup> <a name="major_engine_version_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersionInput"></a>

```python
major_engine_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_arns_to_restore_input`<sup>Optional</sup> <a name="snapshot_arns_to_restore_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestoreInput"></a>

```python
snapshot_arns_to_restore_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_retention_limit_input`<sup>Optional</sup> <a name="snapshot_retention_limit_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimitInput"></a>

```python
snapshot_retention_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ElasticacheServerlessCacheTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>]

---

##### `user_group_id_input`<sup>Optional</sup> <a name="user_group_id_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupIdInput"></a>

```python
user_group_id_input: str
```

- *Type:* str

---

##### `daily_snapshot_time`<sup>Required</sup> <a name="daily_snapshot_time" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTime"></a>

```python
daily_snapshot_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `major_engine_version`<sup>Required</sup> <a name="major_engine_version" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersion"></a>

```python
major_engine_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_arns_to_restore`<sup>Required</sup> <a name="snapshot_arns_to_restore" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestore"></a>

```python
snapshot_arns_to_restore: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_retention_limit`<sup>Required</sup> <a name="snapshot_retention_limit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimit"></a>

```python
snapshot_retention_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_group_id`<sup>Required</sup> <a name="user_group_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupId"></a>

```python
user_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheServerlessCacheCacheUsageLimits <a name="ElasticacheServerlessCacheCacheUsageLimits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits(
  data_storage: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimitsDataStorage]] = None,
  ecpu_per_second: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.dataStorage">data_storage</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>]]</code> | data_storage block. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.ecpuPerSecond">ecpu_per_second</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>]]</code> | ecpu_per_second block. |

---

##### `data_storage`<sup>Optional</sup> <a name="data_storage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.dataStorage"></a>

```python
data_storage: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimitsDataStorage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>]]

data_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#data_storage ElasticacheServerlessCache#data_storage}

---

##### `ecpu_per_second`<sup>Optional</sup> <a name="ecpu_per_second" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.ecpuPerSecond"></a>

```python
ecpu_per_second: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>]]

ecpu_per_second block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#ecpu_per_second ElasticacheServerlessCache#ecpu_per_second}

---

### ElasticacheServerlessCacheCacheUsageLimitsDataStorage <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage(
  maximum: typing.Union[int, float],
  unit: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#unit ElasticacheServerlessCache#unit}. |

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#unit ElasticacheServerlessCache#unit}.

---

### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond(
  maximum: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}. |

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}.

---

### ElasticacheServerlessCacheConfig <a name="ElasticacheServerlessCacheConfig" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str,
  name: str,
  cache_usage_limits: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimits]] = None,
  daily_snapshot_time: str = None,
  description: str = None,
  kms_key_id: str = None,
  major_engine_version: str = None,
  security_group_ids: typing.List[str] = None,
  snapshot_arns_to_restore: typing.List[str] = None,
  snapshot_retention_limit: typing.Union[int, float] = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ElasticacheServerlessCacheTimeouts = None,
  user_group_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.cacheUsageLimits">cache_usage_limits</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>]]</code> | cache_usage_limits block. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dailySnapshotTime">daily_snapshot_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.majorEngineVersion">major_engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotArnsToRestore">snapshot_arns_to_restore</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.userGroupId">user_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}.

---

##### `cache_usage_limits`<sup>Optional</sup> <a name="cache_usage_limits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.cacheUsageLimits"></a>

```python
cache_usage_limits: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>]]

cache_usage_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#cache_usage_limits ElasticacheServerlessCache#cache_usage_limits}

---

##### `daily_snapshot_time`<sup>Optional</sup> <a name="daily_snapshot_time" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dailySnapshotTime"></a>

```python
daily_snapshot_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}.

---

##### `major_engine_version`<sup>Optional</sup> <a name="major_engine_version" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.majorEngineVersion"></a>

```python
major_engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}.

---

##### `snapshot_arns_to_restore`<sup>Optional</sup> <a name="snapshot_arns_to_restore" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotArnsToRestore"></a>

```python
snapshot_arns_to_restore: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}.

---

##### `snapshot_retention_limit`<sup>Optional</sup> <a name="snapshot_retention_limit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotRetentionLimit"></a>

```python
snapshot_retention_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.timeouts"></a>

```python
timeouts: ElasticacheServerlessCacheTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#timeouts ElasticacheServerlessCache#timeouts}

---

##### `user_group_id`<sup>Optional</sup> <a name="user_group_id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.userGroupId"></a>

```python
user_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}.

---

### ElasticacheServerlessCacheEndpoint <a name="ElasticacheServerlessCacheEndpoint" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint()
```


### ElasticacheServerlessCacheReaderEndpoint <a name="ElasticacheServerlessCacheReaderEndpoint" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint()
```


### ElasticacheServerlessCacheTimeouts <a name="ElasticacheServerlessCacheTimeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#create ElasticacheServerlessCache#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#delete ElasticacheServerlessCache#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/elasticache_serverless_cache#update ElasticacheServerlessCache#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheServerlessCacheCacheUsageLimitsDataStorageList <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorageList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimitsDataStorage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>]]

---


### ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximumInput">maximum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximumInput"></a>

```python
maximum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElasticacheServerlessCacheCacheUsageLimitsDataStorage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>]

---


### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>]]

---


### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximumInput">maximum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximumInput"></a>

```python
maximum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>]

---


### ElasticacheServerlessCacheCacheUsageLimitsList <a name="ElasticacheServerlessCacheCacheUsageLimitsList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheServerlessCacheCacheUsageLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>]]

---


### ElasticacheServerlessCacheCacheUsageLimitsOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage">put_data_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond">put_ecpu_per_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetDataStorage">reset_data_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetEcpuPerSecond">reset_ecpu_per_second</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_storage` <a name="put_data_storage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage"></a>

```python
def put_data_storage(
  value: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimitsDataStorage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>]]

---

##### `put_ecpu_per_second` <a name="put_ecpu_per_second" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond"></a>

```python
def put_ecpu_per_second(
  value: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>]]

---

##### `reset_data_storage` <a name="reset_data_storage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetDataStorage"></a>

```python
def reset_data_storage() -> None
```

##### `reset_ecpu_per_second` <a name="reset_ecpu_per_second" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetEcpuPerSecond"></a>

```python
def reset_ecpu_per_second() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorage">data_storage</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList">ElasticacheServerlessCacheCacheUsageLimitsDataStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecond">ecpu_per_second</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorageInput">data_storage_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecondInput">ecpu_per_second_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_storage`<sup>Required</sup> <a name="data_storage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorage"></a>

```python
data_storage: ElasticacheServerlessCacheCacheUsageLimitsDataStorageList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList">ElasticacheServerlessCacheCacheUsageLimitsDataStorageList</a>

---

##### `ecpu_per_second`<sup>Required</sup> <a name="ecpu_per_second" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecond"></a>

```python
ecpu_per_second: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList</a>

---

##### `data_storage_input`<sup>Optional</sup> <a name="data_storage_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorageInput"></a>

```python
data_storage_input: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimitsDataStorage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>]]

---

##### `ecpu_per_second_input`<sup>Optional</sup> <a name="ecpu_per_second_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecondInput"></a>

```python
ecpu_per_second_input: typing.Union[IResolvable, typing.List[ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElasticacheServerlessCacheCacheUsageLimits]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>]

---


### ElasticacheServerlessCacheEndpointList <a name="ElasticacheServerlessCacheEndpointList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheServerlessCacheEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ElasticacheServerlessCacheEndpointOutputReference <a name="ElasticacheServerlessCacheEndpointOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.internalValue"></a>

```python
internal_value: ElasticacheServerlessCacheEndpoint
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a>

---


### ElasticacheServerlessCacheReaderEndpointList <a name="ElasticacheServerlessCacheReaderEndpointList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheServerlessCacheReaderEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ElasticacheServerlessCacheReaderEndpointOutputReference <a name="ElasticacheServerlessCacheReaderEndpointOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.internalValue"></a>

```python
internal_value: ElasticacheServerlessCacheReaderEndpoint
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a>

---


### ElasticacheServerlessCacheTimeoutsOutputReference <a name="ElasticacheServerlessCacheTimeoutsOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_serverless_cache

elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElasticacheServerlessCacheTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>]

---



