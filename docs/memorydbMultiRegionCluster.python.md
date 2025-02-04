# `memorydbMultiRegionCluster` Submodule <a name="`memorydbMultiRegionCluster` Submodule" id="@cdktf/provider-aws.memorydbMultiRegionCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorydbMultiRegionCluster <a name="MemorydbMultiRegionCluster" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster aws_memorydb_multi_region_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  multi_region_cluster_name_suffix: str,
  node_type: str,
  description: str = None,
  engine: str = None,
  engine_version: str = None,
  multi_region_parameter_group_name: str = None,
  num_shards: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MemorydbMultiRegionClusterTimeouts = None,
  tls_enabled: typing.Union[bool, IResolvable] = None,
  update_strategy: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.multiRegionClusterNameSuffix">multi_region_cluster_name_suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#multi_region_cluster_name_suffix MemorydbMultiRegionCluster#multi_region_cluster_name_suffix}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#node_type MemorydbMultiRegionCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#description MemorydbMultiRegionCluster#description}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#engine MemorydbMultiRegionCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#engine_version MemorydbMultiRegionCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.multiRegionParameterGroupName">multi_region_parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#multi_region_parameter_group_name MemorydbMultiRegionCluster#multi_region_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.numShards">num_shards</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#num_shards MemorydbMultiRegionCluster#num_shards}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#tags MemorydbMultiRegionCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.tlsEnabled">tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#tls_enabled MemorydbMultiRegionCluster#tls_enabled}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.updateStrategy">update_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#update_strategy MemorydbMultiRegionCluster#update_strategy}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `multi_region_cluster_name_suffix`<sup>Required</sup> <a name="multi_region_cluster_name_suffix" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.multiRegionClusterNameSuffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#multi_region_cluster_name_suffix MemorydbMultiRegionCluster#multi_region_cluster_name_suffix}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.nodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#node_type MemorydbMultiRegionCluster#node_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#description MemorydbMultiRegionCluster#description}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#engine MemorydbMultiRegionCluster#engine}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#engine_version MemorydbMultiRegionCluster#engine_version}.

---

##### `multi_region_parameter_group_name`<sup>Optional</sup> <a name="multi_region_parameter_group_name" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.multiRegionParameterGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#multi_region_parameter_group_name MemorydbMultiRegionCluster#multi_region_parameter_group_name}.

---

##### `num_shards`<sup>Optional</sup> <a name="num_shards" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.numShards"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#num_shards MemorydbMultiRegionCluster#num_shards}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#tags MemorydbMultiRegionCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#timeouts MemorydbMultiRegionCluster#timeouts}

---

##### `tls_enabled`<sup>Optional</sup> <a name="tls_enabled" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.tlsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#tls_enabled MemorydbMultiRegionCluster#tls_enabled}.

---

##### `update_strategy`<sup>Optional</sup> <a name="update_strategy" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.updateStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#update_strategy MemorydbMultiRegionCluster#update_strategy}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetMultiRegionParameterGroupName">reset_multi_region_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetNumShards">reset_num_shards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTlsEnabled">reset_tls_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetUpdateStrategy">reset_update_strategy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#create MemorydbMultiRegionCluster#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#delete MemorydbMultiRegionCluster#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#update MemorydbMultiRegionCluster#update}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_multi_region_parameter_group_name` <a name="reset_multi_region_parameter_group_name" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetMultiRegionParameterGroupName"></a>

```python
def reset_multi_region_parameter_group_name() -> None
```

##### `reset_num_shards` <a name="reset_num_shards" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetNumShards"></a>

```python
def reset_num_shards() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_enabled` <a name="reset_tls_enabled" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTlsEnabled"></a>

```python
def reset_tls_enabled() -> None
```

##### `reset_update_strategy` <a name="reset_update_strategy" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetUpdateStrategy"></a>

```python
def reset_update_strategy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MemorydbMultiRegionCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MemorydbMultiRegionCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MemorydbMultiRegionCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MemorydbMultiRegionCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MemorydbMultiRegionCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterName">multi_region_cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference">MemorydbMultiRegionClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffixInput">multi_region_cluster_name_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupNameInput">multi_region_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShardsInput">num_shards_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabledInput">tls_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategyInput">update_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffix">multi_region_cluster_name_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupName">multi_region_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShards">num_shards</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabled">tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategy">update_strategy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `multi_region_cluster_name`<sup>Required</sup> <a name="multi_region_cluster_name" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterName"></a>

```python
multi_region_cluster_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.timeouts"></a>

