# `elasticacheGlobalReplicationGroup` Submodule <a name="`elasticacheGlobalReplicationGroup` Submodule" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheGlobalReplicationGroup <a name="ElasticacheGlobalReplicationGroup" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group aws_elasticache_global_replication_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_replication_group_id_suffix: str,
  primary_replication_group_id: str,
  automatic_failover_enabled: typing.Union[bool, IResolvable] = None,
  cache_node_type: str = None,
  engine_version: str = None,
  global_replication_group_description: str = None,
  id: str = None,
  num_node_groups: typing.Union[int, float] = None,
  parameter_group_name: str = None,
  timeouts: ElasticacheGlobalReplicationGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.globalReplicationGroupIdSuffix">global_replication_group_id_suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.primaryReplicationGroupId">primary_replication_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.automaticFailoverEnabled">automatic_failover_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.cacheNodeType">cache_node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.globalReplicationGroupDescription">global_replication_group_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#id ElasticacheGlobalReplicationGroup#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.numNodeGroups">num_node_groups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#num_node_groups ElasticacheGlobalReplicationGroup#num_node_groups}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#parameter_group_name ElasticacheGlobalReplicationGroup#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_replication_group_id_suffix`<sup>Required</sup> <a name="global_replication_group_id_suffix" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.globalReplicationGroupIdSuffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}.

---

##### `primary_replication_group_id`<sup>Required</sup> <a name="primary_replication_group_id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.primaryReplicationGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}.

---

##### `automatic_failover_enabled`<sup>Optional</sup> <a name="automatic_failover_enabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.automaticFailoverEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}.

---

##### `cache_node_type`<sup>Optional</sup> <a name="cache_node_type" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.cacheNodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}.

---

##### `global_replication_group_description`<sup>Optional</sup> <a name="global_replication_group_description" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.globalReplicationGroupDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#id ElasticacheGlobalReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `num_node_groups`<sup>Optional</sup> <a name="num_node_groups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.numNodeGroups"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#num_node_groups ElasticacheGlobalReplicationGroup#num_node_groups}.

---

##### `parameter_group_name`<sup>Optional</sup> <a name="parameter_group_name" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.parameterGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#parameter_group_name ElasticacheGlobalReplicationGroup#parameter_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#timeouts ElasticacheGlobalReplicationGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled">reset_automatic_failover_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType">reset_cache_node_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription">reset_global_replication_group_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetNumNodeGroups">reset_num_node_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetParameterGroupName">reset_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#create ElasticacheGlobalReplicationGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#delete ElasticacheGlobalReplicationGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#update ElasticacheGlobalReplicationGroup#update}.

---

##### `reset_automatic_failover_enabled` <a name="reset_automatic_failover_enabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled"></a>

```python
def reset_automatic_failover_enabled() -> None
```

##### `reset_cache_node_type` <a name="reset_cache_node_type" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType"></a>

```python
def reset_cache_node_type() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_global_replication_group_description` <a name="reset_global_replication_group_description" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription"></a>

```python
def reset_global_replication_group_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_num_node_groups` <a name="reset_num_node_groups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetNumNodeGroups"></a>

```python
def reset_num_node_groups() -> None
```

##### `reset_parameter_group_name` <a name="reset_parameter_group_name" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetParameterGroupName"></a>

```python
def reset_parameter_group_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.atRestEncryptionEnabled">at_rest_encryption_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.authTokenEnabled">auth_token_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.clusterEnabled">cluster_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionActual">engine_version_actual</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroups">global_node_groups</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList">ElasticacheGlobalReplicationGroupGlobalNodeGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId">global_replication_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference">ElasticacheGlobalReplicationGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.transitEncryptionEnabled">transit_encryption_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput">automatic_failover_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput">cache_node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput">global_replication_group_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput">global_replication_group_id_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroupsInput">num_node_groups_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupNameInput">parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupIdInput">primary_replication_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled">automatic_failover_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType">cache_node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription">global_replication_group_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix">global_replication_group_id_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroups">num_node_groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupId">primary_replication_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `at_rest_encryption_enabled`<sup>Required</sup> <a name="at_rest_encryption_enabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.atRestEncryptionEnabled"></a>

```python
at_rest_encryption_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auth_token_enabled`<sup>Required</sup> <a name="auth_token_enabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.authTokenEnabled"></a>

```python
auth_token_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cluster_enabled`<sup>Required</sup> <a name="cluster_enabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.clusterEnabled"></a>

```python
cluster_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version_actual`<sup>Required</sup> <a name="engine_version_actual" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionActual"></a>

```python
engine_version_actual: str
```

- *Type:* str

---

##### `global_node_groups`<sup>Required</sup> <a name="global_node_groups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroups"></a>

```python
global_node_groups: ElasticacheGlobalReplicationGroupGlobalNodeGroupsList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList">ElasticacheGlobalReplicationGroupGlobalNodeGroupsList</a>

---

##### `global_replication_group_id`<sup>Required</sup> <a name="global_replication_group_id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId"></a>

```python
global_replication_group_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeouts"></a>

```python
timeouts: ElasticacheGlobalReplicationGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference">ElasticacheGlobalReplicationGroupTimeoutsOutputReference</a>

---

##### `transit_encryption_enabled`<sup>Required</sup> <a name="transit_encryption_enabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.transitEncryptionEnabled"></a>

```python
transit_encryption_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `automatic_failover_enabled_input`<sup>Optional</sup> <a name="automatic_failover_enabled_input" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput"></a>

```python
automatic_failover_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_node_type_input`<sup>Optional</sup> <a name="cache_node_type_input" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput"></a>

```python
cache_node_type_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `global_replication_group_description_input`<sup>Optional</sup> <a name="global_replication_group_description_input" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput"></a>

