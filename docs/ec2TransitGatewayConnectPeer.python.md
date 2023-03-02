# `ec2TransitGatewayConnectPeer` Submodule <a name="`ec2TransitGatewayConnectPeer` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayConnectPeer <a name="Ec2TransitGatewayConnectPeer" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer aws_ec2_transit_gateway_connect_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect_peer

ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  inside_cidr_blocks: typing.List[str],
  peer_address: str,
  transit_gateway_attachment_id: str,
  bgp_asn: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Ec2TransitGatewayConnectPeerTimeouts = None,
  transit_gateway_address: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.insideCidrBlocks">inside_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#inside_cidr_blocks Ec2TransitGatewayConnectPeer#inside_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.peerAddress">peer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#peer_address Ec2TransitGatewayConnectPeer#peer_address}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_attachment_id Ec2TransitGatewayConnectPeer#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.bgpAsn">bgp_asn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#bgp_asn Ec2TransitGatewayConnectPeer#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#id Ec2TransitGatewayConnectPeer#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags Ec2TransitGatewayConnectPeer#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags_all Ec2TransitGatewayConnectPeer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.transitGatewayAddress">transit_gateway_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_address Ec2TransitGatewayConnectPeer#transit_gateway_address}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `inside_cidr_blocks`<sup>Required</sup> <a name="inside_cidr_blocks" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.insideCidrBlocks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#inside_cidr_blocks Ec2TransitGatewayConnectPeer#inside_cidr_blocks}.

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.peerAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#peer_address Ec2TransitGatewayConnectPeer#peer_address}.

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_attachment_id Ec2TransitGatewayConnectPeer#transit_gateway_attachment_id}.

---

##### `bgp_asn`<sup>Optional</sup> <a name="bgp_asn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.bgpAsn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#bgp_asn Ec2TransitGatewayConnectPeer#bgp_asn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#id Ec2TransitGatewayConnectPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags Ec2TransitGatewayConnectPeer#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags_all Ec2TransitGatewayConnectPeer#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#timeouts Ec2TransitGatewayConnectPeer#timeouts}

---

##### `transit_gateway_address`<sup>Optional</sup> <a name="transit_gateway_address" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.transitGatewayAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_address Ec2TransitGatewayConnectPeer#transit_gateway_address}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetBgpAsn">reset_bgp_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTransitGatewayAddress">reset_transit_gateway_address</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#create Ec2TransitGatewayConnectPeer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#delete Ec2TransitGatewayConnectPeer#delete}.

---

##### `reset_bgp_asn` <a name="reset_bgp_asn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetBgpAsn"></a>

```python
def reset_bgp_asn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transit_gateway_address` <a name="reset_transit_gateway_address" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTransitGatewayAddress"></a>

```python
def reset_transit_gateway_address() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect_peer

ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect_peer

ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect_peer

ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference">Ec2TransitGatewayConnectPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.bgpAsnInput">bgp_asn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.insideCidrBlocksInput">inside_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.peerAddressInput">peer_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAddressInput">transit_gateway_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAttachmentIdInput">transit_gateway_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.bgpAsn">bgp_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.insideCidrBlocks">inside_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.peerAddress">peer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAddress">transit_gateway_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.timeouts"></a>

```python
timeouts: Ec2TransitGatewayConnectPeerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference">Ec2TransitGatewayConnectPeerTimeoutsOutputReference</a>

---

##### `bgp_asn_input`<sup>Optional</sup> <a name="bgp_asn_input" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.bgpAsnInput"></a>

```python
bgp_asn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inside_cidr_blocks_input`<sup>Optional</sup> <a name="inside_cidr_blocks_input" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.insideCidrBlocksInput"></a>

```python
inside_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peer_address_input`<sup>Optional</sup> <a name="peer_address_input" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.peerAddressInput"></a>