```python
timeouts: MemorydbMultiRegionClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference">MemorydbMultiRegionClusterTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `multi_region_cluster_name_suffix_input`<sup>Optional</sup> <a name="multi_region_cluster_name_suffix_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffixInput"></a>

```python
multi_region_cluster_name_suffix_input: str
```

- *Type:* str

---

##### `multi_region_parameter_group_name_input`<sup>Optional</sup> <a name="multi_region_parameter_group_name_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupNameInput"></a>

```python
multi_region_parameter_group_name_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `num_shards_input`<sup>Optional</sup> <a name="num_shards_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShardsInput"></a>

```python
num_shards_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MemorydbMultiRegionClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a>]

---

##### `tls_enabled_input`<sup>Optional</sup> <a name="tls_enabled_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabledInput"></a>

```python
tls_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `update_strategy_input`<sup>Optional</sup> <a name="update_strategy_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategyInput"></a>

```python
update_strategy_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `multi_region_cluster_name_suffix`<sup>Required</sup> <a name="multi_region_cluster_name_suffix" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffix"></a>

```python
multi_region_cluster_name_suffix: str
```

- *Type:* str

---

##### `multi_region_parameter_group_name`<sup>Required</sup> <a name="multi_region_parameter_group_name" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupName"></a>

```python
multi_region_parameter_group_name: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `num_shards`<sup>Required</sup> <a name="num_shards" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShards"></a>

```python
num_shards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tls_enabled`<sup>Required</sup> <a name="tls_enabled" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabled"></a>

```python
tls_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `update_strategy`<sup>Required</sup> <a name="update_strategy" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategy"></a>

```python
update_strategy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MemorydbMultiRegionClusterConfig <a name="MemorydbMultiRegionClusterConfig" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  multi_region_cluster_name_suffix: str,
  node_type: str,
  description: str = None,
  engine: str = None,
  engine_version: str = None,
  multi_region_parameter_group_name: str = None,
  num_shards: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MemorydbMultiRegionClusterTimeouts = None,
  tls_enabled: typing.Union[bool, IResolvable] = None,
  update_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionClusterNameSuffix">multi_region_cluster_name_suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#multi_region_cluster_name_suffix MemorydbMultiRegionCluster#multi_region_cluster_name_suffix}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#node_type MemorydbMultiRegionCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#description MemorydbMultiRegionCluster#description}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#engine MemorydbMultiRegionCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#engine_version MemorydbMultiRegionCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionParameterGroupName">multi_region_parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#multi_region_parameter_group_name MemorydbMultiRegionCluster#multi_region_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.numShards">num_shards</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#num_shards MemorydbMultiRegionCluster#num_shards}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#tags MemorydbMultiRegionCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tlsEnabled">tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#tls_enabled MemorydbMultiRegionCluster#tls_enabled}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.updateStrategy">update_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#update_strategy MemorydbMultiRegionCluster#update_strategy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `multi_region_cluster_name_suffix`<sup>Required</sup> <a name="multi_region_cluster_name_suffix" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionClusterNameSuffix"></a>

```python
multi_region_cluster_name_suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#multi_region_cluster_name_suffix MemorydbMultiRegionCluster#multi_region_cluster_name_suffix}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#node_type MemorydbMultiRegionCluster#node_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#description MemorydbMultiRegionCluster#description}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#engine MemorydbMultiRegionCluster#engine}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#engine_version MemorydbMultiRegionCluster#engine_version}.

---

##### `multi_region_parameter_group_name`<sup>Optional</sup> <a name="multi_region_parameter_group_name" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionParameterGroupName"></a>

```python
multi_region_parameter_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#multi_region_parameter_group_name MemorydbMultiRegionCluster#multi_region_parameter_group_name}.

---

##### `num_shards`<sup>Optional</sup> <a name="num_shards" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.numShards"></a>

```python
num_shards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#num_shards MemorydbMultiRegionCluster#num_shards}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#tags MemorydbMultiRegionCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.timeouts"></a>

```python
timeouts: MemorydbMultiRegionClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#timeouts MemorydbMultiRegionCluster#timeouts}

---

##### `tls_enabled`<sup>Optional</sup> <a name="tls_enabled" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tlsEnabled"></a>

```python
tls_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#tls_enabled MemorydbMultiRegionCluster#tls_enabled}.

---

##### `update_strategy`<sup>Optional</sup> <a name="update_strategy" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.updateStrategy"></a>

```python
update_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#update_strategy MemorydbMultiRegionCluster#update_strategy}.

---

### MemorydbMultiRegionClusterTimeouts <a name="MemorydbMultiRegionClusterTimeouts" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#create MemorydbMultiRegionCluster#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#delete MemorydbMultiRegionCluster#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/memorydb_multi_region_cluster#update MemorydbMultiRegionCluster#update}

---

## Classes <a name="Classes" id="Classes"></a>

### MemorydbMultiRegionClusterTimeoutsOutputReference <a name="MemorydbMultiRegionClusterTimeoutsOutputReference" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import memorydb_multi_region_cluster

memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MemorydbMultiRegionClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a>]

---



