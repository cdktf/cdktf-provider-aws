# `networkmanagerTransitGatewayConnectPeerAssociation` Submodule <a name="`networkmanagerTransitGatewayConnectPeerAssociation` Submodule" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerTransitGatewayConnectPeerAssociation <a name="NetworkmanagerTransitGatewayConnectPeerAssociation" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association aws_networkmanager_transit_gateway_connect_peer_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_connect_peer_association

networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  device_id: str,
  global_network_id: str,
  transit_gateway_connect_peer_arn: str,
  id: str = None,
  link_id: str = None,
  timeouts: NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#device_id NetworkmanagerTransitGatewayConnectPeerAssociation#device_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.globalNetworkId">global_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#global_network_id NetworkmanagerTransitGatewayConnectPeerAssociation#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.transitGatewayConnectPeerArn">transit_gateway_connect_peer_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#transit_gateway_connect_peer_arn NetworkmanagerTransitGatewayConnectPeerAssociation#transit_gateway_connect_peer_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#id NetworkmanagerTransitGatewayConnectPeerAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.linkId">link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#link_id NetworkmanagerTransitGatewayConnectPeerAssociation#link_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.deviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#device_id NetworkmanagerTransitGatewayConnectPeerAssociation#device_id}.

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.globalNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#global_network_id NetworkmanagerTransitGatewayConnectPeerAssociation#global_network_id}.

---

##### `transit_gateway_connect_peer_arn`<sup>Required</sup> <a name="transit_gateway_connect_peer_arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.transitGatewayConnectPeerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#transit_gateway_connect_peer_arn NetworkmanagerTransitGatewayConnectPeerAssociation#transit_gateway_connect_peer_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#id NetworkmanagerTransitGatewayConnectPeerAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `link_id`<sup>Optional</sup> <a name="link_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.linkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#link_id NetworkmanagerTransitGatewayConnectPeerAssociation#link_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#timeouts NetworkmanagerTransitGatewayConnectPeerAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetLinkId">reset_link_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#create NetworkmanagerTransitGatewayConnectPeerAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#delete NetworkmanagerTransitGatewayConnectPeerAssociation#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_link_id` <a name="reset_link_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetLinkId"></a>

```python
def reset_link_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_connect_peer_association

networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_connect_peer_association

networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_connect_peer_association

networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference">NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.deviceIdInput">device_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.globalNetworkIdInput">global_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.linkIdInput">link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.transitGatewayConnectPeerArnInput">transit_gateway_connect_peer_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.deviceId">device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.linkId">link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.transitGatewayConnectPeerArn">transit_gateway_connect_peer_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.timeouts"></a>

```python
timeouts: NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference">NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference</a>

---

##### `device_id_input`<sup>Optional</sup> <a name="device_id_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.deviceIdInput"></a>

```python
device_id_input: str
```

- *Type:* str

---

##### `global_network_id_input`<sup>Optional</sup> <a name="global_network_id_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.globalNetworkIdInput"></a>

```python
global_network_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `link_id_input`<sup>Optional</sup> <a name="link_id_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.linkIdInput"></a>

```python
link_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a>, cdktf.IResolvable]

---

##### `transit_gateway_connect_peer_arn_input`<sup>Optional</sup> <a name="transit_gateway_connect_peer_arn_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.transitGatewayConnectPeerArnInput"></a>

```python
transit_gateway_connect_peer_arn_input: str
```

- *Type:* str

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

---

##### `transit_gateway_connect_peer_arn`<sup>Required</sup> <a name="transit_gateway_connect_peer_arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.transitGatewayConnectPeerArn"></a>

```python
transit_gateway_connect_peer_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerTransitGatewayConnectPeerAssociationConfig <a name="NetworkmanagerTransitGatewayConnectPeerAssociationConfig" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_connect_peer_association

networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  device_id: str,
  global_network_id: str,
  transit_gateway_connect_peer_arn: str,
  id: str = None,
  link_id: str = None,
  timeouts: NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#device_id NetworkmanagerTransitGatewayConnectPeerAssociation#device_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#global_network_id NetworkmanagerTransitGatewayConnectPeerAssociation#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.transitGatewayConnectPeerArn">transit_gateway_connect_peer_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#transit_gateway_connect_peer_arn NetworkmanagerTransitGatewayConnectPeerAssociation#transit_gateway_connect_peer_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#id NetworkmanagerTransitGatewayConnectPeerAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.linkId">link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#link_id NetworkmanagerTransitGatewayConnectPeerAssociation#link_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#device_id NetworkmanagerTransitGatewayConnectPeerAssociation#device_id}.

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#global_network_id NetworkmanagerTransitGatewayConnectPeerAssociation#global_network_id}.

---

##### `transit_gateway_connect_peer_arn`<sup>Required</sup> <a name="transit_gateway_connect_peer_arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.transitGatewayConnectPeerArn"></a>

```python
transit_gateway_connect_peer_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#transit_gateway_connect_peer_arn NetworkmanagerTransitGatewayConnectPeerAssociation#transit_gateway_connect_peer_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#id NetworkmanagerTransitGatewayConnectPeerAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `link_id`<sup>Optional</sup> <a name="link_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#link_id NetworkmanagerTransitGatewayConnectPeerAssociation#link_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationConfig.property.timeouts"></a>

```python
timeouts: NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#timeouts NetworkmanagerTransitGatewayConnectPeerAssociation#timeouts}

---

### NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts <a name="NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_connect_peer_association

networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#create NetworkmanagerTransitGatewayConnectPeerAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#delete NetworkmanagerTransitGatewayConnectPeerAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#create NetworkmanagerTransitGatewayConnectPeerAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_connect_peer_association#delete NetworkmanagerTransitGatewayConnectPeerAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference <a name="NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_connect_peer_association

networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerTransitGatewayConnectPeerAssociation.NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts">NetworkmanagerTransitGatewayConnectPeerAssociationTimeouts</a>, cdktf.IResolvable]

---



