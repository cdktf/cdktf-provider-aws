# `ecsClusterCapacityProviders` Submodule <a name="`ecsClusterCapacityProviders` Submodule" id="@cdktf/provider-aws.ecsClusterCapacityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsClusterCapacityProviders <a name="EcsClusterCapacityProviders" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers aws_ecs_cluster_capacity_providers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster_capacity_providers

ecsClusterCapacityProviders.EcsClusterCapacityProviders(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  capacity_providers: typing.List[str] = None,
  default_capacity_provider_strategy: typing.Union[IResolvable, typing.List[EcsClusterCapacityProvidersDefaultCapacityProviderStrategy]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#cluster_name EcsClusterCapacityProviders#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.capacityProviders">capacity_providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#capacity_providers EcsClusterCapacityProviders#capacity_providers}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.defaultCapacityProviderStrategy">default_capacity_provider_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>]]</code> | default_capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#id EcsClusterCapacityProviders#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#cluster_name EcsClusterCapacityProviders#cluster_name}.

---

##### `capacity_providers`<sup>Optional</sup> <a name="capacity_providers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.capacityProviders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#capacity_providers EcsClusterCapacityProviders#capacity_providers}.

---

##### `default_capacity_provider_strategy`<sup>Optional</sup> <a name="default_capacity_provider_strategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.defaultCapacityProviderStrategy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>]]

default_capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#default_capacity_provider_strategy EcsClusterCapacityProviders#default_capacity_provider_strategy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#id EcsClusterCapacityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.putDefaultCapacityProviderStrategy">put_default_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetCapacityProviders">reset_capacity_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetDefaultCapacityProviderStrategy">reset_default_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_capacity_provider_strategy` <a name="put_default_capacity_provider_strategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.putDefaultCapacityProviderStrategy"></a>

```python
def put_default_capacity_provider_strategy(
  value: typing.Union[IResolvable, typing.List[EcsClusterCapacityProvidersDefaultCapacityProviderStrategy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.putDefaultCapacityProviderStrategy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>]]

---

##### `reset_capacity_providers` <a name="reset_capacity_providers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetCapacityProviders"></a>

```python
def reset_capacity_providers() -> None
```

##### `reset_default_capacity_provider_strategy` <a name="reset_default_capacity_provider_strategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetDefaultCapacityProviderStrategy"></a>

```python
def reset_default_capacity_provider_strategy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EcsClusterCapacityProviders resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster_capacity_providers

ecsClusterCapacityProviders.EcsClusterCapacityProviders.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster_capacity_providers

ecsClusterCapacityProviders.EcsClusterCapacityProviders.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster_capacity_providers

ecsClusterCapacityProviders.EcsClusterCapacityProviders.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster_capacity_providers

ecsClusterCapacityProviders.EcsClusterCapacityProviders.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EcsClusterCapacityProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EcsClusterCapacityProviders to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EcsClusterCapacityProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EcsClusterCapacityProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategy">default_capacity_provider_strategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList">EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProvidersInput">capacity_providers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategyInput">default_capacity_provider_strategy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProviders">capacity_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_capacity_provider_strategy`<sup>Required</sup> <a name="default_capacity_provider_strategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategy"></a>

```python
default_capacity_provider_strategy: EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList">EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList</a>

---

##### `capacity_providers_input`<sup>Optional</sup> <a name="capacity_providers_input" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProvidersInput"></a>

```python
capacity_providers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `default_capacity_provider_strategy_input`<sup>Optional</sup> <a name="default_capacity_provider_strategy_input" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategyInput"></a>

```python
default_capacity_provider_strategy_input: typing.Union[IResolvable, typing.List[EcsClusterCapacityProvidersDefaultCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `capacity_providers`<sup>Required</sup> <a name="capacity_providers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProviders"></a>

```python
capacity_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcsClusterCapacityProvidersConfig <a name="EcsClusterCapacityProvidersConfig" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster_capacity_providers

ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  capacity_providers: typing.List[str] = None,
  default_capacity_provider_strategy: typing.Union[IResolvable, typing.List[EcsClusterCapacityProvidersDefaultCapacityProviderStrategy]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#cluster_name EcsClusterCapacityProviders#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.capacityProviders">capacity_providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#capacity_providers EcsClusterCapacityProviders#capacity_providers}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.defaultCapacityProviderStrategy">default_capacity_provider_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>]]</code> | default_capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#id EcsClusterCapacityProviders#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#cluster_name EcsClusterCapacityProviders#cluster_name}.

---

##### `capacity_providers`<sup>Optional</sup> <a name="capacity_providers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.capacityProviders"></a>

```python
capacity_providers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#capacity_providers EcsClusterCapacityProviders#capacity_providers}.

---

##### `default_capacity_provider_strategy`<sup>Optional</sup> <a name="default_capacity_provider_strategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.defaultCapacityProviderStrategy"></a>

```python
default_capacity_provider_strategy: typing.Union[IResolvable, typing.List[EcsClusterCapacityProvidersDefaultCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>]]

default_capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#default_capacity_provider_strategy EcsClusterCapacityProviders#default_capacity_provider_strategy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#id EcsClusterCapacityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EcsClusterCapacityProvidersDefaultCapacityProviderStrategy <a name="EcsClusterCapacityProvidersDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster_capacity_providers

ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy(
  capacity_provider: str,
  base: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#capacity_provider EcsClusterCapacityProviders#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.base">base</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#base EcsClusterCapacityProviders#base}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#weight EcsClusterCapacityProviders#weight}. |

---

##### `capacity_provider`<sup>Required</sup> <a name="capacity_provider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#capacity_provider EcsClusterCapacityProviders#capacity_provider}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#base EcsClusterCapacityProviders#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecs_cluster_capacity_providers#weight EcsClusterCapacityProviders#weight}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList <a name="EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster_capacity_providers

ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcsClusterCapacityProvidersDefaultCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>]]

---


### EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference <a name="EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_cluster_capacity_providers

ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetBase">reset_base</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base` <a name="reset_base" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetBase"></a>

```python
def reset_base() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.baseInput">base_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacity_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_input`<sup>Optional</sup> <a name="base_input" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.baseInput"></a>

```python
base_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider_input`<sup>Optional</sup> <a name="capacity_provider_input" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```python
capacity_provider_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider`<sup>Required</sup> <a name="capacity_provider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EcsClusterCapacityProvidersDefaultCapacityProviderStrategy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy">EcsClusterCapacityProvidersDefaultCapacityProviderStrategy</a>]

---