```python
peer_address_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[Ec2TransitGatewayConnectPeerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a>, cdktf.IResolvable]

---

##### `transit_gateway_address_input`<sup>Optional</sup> <a name="transit_gateway_address_input" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAddressInput"></a>

```python
transit_gateway_address_input: str
```

- *Type:* str

---

##### `transit_gateway_attachment_id_input`<sup>Optional</sup> <a name="transit_gateway_attachment_id_input" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAttachmentIdInput"></a>

```python
transit_gateway_attachment_id_input: str
```

- *Type:* str

---

##### `bgp_asn`<sup>Required</sup> <a name="bgp_asn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.bgpAsn"></a>

```python
bgp_asn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inside_cidr_blocks`<sup>Required</sup> <a name="inside_cidr_blocks" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.insideCidrBlocks"></a>

```python
inside_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.peerAddress"></a>

```python
peer_address: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transit_gateway_address`<sup>Required</sup> <a name="transit_gateway_address" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAddress"></a>

```python
transit_gateway_address: str
```

- *Type:* str

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayConnectPeerConfig <a name="Ec2TransitGatewayConnectPeerConfig" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect_peer

ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  inside_cidr_blocks: typing.List[str],
  peer_address: str,
  transit_gateway_attachment_id: str,
  bgp_asn: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Ec2TransitGatewayConnectPeerTimeouts = None,
  transit_gateway_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.insideCidrBlocks">inside_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#inside_cidr_blocks Ec2TransitGatewayConnectPeer#inside_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.peerAddress">peer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#peer_address Ec2TransitGatewayConnectPeer#peer_address}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_attachment_id Ec2TransitGatewayConnectPeer#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.bgpAsn">bgp_asn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#bgp_asn Ec2TransitGatewayConnectPeer#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#id Ec2TransitGatewayConnectPeer#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags Ec2TransitGatewayConnectPeer#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags_all Ec2TransitGatewayConnectPeer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.transitGatewayAddress">transit_gateway_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_address Ec2TransitGatewayConnectPeer#transit_gateway_address}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `inside_cidr_blocks`<sup>Required</sup> <a name="inside_cidr_blocks" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.insideCidrBlocks"></a>

```python
inside_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#inside_cidr_blocks Ec2TransitGatewayConnectPeer#inside_cidr_blocks}.

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.peerAddress"></a>

```python
peer_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#peer_address Ec2TransitGatewayConnectPeer#peer_address}.

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_attachment_id Ec2TransitGatewayConnectPeer#transit_gateway_attachment_id}.

---

##### `bgp_asn`<sup>Optional</sup> <a name="bgp_asn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.bgpAsn"></a>

```python
bgp_asn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#bgp_asn Ec2TransitGatewayConnectPeer#bgp_asn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#id Ec2TransitGatewayConnectPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags Ec2TransitGatewayConnectPeer#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#tags_all Ec2TransitGatewayConnectPeer#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.timeouts"></a>

```python
timeouts: Ec2TransitGatewayConnectPeerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#timeouts Ec2TransitGatewayConnectPeer#timeouts}

---

##### `transit_gateway_address`<sup>Optional</sup> <a name="transit_gateway_address" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.transitGatewayAddress"></a>

```python
transit_gateway_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#transit_gateway_address Ec2TransitGatewayConnectPeer#transit_gateway_address}.

---

### Ec2TransitGatewayConnectPeerTimeouts <a name="Ec2TransitGatewayConnectPeerTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect_peer

ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#create Ec2TransitGatewayConnectPeer#create}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#delete Ec2TransitGatewayConnectPeer#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#create Ec2TransitGatewayConnectPeer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect_peer#delete Ec2TransitGatewayConnectPeer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayConnectPeerTimeoutsOutputReference <a name="Ec2TransitGatewayConnectPeerTimeoutsOutputReference" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect_peer

ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Ec2TransitGatewayConnectPeerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTimeouts">Ec2TransitGatewayConnectPeerTimeouts</a>, cdktf.IResolvable]

---



