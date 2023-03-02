# `dataAwsRoute` Submodule <a name="`dataAwsRoute` Submodule" id="@cdktf/provider-aws.dataAwsRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute <a name="DataAwsRoute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route aws_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route

dataAwsRoute.DataAwsRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  route_table_id: str,
  carrier_gateway_id: str = None,
  core_network_arn: str = None,
  destination_cidr_block: str = None,
  destination_ipv6_cidr_block: str = None,
  destination_prefix_list_id: str = None,
  egress_only_gateway_id: str = None,
  gateway_id: str = None,
  id: str = None,
  instance_id: str = None,
  local_gateway_id: str = None,
  nat_gateway_id: str = None,
  network_interface_id: str = None,
  timeouts: DataAwsRouteTimeouts = None,
  transit_gateway_id: str = None,
  vpc_peering_connection_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.routeTableId">route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#route_table_id DataAwsRoute#route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.carrierGatewayId">carrier_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#carrier_gateway_id DataAwsRoute#carrier_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#core_network_arn DataAwsRoute#core_network_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_cidr_block DataAwsRoute#destination_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.destinationIpv6CidrBlock">destination_ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_ipv6_cidr_block DataAwsRoute#destination_ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.destinationPrefixListId">destination_prefix_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_prefix_list_id DataAwsRoute#destination_prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.egressOnlyGatewayId">egress_only_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#egress_only_gateway_id DataAwsRoute#egress_only_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#gateway_id DataAwsRoute#gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#id DataAwsRoute#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#instance_id DataAwsRoute#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.localGatewayId">local_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#local_gateway_id DataAwsRoute#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#nat_gateway_id DataAwsRoute#nat_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#network_interface_id DataAwsRoute#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#transit_gateway_id DataAwsRoute#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#vpc_peering_connection_id DataAwsRoute#vpc_peering_connection_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.routeTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#route_table_id DataAwsRoute#route_table_id}.

---

##### `carrier_gateway_id`<sup>Optional</sup> <a name="carrier_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.carrierGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#carrier_gateway_id DataAwsRoute#carrier_gateway_id}.

---

##### `core_network_arn`<sup>Optional</sup> <a name="core_network_arn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.coreNetworkArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#core_network_arn DataAwsRoute#core_network_arn}.

---

##### `destination_cidr_block`<sup>Optional</sup> <a name="destination_cidr_block" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.destinationCidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_cidr_block DataAwsRoute#destination_cidr_block}.

---

##### `destination_ipv6_cidr_block`<sup>Optional</sup> <a name="destination_ipv6_cidr_block" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.destinationIpv6CidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_ipv6_cidr_block DataAwsRoute#destination_ipv6_cidr_block}.

---

##### `destination_prefix_list_id`<sup>Optional</sup> <a name="destination_prefix_list_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.destinationPrefixListId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_prefix_list_id DataAwsRoute#destination_prefix_list_id}.

---

##### `egress_only_gateway_id`<sup>Optional</sup> <a name="egress_only_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.egressOnlyGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#egress_only_gateway_id DataAwsRoute#egress_only_gateway_id}.

---

##### `gateway_id`<sup>Optional</sup> <a name="gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.gatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#gateway_id DataAwsRoute#gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#id DataAwsRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#instance_id DataAwsRoute#instance_id}.

---

##### `local_gateway_id`<sup>Optional</sup> <a name="local_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.localGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#local_gateway_id DataAwsRoute#local_gateway_id}.

---

##### `nat_gateway_id`<sup>Optional</sup> <a name="nat_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.natGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#nat_gateway_id DataAwsRoute#nat_gateway_id}.

---

##### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.networkInterfaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#network_interface_id DataAwsRoute#network_interface_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#timeouts DataAwsRoute#timeouts}

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.transitGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#transit_gateway_id DataAwsRoute#transit_gateway_id}.

---

##### `vpc_peering_connection_id`<sup>Optional</sup> <a name="vpc_peering_connection_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.vpcPeeringConnectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#vpc_peering_connection_id DataAwsRoute#vpc_peering_connection_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetCarrierGatewayId">reset_carrier_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetCoreNetworkArn">reset_core_network_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationCidrBlock">reset_destination_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationIpv6CidrBlock">reset_destination_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationPrefixListId">reset_destination_prefix_list_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetEgressOnlyGatewayId">reset_egress_only_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetGatewayId">reset_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetLocalGatewayId">reset_local_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetNatGatewayId">reset_nat_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetNetworkInterfaceId">reset_network_interface_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetTransitGatewayId">reset_transit_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetVpcPeeringConnectionId">reset_vpc_peering_connection_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#read DataAwsRoute#read}.

---

##### `reset_carrier_gateway_id` <a name="reset_carrier_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetCarrierGatewayId"></a>

```python
def reset_carrier_gateway_id() -> None
```

##### `reset_core_network_arn` <a name="reset_core_network_arn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetCoreNetworkArn"></a>

```python
def reset_core_network_arn() -> None
```

##### `reset_destination_cidr_block` <a name="reset_destination_cidr_block" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationCidrBlock"></a>

