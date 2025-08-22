# `ec2TransitGatewayMulticastDomainAssociation` Submodule <a name="`ec2TransitGatewayMulticastDomainAssociation` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMulticastDomainAssociation <a name="Ec2TransitGatewayMulticastDomainAssociation" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association aws_ec2_transit_gateway_multicast_domain_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_multicast_domain_association

ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subnet_id: str,
  transit_gateway_attachment_id: str,
  transit_gateway_multicast_domain_id: str,
  id: str = None,
  region: str = None,
  timeouts: Ec2TransitGatewayMulticastDomainAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#subnet_id Ec2TransitGatewayMulticastDomainAssociation#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_attachment_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.transitGatewayMulticastDomainId">transit_gateway_multicast_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_multicast_domain_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#id Ec2TransitGatewayMulticastDomainAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts">Ec2TransitGatewayMulticastDomainAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#subnet_id Ec2TransitGatewayMulticastDomainAssociation#subnet_id}.

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_attachment_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_attachment_id}.

---

##### `transit_gateway_multicast_domain_id`<sup>Required</sup> <a name="transit_gateway_multicast_domain_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.transitGatewayMulticastDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_multicast_domain_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#id Ec2TransitGatewayMulticastDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#region Ec2TransitGatewayMulticastDomainAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts">Ec2TransitGatewayMulticastDomainAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#timeouts Ec2TransitGatewayMulticastDomainAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#create Ec2TransitGatewayMulticastDomainAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#delete Ec2TransitGatewayMulticastDomainAssociation#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Ec2TransitGatewayMulticastDomainAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_multicast_domain_association

ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_multicast_domain_association

ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_multicast_domain_association

ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_multicast_domain_association

ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Ec2TransitGatewayMulticastDomainAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2TransitGatewayMulticastDomainAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2TransitGatewayMulticastDomainAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayMulticastDomainAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference">Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts">Ec2TransitGatewayMulticastDomainAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayAttachmentIdInput">transit_gateway_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayMulticastDomainIdInput">transit_gateway_multicast_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayMulticastDomainId">transit_gateway_multicast_domain_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.timeouts"></a>

```python
timeouts: Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference">Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Ec2TransitGatewayMulticastDomainAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts">Ec2TransitGatewayMulticastDomainAssociationTimeouts</a>]

---

##### `transit_gateway_attachment_id_input`<sup>Optional</sup> <a name="transit_gateway_attachment_id_input" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayAttachmentIdInput"></a>

```python
transit_gateway_attachment_id_input: str
```

- *Type:* str

---

##### `transit_gateway_multicast_domain_id_input`<sup>Optional</sup> <a name="transit_gateway_multicast_domain_id_input" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayMulticastDomainIdInput"></a>

```python
transit_gateway_multicast_domain_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `transit_gateway_multicast_domain_id`<sup>Required</sup> <a name="transit_gateway_multicast_domain_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayMulticastDomainId"></a>

```python
transit_gateway_multicast_domain_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMulticastDomainAssociationConfig <a name="Ec2TransitGatewayMulticastDomainAssociationConfig" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_multicast_domain_association

ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subnet_id: str,
  transit_gateway_attachment_id: str,
  transit_gateway_multicast_domain_id: str,
  id: str = None,
  region: str = None,
  timeouts: Ec2TransitGatewayMulticastDomainAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#subnet_id Ec2TransitGatewayMulticastDomainAssociation#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_attachment_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.transitGatewayMulticastDomainId">transit_gateway_multicast_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_multicast_domain_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#id Ec2TransitGatewayMulticastDomainAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts">Ec2TransitGatewayMulticastDomainAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#subnet_id Ec2TransitGatewayMulticastDomainAssociation#subnet_id}.

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_attachment_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_attachment_id}.

---

##### `transit_gateway_multicast_domain_id`<sup>Required</sup> <a name="transit_gateway_multicast_domain_id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.transitGatewayMulticastDomainId"></a>

```python
transit_gateway_multicast_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_multicast_domain_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#id Ec2TransitGatewayMulticastDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#region Ec2TransitGatewayMulticastDomainAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.timeouts"></a>

```python
timeouts: Ec2TransitGatewayMulticastDomainAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts">Ec2TransitGatewayMulticastDomainAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#timeouts Ec2TransitGatewayMulticastDomainAssociation#timeouts}

---

### Ec2TransitGatewayMulticastDomainAssociationTimeouts <a name="Ec2TransitGatewayMulticastDomainAssociationTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_multicast_domain_association

ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#create Ec2TransitGatewayMulticastDomainAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#delete Ec2TransitGatewayMulticastDomainAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#create Ec2TransitGatewayMulticastDomainAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/ec2_transit_gateway_multicast_domain_association#delete Ec2TransitGatewayMulticastDomainAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference <a name="Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_multicast_domain_association

ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts">Ec2TransitGatewayMulticastDomainAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Ec2TransitGatewayMulticastDomainAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationTimeouts">Ec2TransitGatewayMulticastDomainAssociationTimeouts</a>]

---



