# `ec2TransitGateway` Submodule <a name="`ec2TransitGateway` Submodule" id="@cdktf/provider-aws.ec2TransitGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGateway <a name="Ec2TransitGateway" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway aws_ec2_transit_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  amazon_side_asn: typing.Union[int, float] = None,
  auto_accept_shared_attachments: str = None,
  default_route_table_association: str = None,
  default_route_table_propagation: str = None,
  description: str = None,
  dns_support: str = None,
  id: str = None,
  multicast_support: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Ec2TransitGatewayTimeouts = None,
  transit_gateway_cidr_blocks: typing.List[str] = None,
  vpn_ecmp_support: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.amazonSideAsn">amazon_side_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.autoAcceptSharedAttachments">auto_accept_shared_attachments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.defaultRouteTableAssociation">default_route_table_association</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.defaultRouteTablePropagation">default_route_table_propagation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#description Ec2TransitGateway#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.dnsSupport">dns_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#id Ec2TransitGateway#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.multicastSupport">multicast_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags Ec2TransitGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags_all Ec2TransitGateway#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.transitGatewayCidrBlocks">transit_gateway_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.vpnEcmpSupport">vpn_ecmp_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amazon_side_asn`<sup>Optional</sup> <a name="amazon_side_asn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.amazonSideAsn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}.

---

##### `auto_accept_shared_attachments`<sup>Optional</sup> <a name="auto_accept_shared_attachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.autoAcceptSharedAttachments"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}.

---

##### `default_route_table_association`<sup>Optional</sup> <a name="default_route_table_association" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.defaultRouteTableAssociation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}.

---

##### `default_route_table_propagation`<sup>Optional</sup> <a name="default_route_table_propagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.defaultRouteTablePropagation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#description Ec2TransitGateway#description}.

---

##### `dns_support`<sup>Optional</sup> <a name="dns_support" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.dnsSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#id Ec2TransitGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multicast_support`<sup>Optional</sup> <a name="multicast_support" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.multicastSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags Ec2TransitGateway#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags_all Ec2TransitGateway#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#timeouts Ec2TransitGateway#timeouts}

---

##### `transit_gateway_cidr_blocks`<sup>Optional</sup> <a name="transit_gateway_cidr_blocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.transitGatewayCidrBlocks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}.

---

##### `vpn_ecmp_support`<sup>Optional</sup> <a name="vpn_ecmp_support" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.vpnEcmpSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAmazonSideAsn">reset_amazon_side_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAutoAcceptSharedAttachments">reset_auto_accept_shared_attachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTableAssociation">reset_default_route_table_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTablePropagation">reset_default_route_table_propagation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDnsSupport">reset_dns_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetMulticastSupport">reset_multicast_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTransitGatewayCidrBlocks">reset_transit_gateway_cidr_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetVpnEcmpSupport">reset_vpn_ecmp_support</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#create Ec2TransitGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#delete Ec2TransitGateway#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#update Ec2TransitGateway#update}.

---

##### `reset_amazon_side_asn` <a name="reset_amazon_side_asn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAmazonSideAsn"></a>

```python
def reset_amazon_side_asn() -> None
```

##### `reset_auto_accept_shared_attachments` <a name="reset_auto_accept_shared_attachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAutoAcceptSharedAttachments"></a>

```python
def reset_auto_accept_shared_attachments() -> None
```

##### `reset_default_route_table_association` <a name="reset_default_route_table_association" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTableAssociation"></a>

```python
def reset_default_route_table_association() -> None
```

##### `reset_default_route_table_propagation` <a name="reset_default_route_table_propagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTablePropagation"></a>

```python
def reset_default_route_table_propagation() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dns_support` <a name="reset_dns_support" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDnsSupport"></a>

```python
def reset_dns_support() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_multicast_support` <a name="reset_multicast_support" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetMulticastSupport"></a>

```python
def reset_multicast_support() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transit_gateway_cidr_blocks` <a name="reset_transit_gateway_cidr_blocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTransitGatewayCidrBlocks"></a>

```python
def reset_transit_gateway_cidr_blocks() -> None
```

##### `reset_vpn_ecmp_support` <a name="reset_vpn_ecmp_support" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetVpnEcmpSupport"></a>

```python
def reset_vpn_ecmp_support() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.associationDefaultRouteTableId">association_default_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.propagationDefaultRouteTableId">propagation_default_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference">Ec2TransitGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsnInput">amazon_side_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachmentsInput">auto_accept_shared_attachments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociationInput">default_route_table_association_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagationInput">default_route_table_propagation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupportInput">dns_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupportInput">multicast_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocksInput">transit_gateway_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupportInput">vpn_ecmp_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsn">amazon_side_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachments">auto_accept_shared_attachments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociation">default_route_table_association</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagation">default_route_table_propagation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupport">dns_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupport">multicast_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocks">transit_gateway_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupport">vpn_ecmp_support</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `association_default_route_table_id`<sup>Required</sup> <a name="association_default_route_table_id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.associationDefaultRouteTableId"></a>

```python
association_default_route_table_id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `propagation_default_route_table_id`<sup>Required</sup> <a name="propagation_default_route_table_id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.propagationDefaultRouteTableId"></a>

```python
propagation_default_route_table_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeouts"></a>

```python
timeouts: Ec2TransitGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference">Ec2TransitGatewayTimeoutsOutputReference</a>

---

##### `amazon_side_asn_input`<sup>Optional</sup> <a name="amazon_side_asn_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsnInput"></a>

