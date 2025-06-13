# `vpcRouteServerPeer` Submodule <a name="`vpcRouteServerPeer` Submodule" id="@cdktf/provider-aws.vpcRouteServerPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcRouteServerPeer <a name="VpcRouteServerPeer" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer aws_vpc_route_server_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_route_server_peer

vpcRouteServerPeer.VpcRouteServerPeer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  peer_address: str,
  route_server_endpoint_id: str,
  bgp_options: typing.Union[IResolvable, typing.List[VpcRouteServerPeerBgpOptions]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: VpcRouteServerPeerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.peerAddress">peer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_address VpcRouteServerPeer#peer_address}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.routeServerEndpointId">route_server_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#route_server_endpoint_id VpcRouteServerPeer#route_server_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.bgpOptions">bgp_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>]]</code> | bgp_options block. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#tags VpcRouteServerPeer#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.peerAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_address VpcRouteServerPeer#peer_address}.

---

##### `route_server_endpoint_id`<sup>Required</sup> <a name="route_server_endpoint_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.routeServerEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#route_server_endpoint_id VpcRouteServerPeer#route_server_endpoint_id}.

---

##### `bgp_options`<sup>Optional</sup> <a name="bgp_options" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.bgpOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>]]

bgp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#bgp_options VpcRouteServerPeer#bgp_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#tags VpcRouteServerPeer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#timeouts VpcRouteServerPeer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.putBgpOptions">put_bgp_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetBgpOptions">reset_bgp_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bgp_options` <a name="put_bgp_options" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.putBgpOptions"></a>

```python
def put_bgp_options(
  value: typing.Union[IResolvable, typing.List[VpcRouteServerPeerBgpOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.putBgpOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#create VpcRouteServerPeer#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#delete VpcRouteServerPeer#delete}

---

##### `reset_bgp_options` <a name="reset_bgp_options" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetBgpOptions"></a>

```python
def reset_bgp_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpcRouteServerPeer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_route_server_peer

vpcRouteServerPeer.VpcRouteServerPeer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_route_server_peer

vpcRouteServerPeer.VpcRouteServerPeer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_route_server_peer

vpcRouteServerPeer.VpcRouteServerPeer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import vpc_route_server_peer

vpcRouteServerPeer.VpcRouteServerPeer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpcRouteServerPeer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpcRouteServerPeer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpcRouteServerPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcRouteServerPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.bgpOptions">bgp_options</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList">VpcRouteServerPeerBgpOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.endpointEniAddress">endpoint_eni_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.endpointEniId">endpoint_eni_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerId">route_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerPeerId">route_server_peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference">VpcRouteServerPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.bgpOptionsInput">bgp_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.peerAddressInput">peer_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerEndpointIdInput">route_server_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.peerAddress">peer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerEndpointId">route_server_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bgp_options`<sup>Required</sup> <a name="bgp_options" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.bgpOptions"></a>

```python
bgp_options: VpcRouteServerPeerBgpOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList">VpcRouteServerPeerBgpOptionsList</a>

---

##### `endpoint_eni_address`<sup>Required</sup> <a name="endpoint_eni_address" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.endpointEniAddress"></a>

```python
endpoint_eni_address: str
```

- *Type:* str

---

##### `endpoint_eni_id`<sup>Required</sup> <a name="endpoint_eni_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.endpointEniId"></a>

```python
endpoint_eni_id: str
```

- *Type:* str

---

##### `route_server_id`<sup>Required</sup> <a name="route_server_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerId"></a>

```python
route_server_id: str
```

- *Type:* str

---

##### `route_server_peer_id`<sup>Required</sup> <a name="route_server_peer_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerPeerId"></a>

```python
route_server_peer_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.timeouts"></a>

```python
timeouts: VpcRouteServerPeerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference">VpcRouteServerPeerTimeoutsOutputReference</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `bgp_options_input`<sup>Optional</sup> <a name="bgp_options_input" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.bgpOptionsInput"></a>

```python
bgp_options_input: typing.Union[IResolvable, typing.List[VpcRouteServerPeerBgpOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>]]

---

##### `peer_address_input`<sup>Optional</sup> <a name="peer_address_input" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.peerAddressInput"></a>

```python
peer_address_input: str
```

- *Type:* str

---

##### `route_server_endpoint_id_input`<sup>Optional</sup> <a name="route_server_endpoint_id_input" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerEndpointIdInput"></a>

```python
route_server_endpoint_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VpcRouteServerPeerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a>]

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.peerAddress"></a>

```python
peer_address: str
```

- *Type:* str

---