```python
def reset_destination_cidr_block() -> None
```

##### `reset_destination_ipv6_cidr_block` <a name="reset_destination_ipv6_cidr_block" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationIpv6CidrBlock"></a>

```python
def reset_destination_ipv6_cidr_block() -> None
```

##### `reset_destination_prefix_list_id` <a name="reset_destination_prefix_list_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationPrefixListId"></a>

```python
def reset_destination_prefix_list_id() -> None
```

##### `reset_egress_only_gateway_id` <a name="reset_egress_only_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetEgressOnlyGatewayId"></a>

```python
def reset_egress_only_gateway_id() -> None
```

##### `reset_gateway_id` <a name="reset_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetGatewayId"></a>

```python
def reset_gateway_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_local_gateway_id` <a name="reset_local_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetLocalGatewayId"></a>

```python
def reset_local_gateway_id() -> None
```

##### `reset_nat_gateway_id` <a name="reset_nat_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetNatGatewayId"></a>

```python
def reset_nat_gateway_id() -> None
```

##### `reset_network_interface_id` <a name="reset_network_interface_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetNetworkInterfaceId"></a>

```python
def reset_network_interface_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transit_gateway_id` <a name="reset_transit_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetTransitGatewayId"></a>

```python
def reset_transit_gateway_id() -> None
```

##### `reset_vpc_peering_connection_id` <a name="reset_vpc_peering_connection_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetVpcPeeringConnectionId"></a>

```python
def reset_vpc_peering_connection_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route

dataAwsRoute.DataAwsRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route

dataAwsRoute.DataAwsRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route

dataAwsRoute.DataAwsRoute.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference">DataAwsRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.carrierGatewayIdInput">carrier_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.coreNetworkArnInput">core_network_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationCidrBlockInput">destination_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationIpv6CidrBlockInput">destination_ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationPrefixListIdInput">destination_prefix_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.egressOnlyGatewayIdInput">egress_only_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.localGatewayIdInput">local_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.natGatewayIdInput">nat_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.routeTableIdInput">route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.vpcPeeringConnectionIdInput">vpc_peering_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.carrierGatewayId">carrier_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationIpv6CidrBlock">destination_ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationPrefixListId">destination_prefix_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.egressOnlyGatewayId">egress_only_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.routeTableId">route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.timeouts"></a>

```python
timeouts: DataAwsRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference">DataAwsRouteTimeoutsOutputReference</a>

---

##### `carrier_gateway_id_input`<sup>Optional</sup> <a name="carrier_gateway_id_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.carrierGatewayIdInput"></a>

```python
carrier_gateway_id_input: str
```

- *Type:* str

---

##### `core_network_arn_input`<sup>Optional</sup> <a name="core_network_arn_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.coreNetworkArnInput"></a>

```python
core_network_arn_input: str
```

- *Type:* str

---

##### `destination_cidr_block_input`<sup>Optional</sup> <a name="destination_cidr_block_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationCidrBlockInput"></a>

```python
destination_cidr_block_input: str
```

- *Type:* str

---

##### `destination_ipv6_cidr_block_input`<sup>Optional</sup> <a name="destination_ipv6_cidr_block_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationIpv6CidrBlockInput"></a>

```python
destination_ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `destination_prefix_list_id_input`<sup>Optional</sup> <a name="destination_prefix_list_id_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationPrefixListIdInput"></a>

```python
destination_prefix_list_id_input: str
```

- *Type:* str

---

##### `egress_only_gateway_id_input`<sup>Optional</sup> <a name="egress_only_gateway_id_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.egressOnlyGatewayIdInput"></a>

```python
egress_only_gateway_id_input: str
```

- *Type:* str

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `local_gateway_id_input`<sup>Optional</sup> <a name="local_gateway_id_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.localGatewayIdInput"></a>

```python
local_gateway_id_input: str
```

- *Type:* str

---

##### `nat_gateway_id_input`<sup>Optional</sup> <a name="nat_gateway_id_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.natGatewayIdInput"></a>

```python
nat_gateway_id_input: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `route_table_id_input`<sup>Optional</sup> <a name="route_table_id_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.routeTableIdInput"></a>

```python
route_table_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsRouteTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a>, cdktf.IResolvable]

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `vpc_peering_connection_id_input`<sup>Optional</sup> <a name="vpc_peering_connection_id_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.vpcPeeringConnectionIdInput"></a>

```python
vpc_peering_connection_id_input: str
```

- *Type:* str

---

##### `carrier_gateway_id`<sup>Required</sup> <a name="carrier_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.carrierGatewayId"></a>

```python
carrier_gateway_id: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `destination_cidr_block`<sup>Required</sup> <a name="destination_cidr_block" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationCidrBlock"></a>

```python
destination_cidr_block: str
```

- *Type:* str

---

##### `destination_ipv6_cidr_block`<sup>Required</sup> <a name="destination_ipv6_cidr_block" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationIpv6CidrBlock"></a>

```python
destination_ipv6_cidr_block: str
```

- *Type:* str

---

##### `destination_prefix_list_id`<sup>Required</sup> <a name="destination_prefix_list_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationPrefixListId"></a>

