# `odbNetworkPeeringConnection` Submodule <a name="`odbNetworkPeeringConnection` Submodule" id="@cdktf/provider-aws.odbNetworkPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbNetworkPeeringConnection <a name="OdbNetworkPeeringConnection" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection aws_odb_network_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_network_peering_connection

odbNetworkPeeringConnection.OdbNetworkPeeringConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  odb_network_id: str,
  peer_network_id: str,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OdbNetworkPeeringConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the odb network peering connection. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.odbNetworkId">odb_network_id</a></code> | <code>str</code> | Required field. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.peerNetworkId">peer_network_id</a></code> | <code>str</code> | Required field. The unique identifier of the ODB peering connection. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#tags OdbNetworkPeeringConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the odb network peering connection. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#display_name OdbNetworkPeeringConnection#display_name}

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.odbNetworkId"></a>

- *Type:* str

Required field.

The unique identifier of the ODB network that initiates the peering connection. A sample ID is odbpcx-abcdefgh12345678. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#odb_network_id OdbNetworkPeeringConnection#odb_network_id}

---

##### `peer_network_id`<sup>Required</sup> <a name="peer_network_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.peerNetworkId"></a>

- *Type:* str

Required field. The unique identifier of the ODB peering connection. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#peer_network_id OdbNetworkPeeringConnection#peer_network_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#region OdbNetworkPeeringConnection#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#tags OdbNetworkPeeringConnection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#timeouts OdbNetworkPeeringConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#create OdbNetworkPeeringConnection#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#delete OdbNetworkPeeringConnection#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#update OdbNetworkPeeringConnection#update}

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OdbNetworkPeeringConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import odb_network_peering_connection

odbNetworkPeeringConnection.OdbNetworkPeeringConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import odb_network_peering_connection

odbNetworkPeeringConnection.OdbNetworkPeeringConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import odb_network_peering_connection

odbNetworkPeeringConnection.OdbNetworkPeeringConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import odb_network_peering_connection

odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OdbNetworkPeeringConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OdbNetworkPeeringConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OdbNetworkPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OdbNetworkPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkArn">odb_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbPeeringConnectionType">odb_peering_connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkArn">peer_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.percentProgress">percent_progress</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference">OdbNetworkPeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkIdInput">odb_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkIdInput">peer_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkId">peer_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `odb_network_arn`<sup>Required</sup> <a name="odb_network_arn" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkArn"></a>

```python
odb_network_arn: str
```

- *Type:* str

---

##### `odb_peering_connection_type`<sup>Required</sup> <a name="odb_peering_connection_type" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbPeeringConnectionType"></a>

```python
odb_peering_connection_type: str
```

- *Type:* str

---

##### `peer_network_arn`<sup>Required</sup> <a name="peer_network_arn" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkArn"></a>

```python
peer_network_arn: str
```

- *Type:* str

---

##### `percent_progress`<sup>Required</sup> <a name="percent_progress" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.percentProgress"></a>

```python
percent_progress: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.timeouts"></a>

```python
timeouts: OdbNetworkPeeringConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference">OdbNetworkPeeringConnectionTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `odb_network_id_input`<sup>Optional</sup> <a name="odb_network_id_input" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkIdInput"></a>

```python
odb_network_id_input: str
```

- *Type:* str

---

##### `peer_network_id_input`<sup>Optional</sup> <a name="peer_network_id_input" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkIdInput"></a>

```python
peer_network_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OdbNetworkPeeringConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

---

##### `peer_network_id`<sup>Required</sup> <a name="peer_network_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkId"></a>

```python
peer_network_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OdbNetworkPeeringConnectionConfig <a name="OdbNetworkPeeringConnectionConfig" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_network_peering_connection

odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  odb_network_id: str,
  peer_network_id: str,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OdbNetworkPeeringConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the odb network peering connection. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | Required field. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.peerNetworkId">peer_network_id</a></code> | <code>str</code> | Required field. The unique identifier of the ODB peering connection. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#tags OdbNetworkPeeringConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the odb network peering connection. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#display_name OdbNetworkPeeringConnection#display_name}

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

Required field.

The unique identifier of the ODB network that initiates the peering connection. A sample ID is odbpcx-abcdefgh12345678. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#odb_network_id OdbNetworkPeeringConnection#odb_network_id}

---

##### `peer_network_id`<sup>Required</sup> <a name="peer_network_id" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.peerNetworkId"></a>

```python
peer_network_id: str
```

- *Type:* str

Required field. The unique identifier of the ODB peering connection. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#peer_network_id OdbNetworkPeeringConnection#peer_network_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#region OdbNetworkPeeringConnection#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#tags OdbNetworkPeeringConnection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.timeouts"></a>

```python
timeouts: OdbNetworkPeeringConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#timeouts OdbNetworkPeeringConnection#timeouts}

---

### OdbNetworkPeeringConnectionTimeouts <a name="OdbNetworkPeeringConnectionTimeouts" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_network_peering_connection

odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#create OdbNetworkPeeringConnection#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#delete OdbNetworkPeeringConnection#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network_peering_connection#update OdbNetworkPeeringConnection#update}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbNetworkPeeringConnectionTimeoutsOutputReference <a name="OdbNetworkPeeringConnectionTimeoutsOutputReference" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_network_peering_connection

odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OdbNetworkPeeringConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>]

---



