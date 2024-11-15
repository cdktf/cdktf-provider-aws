# `elasticacheReservedCacheNode` Submodule <a name="`elasticacheReservedCacheNode` Submodule" id="@cdktf/provider-aws.elasticacheReservedCacheNode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheReservedCacheNode <a name="ElasticacheReservedCacheNode" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node aws_elasticache_reserved_cache_node}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_reserved_cache_node

elasticacheReservedCacheNode.ElasticacheReservedCacheNode(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  reserved_cache_nodes_offering_id: str,
  cache_node_count: typing.Union[int, float] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ElasticacheReservedCacheNodeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.reservedCacheNodesOfferingId">reserved_cache_nodes_offering_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#reserved_cache_nodes_offering_id ElasticacheReservedCacheNode#reserved_cache_nodes_offering_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.cacheNodeCount">cache_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#cache_node_count ElasticacheReservedCacheNode#cache_node_count}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#id ElasticacheReservedCacheNode#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#tags ElasticacheReservedCacheNode#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `reserved_cache_nodes_offering_id`<sup>Required</sup> <a name="reserved_cache_nodes_offering_id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.reservedCacheNodesOfferingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#reserved_cache_nodes_offering_id ElasticacheReservedCacheNode#reserved_cache_nodes_offering_id}.

---

##### `cache_node_count`<sup>Optional</sup> <a name="cache_node_count" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.cacheNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#cache_node_count ElasticacheReservedCacheNode#cache_node_count}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#id ElasticacheReservedCacheNode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#tags ElasticacheReservedCacheNode#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#timeouts ElasticacheReservedCacheNode#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetCacheNodeCount">reset_cache_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#create ElasticacheReservedCacheNode#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#delete ElasticacheReservedCacheNode#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#update ElasticacheReservedCacheNode#update}

---

##### `reset_cache_node_count` <a name="reset_cache_node_count" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetCacheNodeCount"></a>

```python
def reset_cache_node_count() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ElasticacheReservedCacheNode resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_reserved_cache_node

elasticacheReservedCacheNode.ElasticacheReservedCacheNode.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_reserved_cache_node

elasticacheReservedCacheNode.ElasticacheReservedCacheNode.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_reserved_cache_node

elasticacheReservedCacheNode.ElasticacheReservedCacheNode.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_reserved_cache_node

elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ElasticacheReservedCacheNode resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElasticacheReservedCacheNode to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElasticacheReservedCacheNode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElasticacheReservedCacheNode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeType">cache_node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fixedPrice">fixed_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.offeringType">offering_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.productDescription">product_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.recurringCharges">recurring_charges</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList">ElasticacheReservedCacheNodeRecurringChargesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference">ElasticacheReservedCacheNodeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.usagePrice">usage_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCountInput">cache_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingIdInput">reserved_cache_nodes_offering_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCount">cache_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingId">reserved_cache_nodes_offering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cache_node_type`<sup>Required</sup> <a name="cache_node_type" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeType"></a>

```python
cache_node_type: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `fixed_price`<sup>Required</sup> <a name="fixed_price" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fixedPrice"></a>

```python
fixed_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offering_type`<sup>Required</sup> <a name="offering_type" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.offeringType"></a>

```python
offering_type: str
```

- *Type:* str

---

##### `product_description`<sup>Required</sup> <a name="product_description" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.productDescription"></a>

```python
product_description: str
```

- *Type:* str

---

##### `recurring_charges`<sup>Required</sup> <a name="recurring_charges" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.recurringCharges"></a>

```python
recurring_charges: ElasticacheReservedCacheNodeRecurringChargesList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList">ElasticacheReservedCacheNodeRecurringChargesList</a>

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeouts"></a>

```python
timeouts: ElasticacheReservedCacheNodeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference">ElasticacheReservedCacheNodeTimeoutsOutputReference</a>

---

##### `usage_price`<sup>Required</sup> <a name="usage_price" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.usagePrice"></a>

```python
usage_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_node_count_input`<sup>Optional</sup> <a name="cache_node_count_input" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCountInput"></a>

```python
cache_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `reserved_cache_nodes_offering_id_input`<sup>Optional</sup> <a name="reserved_cache_nodes_offering_id_input" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingIdInput"></a>

```python
reserved_cache_nodes_offering_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ElasticacheReservedCacheNodeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>]

---

##### `cache_node_count`<sup>Required</sup> <a name="cache_node_count" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCount"></a>

```python
cache_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `reserved_cache_nodes_offering_id`<sup>Required</sup> <a name="reserved_cache_nodes_offering_id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingId"></a>

```python
reserved_cache_nodes_offering_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheReservedCacheNodeConfig <a name="ElasticacheReservedCacheNodeConfig" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_reserved_cache_node

elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  reserved_cache_nodes_offering_id: str,
  cache_node_count: typing.Union[int, float] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ElasticacheReservedCacheNodeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.reservedCacheNodesOfferingId">reserved_cache_nodes_offering_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#reserved_cache_nodes_offering_id ElasticacheReservedCacheNode#reserved_cache_nodes_offering_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.cacheNodeCount">cache_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#cache_node_count ElasticacheReservedCacheNode#cache_node_count}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#id ElasticacheReservedCacheNode#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#tags ElasticacheReservedCacheNode#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `reserved_cache_nodes_offering_id`<sup>Required</sup> <a name="reserved_cache_nodes_offering_id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.reservedCacheNodesOfferingId"></a>

```python
reserved_cache_nodes_offering_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#reserved_cache_nodes_offering_id ElasticacheReservedCacheNode#reserved_cache_nodes_offering_id}.

---

##### `cache_node_count`<sup>Optional</sup> <a name="cache_node_count" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.cacheNodeCount"></a>

```python
cache_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#cache_node_count ElasticacheReservedCacheNode#cache_node_count}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#id ElasticacheReservedCacheNode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#tags ElasticacheReservedCacheNode#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.timeouts"></a>

```python
timeouts: ElasticacheReservedCacheNodeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#timeouts ElasticacheReservedCacheNode#timeouts}

---

### ElasticacheReservedCacheNodeRecurringCharges <a name="ElasticacheReservedCacheNodeRecurringCharges" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_reserved_cache_node

elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges()
```


### ElasticacheReservedCacheNodeTimeouts <a name="ElasticacheReservedCacheNodeTimeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_reserved_cache_node

elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#create ElasticacheReservedCacheNode#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#delete ElasticacheReservedCacheNode#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/elasticache_reserved_cache_node#update ElasticacheReservedCacheNode#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheReservedCacheNodeRecurringChargesList <a name="ElasticacheReservedCacheNodeRecurringChargesList" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_reserved_cache_node

elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheReservedCacheNodeRecurringChargesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ElasticacheReservedCacheNodeRecurringChargesOutputReference <a name="ElasticacheReservedCacheNodeRecurringChargesOutputReference" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_reserved_cache_node

elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeAmount">recurring_charge_amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeFrequency">recurring_charge_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges">ElasticacheReservedCacheNodeRecurringCharges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recurring_charge_amount`<sup>Required</sup> <a name="recurring_charge_amount" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeAmount"></a>

```python
recurring_charge_amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recurring_charge_frequency`<sup>Required</sup> <a name="recurring_charge_frequency" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeFrequency"></a>

```python
recurring_charge_frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.internalValue"></a>

```python
internal_value: ElasticacheReservedCacheNodeRecurringCharges
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges">ElasticacheReservedCacheNodeRecurringCharges</a>

---


### ElasticacheReservedCacheNodeTimeoutsOutputReference <a name="ElasticacheReservedCacheNodeTimeoutsOutputReference" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticache_reserved_cache_node

elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElasticacheReservedCacheNodeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>]

---