##### `route_server_endpoint_id`<sup>Required</sup> <a name="route_server_endpoint_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.routeServerEndpointId"></a>

```python
route_server_endpoint_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcRouteServerPeerBgpOptions <a name="VpcRouteServerPeerBgpOptions" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_route_server_peer

vpcRouteServerPeer.VpcRouteServerPeerBgpOptions(
  peer_asn: typing.Union[int, float],
  peer_liveness_detection: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions.property.peerAsn">peer_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_asn VpcRouteServerPeer#peer_asn}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions.property.peerLivenessDetection">peer_liveness_detection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_liveness_detection VpcRouteServerPeer#peer_liveness_detection}. |

---

##### `peer_asn`<sup>Required</sup> <a name="peer_asn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions.property.peerAsn"></a>

```python
peer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_asn VpcRouteServerPeer#peer_asn}.

---

##### `peer_liveness_detection`<sup>Optional</sup> <a name="peer_liveness_detection" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions.property.peerLivenessDetection"></a>

```python
peer_liveness_detection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_liveness_detection VpcRouteServerPeer#peer_liveness_detection}.

---

### VpcRouteServerPeerConfig <a name="VpcRouteServerPeerConfig" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_route_server_peer

vpcRouteServerPeer.VpcRouteServerPeerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  peer_address: str,
  route_server_endpoint_id: str,
  bgp_options: typing.Union[IResolvable, typing.List[VpcRouteServerPeerBgpOptions]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: VpcRouteServerPeerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.peerAddress">peer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_address VpcRouteServerPeer#peer_address}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.routeServerEndpointId">route_server_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#route_server_endpoint_id VpcRouteServerPeer#route_server_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.bgpOptions">bgp_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>]]</code> | bgp_options block. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#tags VpcRouteServerPeer#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.peerAddress"></a>

```python
peer_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_address VpcRouteServerPeer#peer_address}.

---

##### `route_server_endpoint_id`<sup>Required</sup> <a name="route_server_endpoint_id" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.routeServerEndpointId"></a>

```python
route_server_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#route_server_endpoint_id VpcRouteServerPeer#route_server_endpoint_id}.

---

##### `bgp_options`<sup>Optional</sup> <a name="bgp_options" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.bgpOptions"></a>

```python
bgp_options: typing.Union[IResolvable, typing.List[VpcRouteServerPeerBgpOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>]]

bgp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#bgp_options VpcRouteServerPeer#bgp_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#tags VpcRouteServerPeer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerConfig.property.timeouts"></a>

```python
timeouts: VpcRouteServerPeerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#timeouts VpcRouteServerPeer#timeouts}

---

### VpcRouteServerPeerTimeouts <a name="VpcRouteServerPeerTimeouts" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_route_server_peer

vpcRouteServerPeer.VpcRouteServerPeerTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#create VpcRouteServerPeer#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#delete VpcRouteServerPeer#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcRouteServerPeerBgpOptionsList <a name="VpcRouteServerPeerBgpOptionsList" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_route_server_peer

vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpcRouteServerPeerBgpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpcRouteServerPeerBgpOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>]]

---


### VpcRouteServerPeerBgpOptionsOutputReference <a name="VpcRouteServerPeerBgpOptionsOutputReference" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_route_server_peer

vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.resetPeerLivenessDetection">reset_peer_liveness_detection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_peer_liveness_detection` <a name="reset_peer_liveness_detection" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.resetPeerLivenessDetection"></a>

```python
def reset_peer_liveness_detection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerAsnInput">peer_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetectionInput">peer_liveness_detection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerAsn">peer_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetection">peer_liveness_detection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `peer_asn_input`<sup>Optional</sup> <a name="peer_asn_input" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerAsnInput"></a>

```python
peer_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_liveness_detection_input`<sup>Optional</sup> <a name="peer_liveness_detection_input" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetectionInput"></a>

```python
peer_liveness_detection_input: str
```

- *Type:* str

---

##### `peer_asn`<sup>Required</sup> <a name="peer_asn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerAsn"></a>

```python
peer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_liveness_detection`<sup>Required</sup> <a name="peer_liveness_detection" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetection"></a>

```python
peer_liveness_detection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpcRouteServerPeerBgpOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerBgpOptions">VpcRouteServerPeerBgpOptions</a>]

---


### VpcRouteServerPeerTimeoutsOutputReference <a name="VpcRouteServerPeerTimeoutsOutputReference" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_route_server_peer

vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpcRouteServerPeerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcRouteServerPeer.VpcRouteServerPeerTimeouts">VpcRouteServerPeerTimeouts</a>]

---