```python
amazon_side_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_accept_shared_attachments_input`<sup>Optional</sup> <a name="auto_accept_shared_attachments_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachmentsInput"></a>

```python
auto_accept_shared_attachments_input: str
```

- *Type:* str

---

##### `default_route_table_association_input`<sup>Optional</sup> <a name="default_route_table_association_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociationInput"></a>

```python
default_route_table_association_input: str
```

- *Type:* str

---

##### `default_route_table_propagation_input`<sup>Optional</sup> <a name="default_route_table_propagation_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagationInput"></a>

```python
default_route_table_propagation_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_support_input`<sup>Optional</sup> <a name="dns_support_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupportInput"></a>

```python
dns_support_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `multicast_support_input`<sup>Optional</sup> <a name="multicast_support_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupportInput"></a>

```python
multicast_support_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[Ec2TransitGatewayTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a>, cdktf.IResolvable]

---

##### `transit_gateway_cidr_blocks_input`<sup>Optional</sup> <a name="transit_gateway_cidr_blocks_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocksInput"></a>

```python
transit_gateway_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpn_ecmp_support_input`<sup>Optional</sup> <a name="vpn_ecmp_support_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupportInput"></a>

```python
vpn_ecmp_support_input: str
```

- *Type:* str

---

##### `amazon_side_asn`<sup>Required</sup> <a name="amazon_side_asn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsn"></a>

```python
amazon_side_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_accept_shared_attachments`<sup>Required</sup> <a name="auto_accept_shared_attachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachments"></a>

```python
auto_accept_shared_attachments: str
```

- *Type:* str

---

##### `default_route_table_association`<sup>Required</sup> <a name="default_route_table_association" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociation"></a>

```python
default_route_table_association: str
```

- *Type:* str

---

##### `default_route_table_propagation`<sup>Required</sup> <a name="default_route_table_propagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagation"></a>

```python
default_route_table_propagation: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_support`<sup>Required</sup> <a name="dns_support" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupport"></a>

```python
dns_support: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `multicast_support`<sup>Required</sup> <a name="multicast_support" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupport"></a>

```python
multicast_support: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transit_gateway_cidr_blocks`<sup>Required</sup> <a name="transit_gateway_cidr_blocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocks"></a>

```python
transit_gateway_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpn_ecmp_support`<sup>Required</sup> <a name="vpn_ecmp_support" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupport"></a>

```python
vpn_ecmp_support: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayConfig <a name="Ec2TransitGatewayConfig" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  amazon_side_asn: typing.Union[int, float] = None,
  auto_accept_shared_attachments: str = None,
  default_route_table_association: str = None,
  default_route_table_propagation: str = None,
  description: str = None,
  dns_support: str = None,
  id: str = None,
  multicast_support: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Ec2TransitGatewayTimeouts = None,
  transit_gateway_cidr_blocks: typing.List[str] = None,
  vpn_ecmp_support: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.amazonSideAsn">amazon_side_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.autoAcceptSharedAttachments">auto_accept_shared_attachments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTableAssociation">default_route_table_association</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTablePropagation">default_route_table_propagation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#description Ec2TransitGateway#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dnsSupport">dns_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#id Ec2TransitGateway#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.multicastSupport">multicast_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags Ec2TransitGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags_all Ec2TransitGateway#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.transitGatewayCidrBlocks">transit_gateway_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.vpnEcmpSupport">vpn_ecmp_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amazon_side_asn`<sup>Optional</sup> <a name="amazon_side_asn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.amazonSideAsn"></a>

```python
amazon_side_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}.

---

##### `auto_accept_shared_attachments`<sup>Optional</sup> <a name="auto_accept_shared_attachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.autoAcceptSharedAttachments"></a>

```python
auto_accept_shared_attachments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}.

---

##### `default_route_table_association`<sup>Optional</sup> <a name="default_route_table_association" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTableAssociation"></a>

```python
default_route_table_association: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}.

---

##### `default_route_table_propagation`<sup>Optional</sup> <a name="default_route_table_propagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTablePropagation"></a>

```python
default_route_table_propagation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#description Ec2TransitGateway#description}.

---

##### `dns_support`<sup>Optional</sup> <a name="dns_support" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dnsSupport"></a>

```python
dns_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#id Ec2TransitGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multicast_support`<sup>Optional</sup> <a name="multicast_support" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.multicastSupport"></a>

```python
multicast_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags Ec2TransitGateway#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags_all Ec2TransitGateway#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.timeouts"></a>

```python
timeouts: Ec2TransitGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#timeouts Ec2TransitGateway#timeouts}

---

##### `transit_gateway_cidr_blocks`<sup>Optional</sup> <a name="transit_gateway_cidr_blocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.transitGatewayCidrBlocks"></a>

```python
transit_gateway_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}.

---

##### `vpn_ecmp_support`<sup>Optional</sup> <a name="vpn_ecmp_support" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.vpnEcmpSupport"></a>

```python
vpn_ecmp_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}.

---

### Ec2TransitGatewayTimeouts <a name="Ec2TransitGatewayTimeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGatewayTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#create Ec2TransitGateway#create}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#delete Ec2TransitGateway#delete}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#update Ec2TransitGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#create Ec2TransitGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#delete Ec2TransitGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#update Ec2TransitGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayTimeoutsOutputReference <a name="Ec2TransitGatewayTimeoutsOutputReference" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Ec2TransitGatewayTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a>, cdktf.IResolvable]

---