```python
destination_prefix_list_id: str
```

- *Type:* str

---

##### `egress_only_gateway_id`<sup>Required</sup> <a name="egress_only_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.egressOnlyGatewayId"></a>

```python
egress_only_gateway_id: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `local_gateway_id`<sup>Required</sup> <a name="local_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

---

##### `nat_gateway_id`<sup>Required</sup> <a name="nat_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.natGatewayId"></a>

```python
nat_gateway_id: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `vpc_peering_connection_id`<sup>Required</sup> <a name="vpc_peering_connection_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.vpcPeeringConnectionId"></a>

```python
vpc_peering_connection_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRouteConfig <a name="DataAwsRouteConfig" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route

dataAwsRoute.DataAwsRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  route_table_id: str,
  carrier_gateway_id: str = None,
  core_network_arn: str = None,
  destination_cidr_block: str = None,
  destination_ipv6_cidr_block: str = None,
  destination_prefix_list_id: str = None,
  egress_only_gateway_id: str = None,
  gateway_id: str = None,
  id: str = None,
  instance_id: str = None,
  local_gateway_id: str = None,
  nat_gateway_id: str = None,
  network_interface_id: str = None,
  timeouts: DataAwsRouteTimeouts = None,
  transit_gateway_id: str = None,
  vpc_peering_connection_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.routeTableId">route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#route_table_id DataAwsRoute#route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.carrierGatewayId">carrier_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#carrier_gateway_id DataAwsRoute#carrier_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#core_network_arn DataAwsRoute#core_network_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_cidr_block DataAwsRoute#destination_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationIpv6CidrBlock">destination_ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_ipv6_cidr_block DataAwsRoute#destination_ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationPrefixListId">destination_prefix_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_prefix_list_id DataAwsRoute#destination_prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.egressOnlyGatewayId">egress_only_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#egress_only_gateway_id DataAwsRoute#egress_only_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#gateway_id DataAwsRoute#gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#id DataAwsRoute#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#instance_id DataAwsRoute#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#local_gateway_id DataAwsRoute#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#nat_gateway_id DataAwsRoute#nat_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#network_interface_id DataAwsRoute#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#transit_gateway_id DataAwsRoute#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#vpc_peering_connection_id DataAwsRoute#vpc_peering_connection_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#route_table_id DataAwsRoute#route_table_id}.

---

##### `carrier_gateway_id`<sup>Optional</sup> <a name="carrier_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.carrierGatewayId"></a>

```python
carrier_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#carrier_gateway_id DataAwsRoute#carrier_gateway_id}.

---

##### `core_network_arn`<sup>Optional</sup> <a name="core_network_arn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#core_network_arn DataAwsRoute#core_network_arn}.

---

##### `destination_cidr_block`<sup>Optional</sup> <a name="destination_cidr_block" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationCidrBlock"></a>

```python
destination_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_cidr_block DataAwsRoute#destination_cidr_block}.

---

##### `destination_ipv6_cidr_block`<sup>Optional</sup> <a name="destination_ipv6_cidr_block" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationIpv6CidrBlock"></a>

```python
destination_ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_ipv6_cidr_block DataAwsRoute#destination_ipv6_cidr_block}.

---

##### `destination_prefix_list_id`<sup>Optional</sup> <a name="destination_prefix_list_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationPrefixListId"></a>

```python
destination_prefix_list_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_prefix_list_id DataAwsRoute#destination_prefix_list_id}.

---

##### `egress_only_gateway_id`<sup>Optional</sup> <a name="egress_only_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.egressOnlyGatewayId"></a>

```python
egress_only_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#egress_only_gateway_id DataAwsRoute#egress_only_gateway_id}.

---

##### `gateway_id`<sup>Optional</sup> <a name="gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#gateway_id DataAwsRoute#gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#id DataAwsRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#instance_id DataAwsRoute#instance_id}.

---

##### `local_gateway_id`<sup>Optional</sup> <a name="local_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#local_gateway_id DataAwsRoute#local_gateway_id}.

---

##### `nat_gateway_id`<sup>Optional</sup> <a name="nat_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.natGatewayId"></a>

```python
nat_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#nat_gateway_id DataAwsRoute#nat_gateway_id}.

---

##### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#network_interface_id DataAwsRoute#network_interface_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.timeouts"></a>

```python
timeouts: DataAwsRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#timeouts DataAwsRoute#timeouts}

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#transit_gateway_id DataAwsRoute#transit_gateway_id}.

---

##### `vpc_peering_connection_id`<sup>Optional</sup> <a name="vpc_peering_connection_id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.vpcPeeringConnectionId"></a>

```python
vpc_peering_connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#vpc_peering_connection_id DataAwsRoute#vpc_peering_connection_id}.

---

### DataAwsRouteTimeouts <a name="DataAwsRouteTimeouts" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route

dataAwsRoute.DataAwsRouteTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#read DataAwsRoute#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#read DataAwsRoute#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsRouteTimeoutsOutputReference <a name="DataAwsRouteTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route

dataAwsRoute.DataAwsRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsRouteTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a>, cdktf.IResolvable]

---



