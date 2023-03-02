# `ec2TransitGatewayVpcAttachment` Submodule <a name="`ec2TransitGatewayVpcAttachment` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayVpcAttachment <a name="Ec2TransitGatewayVpcAttachment" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment aws_ec2_transit_gateway_vpc_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_vpc_attachment

ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subnet_ids: typing.List[str],
  transit_gateway_id: str,
  vpc_id: str,
  appliance_mode_support: str = None,
  dns_support: str = None,
  id: str = None,
  ipv6_support: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  transit_gateway_default_route_table_association: typing.Union[bool, IResolvable] = None,
  transit_gateway_default_route_table_propagation: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.applianceModeSupport">appliance_mode_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#appliance_mode_support Ec2TransitGatewayVpcAttachment#appliance_mode_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.dnsSupport">dns_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#dns_support Ec2TransitGatewayVpcAttachment#dns_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#id Ec2TransitGatewayVpcAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.ipv6Support">ipv6_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#ipv6_support Ec2TransitGatewayVpcAttachment#ipv6_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#tags Ec2TransitGatewayVpcAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#tags_all Ec2TransitGatewayVpcAttachment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.transitGatewayDefaultRouteTableAssociation">transit_gateway_default_route_table_association</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.transitGatewayDefaultRouteTablePropagation">transit_gateway_default_route_table_propagation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_propagation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}.

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.transitGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}.

---

##### `appliance_mode_support`<sup>Optional</sup> <a name="appliance_mode_support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.applianceModeSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#appliance_mode_support Ec2TransitGatewayVpcAttachment#appliance_mode_support}.

---

##### `dns_support`<sup>Optional</sup> <a name="dns_support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.dnsSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#dns_support Ec2TransitGatewayVpcAttachment#dns_support}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#id Ec2TransitGatewayVpcAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_support`<sup>Optional</sup> <a name="ipv6_support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.ipv6Support"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#ipv6_support Ec2TransitGatewayVpcAttachment#ipv6_support}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#tags Ec2TransitGatewayVpcAttachment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#tags_all Ec2TransitGatewayVpcAttachment#tags_all}.

---

##### `transit_gateway_default_route_table_association`<sup>Optional</sup> <a name="transit_gateway_default_route_table_association" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.transitGatewayDefaultRouteTableAssociation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_association}.

---

##### `transit_gateway_default_route_table_propagation`<sup>Optional</sup> <a name="transit_gateway_default_route_table_propagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.transitGatewayDefaultRouteTablePropagation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_propagation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetApplianceModeSupport">reset_appliance_mode_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetDnsSupport">reset_dns_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetIpv6Support">reset_ipv6_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTransitGatewayDefaultRouteTableAssociation">reset_transit_gateway_default_route_table_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTransitGatewayDefaultRouteTablePropagation">reset_transit_gateway_default_route_table_propagation</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_appliance_mode_support` <a name="reset_appliance_mode_support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetApplianceModeSupport"></a>

```python
def reset_appliance_mode_support() -> None
```

##### `reset_dns_support` <a name="reset_dns_support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetDnsSupport"></a>

```python
def reset_dns_support() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv6_support` <a name="reset_ipv6_support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetIpv6Support"></a>

```python
def reset_ipv6_support() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_transit_gateway_default_route_table_association` <a name="reset_transit_gateway_default_route_table_association" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTransitGatewayDefaultRouteTableAssociation"></a>

```python
def reset_transit_gateway_default_route_table_association() -> None
```

##### `reset_transit_gateway_default_route_table_propagation` <a name="reset_transit_gateway_default_route_table_propagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTransitGatewayDefaultRouteTablePropagation"></a>

```python
def reset_transit_gateway_default_route_table_propagation() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_vpc_attachment

ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_vpc_attachment

ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_vpc_attachment

ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcOwnerId">vpc_owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.applianceModeSupportInput">appliance_mode_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dnsSupportInput">dns_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.ipv6SupportInput">ipv6_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTableAssociationInput">transit_gateway_default_route_table_association_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTablePropagationInput">transit_gateway_default_route_table_propagation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.applianceModeSupport">appliance_mode_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dnsSupport">dns_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.ipv6Support">ipv6_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTableAssociation">transit_gateway_default_route_table_association</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTablePropagation">transit_gateway_default_route_table_propagation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_owner_id`<sup>Required</sup> <a name="vpc_owner_id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcOwnerId"></a>

