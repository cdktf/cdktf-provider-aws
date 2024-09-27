# `ec2TransitGatewayPeeringAttachment` Submodule <a name="`ec2TransitGatewayPeeringAttachment` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayPeeringAttachment <a name="Ec2TransitGatewayPeeringAttachment" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment aws_ec2_transit_gateway_peering_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  peer_region: str,
  peer_transit_gateway_id: str,
  transit_gateway_id: str,
  id: str = None,
  options: Ec2TransitGatewayPeeringAttachmentOptions = None,
  peer_account_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerRegion">peer_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerTransitGatewayId">peer_transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#id Ec2TransitGatewayPeeringAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptions">Ec2TransitGatewayPeeringAttachmentOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerAccountId">peer_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#tags_all Ec2TransitGatewayPeeringAttachment#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}.

---

##### `peer_transit_gateway_id`<sup>Required</sup> <a name="peer_transit_gateway_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerTransitGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}.

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.transitGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#id Ec2TransitGatewayPeeringAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptions">Ec2TransitGatewayPeeringAttachmentOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#options Ec2TransitGatewayPeeringAttachment#options}

---

##### `peer_account_id`<sup>Optional</sup> <a name="peer_account_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#tags_all Ec2TransitGatewayPeeringAttachment#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetPeerAccountId">reset_peer_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_options` <a name="put_options" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.putOptions"></a>

```python
def put_options(
  dynamic_routing: str = None
) -> None
```

###### `dynamic_routing`<sup>Optional</sup> <a name="dynamic_routing" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.putOptions.parameter.dynamicRouting"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#dynamic_routing Ec2TransitGatewayPeeringAttachment#dynamic_routing}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_peer_account_id` <a name="reset_peer_account_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetPeerAccountId"></a>

```python
def reset_peer_account_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Ec2TransitGatewayPeeringAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Ec2TransitGatewayPeeringAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2TransitGatewayPeeringAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2TransitGatewayPeeringAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayPeeringAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference">Ec2TransitGatewayPeeringAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.optionsInput">options_input</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptions">Ec2TransitGatewayPeeringAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountIdInput">peer_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegionInput">peer_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayIdInput">peer_transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountId">peer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegion">peer_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayId">peer_transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.options"></a>

```python
options: Ec2TransitGatewayPeeringAttachmentOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference">Ec2TransitGatewayPeeringAttachmentOptionsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.optionsInput"></a>

```python
options_input: Ec2TransitGatewayPeeringAttachmentOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptions">Ec2TransitGatewayPeeringAttachmentOptions</a>

---

##### `peer_account_id_input`<sup>Optional</sup> <a name="peer_account_id_input" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountIdInput"></a>

```python
peer_account_id_input: str
```

- *Type:* str

---

##### `peer_region_input`<sup>Optional</sup> <a name="peer_region_input" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegionInput"></a>

```python
peer_region_input: str
```

- *Type:* str

---

##### `peer_transit_gateway_id_input`<sup>Optional</sup> <a name="peer_transit_gateway_id_input" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayIdInput"></a>

```python
peer_transit_gateway_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `peer_account_id`<sup>Required</sup> <a name="peer_account_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountId"></a>

```python
peer_account_id: str
```

- *Type:* str

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

---

##### `peer_transit_gateway_id`<sup>Required</sup> <a name="peer_transit_gateway_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayId"></a>

```python
peer_transit_gateway_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayPeeringAttachmentConfig <a name="Ec2TransitGatewayPeeringAttachmentConfig" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  peer_region: str,
  peer_transit_gateway_id: str,
  transit_gateway_id: str,
  id: str = None,
  options: Ec2TransitGatewayPeeringAttachmentOptions = None,
  peer_account_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerRegion">peer_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerTransitGatewayId">peer_transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#id Ec2TransitGatewayPeeringAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptions">Ec2TransitGatewayPeeringAttachmentOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerAccountId">peer_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#tags_all Ec2TransitGatewayPeeringAttachment#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}.

---

##### `peer_transit_gateway_id`<sup>Required</sup> <a name="peer_transit_gateway_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerTransitGatewayId"></a>

```python
peer_transit_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}.

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#id Ec2TransitGatewayPeeringAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.options"></a>

```python
options: Ec2TransitGatewayPeeringAttachmentOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptions">Ec2TransitGatewayPeeringAttachmentOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#options Ec2TransitGatewayPeeringAttachment#options}

---

##### `peer_account_id`<sup>Optional</sup> <a name="peer_account_id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerAccountId"></a>

```python
peer_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#tags_all Ec2TransitGatewayPeeringAttachment#tags_all}.

---

### Ec2TransitGatewayPeeringAttachmentOptions <a name="Ec2TransitGatewayPeeringAttachmentOptions" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptions(
  dynamic_routing: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptions.property.dynamicRouting">dynamic_routing</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#dynamic_routing Ec2TransitGatewayPeeringAttachment#dynamic_routing}. |

---

##### `dynamic_routing`<sup>Optional</sup> <a name="dynamic_routing" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptions.property.dynamicRouting"></a>

```python
dynamic_routing: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ec2_transit_gateway_peering_attachment#dynamic_routing Ec2TransitGatewayPeeringAttachment#dynamic_routing}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayPeeringAttachmentOptionsOutputReference <a name="Ec2TransitGatewayPeeringAttachmentOptionsOutputReference" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.resetDynamicRouting">reset_dynamic_routing</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dynamic_routing` <a name="reset_dynamic_routing" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.resetDynamicRouting"></a>

```python
def reset_dynamic_routing() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.property.dynamicRoutingInput">dynamic_routing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.property.dynamicRouting">dynamic_routing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptions">Ec2TransitGatewayPeeringAttachmentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_routing_input`<sup>Optional</sup> <a name="dynamic_routing_input" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.property.dynamicRoutingInput"></a>

```python
dynamic_routing_input: str
```

- *Type:* str

---

##### `dynamic_routing`<sup>Required</sup> <a name="dynamic_routing" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.property.dynamicRouting"></a>

```python
dynamic_routing: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: Ec2TransitGatewayPeeringAttachmentOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentOptions">Ec2TransitGatewayPeeringAttachmentOptions</a>

---