```python
global_replication_group_description_input: str
```

- *Type:* str

---

##### `global_replication_group_id_suffix_input`<sup>Optional</sup> <a name="global_replication_group_id_suffix_input" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput"></a>

```python
global_replication_group_id_suffix_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `num_node_groups_input`<sup>Optional</sup> <a name="num_node_groups_input" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroupsInput"></a>

```python
num_node_groups_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parameter_group_name_input`<sup>Optional</sup> <a name="parameter_group_name_input" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupNameInput"></a>

```python
parameter_group_name_input: str
```

- *Type:* str

---

##### `primary_replication_group_id_input`<sup>Optional</sup> <a name="primary_replication_group_id_input" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupIdInput"></a>

```python
primary_replication_group_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ElasticacheGlobalReplicationGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a>, cdktf.IResolvable]

---

##### `automatic_failover_enabled`<sup>Required</sup> <a name="automatic_failover_enabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled"></a>

```python
automatic_failover_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_node_type`<sup>Required</sup> <a name="cache_node_type" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType"></a>

```python
cache_node_type: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `global_replication_group_description`<sup>Required</sup> <a name="global_replication_group_description" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

```python
global_replication_group_description: str
```

- *Type:* str

---

##### `global_replication_group_id_suffix`<sup>Required</sup> <a name="global_replication_group_id_suffix" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix"></a>

```python
global_replication_group_id_suffix: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `num_node_groups`<sup>Required</sup> <a name="num_node_groups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroups"></a>

```python
num_node_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parameter_group_name`<sup>Required</sup> <a name="parameter_group_name" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

---

##### `primary_replication_group_id`<sup>Required</sup> <a name="primary_replication_group_id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupId"></a>

```python
primary_replication_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheGlobalReplicationGroupConfig <a name="ElasticacheGlobalReplicationGroupConfig" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_replication_group_id_suffix: str,
  primary_replication_group_id: str,
  automatic_failover_enabled: typing.Union[bool, IResolvable] = None,
  cache_node_type: str = None,
  engine_version: str = None,
  global_replication_group_description: str = None,
  id: str = None,
  num_node_groups: typing.Union[int, float] = None,
  parameter_group_name: str = None,
  timeouts: ElasticacheGlobalReplicationGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix">global_replication_group_id_suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.primaryReplicationGroupId">primary_replication_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled">automatic_failover_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType">cache_node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription">global_replication_group_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#id ElasticacheGlobalReplicationGroup#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.numNodeGroups">num_node_groups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#num_node_groups ElasticacheGlobalReplicationGroup#num_node_groups}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#parameter_group_name ElasticacheGlobalReplicationGroup#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_replication_group_id_suffix`<sup>Required</sup> <a name="global_replication_group_id_suffix" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix"></a>

```python
global_replication_group_id_suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}.

---

##### `primary_replication_group_id`<sup>Required</sup> <a name="primary_replication_group_id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.primaryReplicationGroupId"></a>

```python
primary_replication_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}.

---

##### `automatic_failover_enabled`<sup>Optional</sup> <a name="automatic_failover_enabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```python
automatic_failover_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}.

---

##### `cache_node_type`<sup>Optional</sup> <a name="cache_node_type" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType"></a>

```python
cache_node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}.

---

##### `global_replication_group_description`<sup>Optional</sup> <a name="global_replication_group_description" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription"></a>

```python
global_replication_group_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#id ElasticacheGlobalReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `num_node_groups`<sup>Optional</sup> <a name="num_node_groups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.numNodeGroups"></a>

```python
num_node_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#num_node_groups ElasticacheGlobalReplicationGroup#num_node_groups}.

---

##### `parameter_group_name`<sup>Optional</sup> <a name="parameter_group_name" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#parameter_group_name ElasticacheGlobalReplicationGroup#parameter_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.timeouts"></a>

```python
timeouts: ElasticacheGlobalReplicationGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#timeouts ElasticacheGlobalReplicationGroup#timeouts}

---

### ElasticacheGlobalReplicationGroupGlobalNodeGroups <a name="ElasticacheGlobalReplicationGroupGlobalNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups()
```


### ElasticacheGlobalReplicationGroupTimeouts <a name="ElasticacheGlobalReplicationGroupTimeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#create ElasticacheGlobalReplicationGroup#create}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#delete ElasticacheGlobalReplicationGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#update ElasticacheGlobalReplicationGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#create ElasticacheGlobalReplicationGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#delete ElasticacheGlobalReplicationGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#update ElasticacheGlobalReplicationGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheGlobalReplicationGroupGlobalNodeGroupsList <a name="ElasticacheGlobalReplicationGroupGlobalNodeGroupsList" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference <a name="ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.globalNodeGroupId">global_node_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.slots">slots</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups">ElasticacheGlobalReplicationGroupGlobalNodeGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `global_node_group_id`<sup>Required</sup> <a name="global_node_group_id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.globalNodeGroupId"></a>

```python
global_node_group_id: str
```

- *Type:* str

---

##### `slots`<sup>Required</sup> <a name="slots" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.slots"></a>

```python
slots: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticacheGlobalReplicationGroupGlobalNodeGroups
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups">ElasticacheGlobalReplicationGroupGlobalNodeGroups</a>

---


### ElasticacheGlobalReplicationGroupTimeoutsOutputReference <a name="ElasticacheGlobalReplicationGroupTimeoutsOutputReference" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_global_replication_group

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ElasticacheGlobalReplicationGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a>, cdktf.IResolvable]

---