```python
vpc_owner_id: str
```

- *Type:* str

---

##### `appliance_mode_support_input`<sup>Optional</sup> <a name="appliance_mode_support_input" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.applianceModeSupportInput"></a>

```python
appliance_mode_support_input: str
```

- *Type:* str

---

##### `dns_support_input`<sup>Optional</sup> <a name="dns_support_input" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dnsSupportInput"></a>

```python
dns_support_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipv6_support_input`<sup>Optional</sup> <a name="ipv6_support_input" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.ipv6SupportInput"></a>

```python
ipv6_support_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transit_gateway_default_route_table_association_input`<sup>Optional</sup> <a name="transit_gateway_default_route_table_association_input" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTableAssociationInput"></a>

```python
transit_gateway_default_route_table_association_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `transit_gateway_default_route_table_propagation_input`<sup>Optional</sup> <a name="transit_gateway_default_route_table_propagation_input" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTablePropagationInput"></a>

```python
transit_gateway_default_route_table_propagation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `appliance_mode_support`<sup>Required</sup> <a name="appliance_mode_support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.applianceModeSupport"></a>

```python
appliance_mode_support: str
```

- *Type:* str

---

##### `dns_support`<sup>Required</sup> <a name="dns_support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dnsSupport"></a>

```python
dns_support: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv6_support`<sup>Required</sup> <a name="ipv6_support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.ipv6Support"></a>

```python
ipv6_support: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transit_gateway_default_route_table_association`<sup>Required</sup> <a name="transit_gateway_default_route_table_association" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTableAssociation"></a>

```python
transit_gateway_default_route_table_association: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `transit_gateway_default_route_table_propagation`<sup>Required</sup> <a name="transit_gateway_default_route_table_propagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTablePropagation"></a>

```python
transit_gateway_default_route_table_propagation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayVpcAttachmentConfig <a name="Ec2TransitGatewayVpcAttachmentConfig" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_vpc_attachment

ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subnet_ids: typing.List[str],
  transit_gateway_id: str,
  vpc_id: str,
  appliance_mode_support: str = None,
  dns_support: str = None,
  id: str = None,
  ipv6_support: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  transit_gateway_default_route_table_association: typing.Union[bool, IResolvable] = None,
  transit_gateway_default_route_table_propagation: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.applianceModeSupport">appliance_mode_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#appliance_mode_support Ec2TransitGatewayVpcAttachment#appliance_mode_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.dnsSupport">dns_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#dns_support Ec2TransitGatewayVpcAttachment#dns_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#id Ec2TransitGatewayVpcAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.ipv6Support">ipv6_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#ipv6_support Ec2TransitGatewayVpcAttachment#ipv6_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#tags Ec2TransitGatewayVpcAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#tags_all Ec2TransitGatewayVpcAttachment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayDefaultRouteTableAssociation">transit_gateway_default_route_table_association</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayDefaultRouteTablePropagation">transit_gateway_default_route_table_propagation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_propagation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}.

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}.

---

##### `appliance_mode_support`<sup>Optional</sup> <a name="appliance_mode_support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.applianceModeSupport"></a>

```python
appliance_mode_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#appliance_mode_support Ec2TransitGatewayVpcAttachment#appliance_mode_support}.

---

##### `dns_support`<sup>Optional</sup> <a name="dns_support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.dnsSupport"></a>

```python
dns_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#dns_support Ec2TransitGatewayVpcAttachment#dns_support}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#id Ec2TransitGatewayVpcAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_support`<sup>Optional</sup> <a name="ipv6_support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.ipv6Support"></a>

```python
ipv6_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#ipv6_support Ec2TransitGatewayVpcAttachment#ipv6_support}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#tags Ec2TransitGatewayVpcAttachment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#tags_all Ec2TransitGatewayVpcAttachment#tags_all}.

---

##### `transit_gateway_default_route_table_association`<sup>Optional</sup> <a name="transit_gateway_default_route_table_association" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayDefaultRouteTableAssociation"></a>

```python
transit_gateway_default_route_table_association: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_association}.

---

##### `transit_gateway_default_route_table_propagation`<sup>Optional</sup> <a name="transit_gateway_default_route_table_propagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayDefaultRouteTablePropagation"></a>

```python
transit_gateway_default_route_table_propagation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_propagation}.

---



