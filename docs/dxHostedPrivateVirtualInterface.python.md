# `dxHostedPrivateVirtualInterface` Submodule <a name="`dxHostedPrivateVirtualInterface` Submodule" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedPrivateVirtualInterface <a name="DxHostedPrivateVirtualInterface" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface aws_dx_hosted_private_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_private_virtual_interface

dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_family: str,
  bgp_asn: typing.Union[int, float],
  connection_id: str,
  name: str,
  owner_account_id: str,
  vlan: typing.Union[int, float],
  amazon_address: str = None,
  bgp_auth_key: str = None,
  customer_address: str = None,
  id: str = None,
  mtu: typing.Union[int, float] = None,
  timeouts: DxHostedPrivateVirtualInterfaceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#address_family DxHostedPrivateVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#bgp_asn DxHostedPrivateVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#connection_id DxHostedPrivateVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#name DxHostedPrivateVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.ownerAccountId">owner_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#owner_account_id DxHostedPrivateVirtualInterface#owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#vlan DxHostedPrivateVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.amazonAddress">amazon_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#amazon_address DxHostedPrivateVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.bgpAuthKey">bgp_auth_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#bgp_auth_key DxHostedPrivateVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.customerAddress">customer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#customer_address DxHostedPrivateVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#id DxHostedPrivateVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#mtu DxHostedPrivateVirtualInterface#mtu}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.addressFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#address_family DxHostedPrivateVirtualInterface#address_family}.

---

##### `bgp_asn`<sup>Required</sup> <a name="bgp_asn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.bgpAsn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#bgp_asn DxHostedPrivateVirtualInterface#bgp_asn}.

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.connectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#connection_id DxHostedPrivateVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#name DxHostedPrivateVirtualInterface#name}.

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.ownerAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#owner_account_id DxHostedPrivateVirtualInterface#owner_account_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#vlan DxHostedPrivateVirtualInterface#vlan}.

---

##### `amazon_address`<sup>Optional</sup> <a name="amazon_address" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.amazonAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#amazon_address DxHostedPrivateVirtualInterface#amazon_address}.

---

##### `bgp_auth_key`<sup>Optional</sup> <a name="bgp_auth_key" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.bgpAuthKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#bgp_auth_key DxHostedPrivateVirtualInterface#bgp_auth_key}.

---

##### `customer_address`<sup>Optional</sup> <a name="customer_address" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.customerAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#customer_address DxHostedPrivateVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#id DxHostedPrivateVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.mtu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#mtu DxHostedPrivateVirtualInterface#mtu}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#timeouts DxHostedPrivateVirtualInterface#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetAmazonAddress">reset_amazon_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetBgpAuthKey">reset_bgp_auth_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetCustomerAddress">reset_customer_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetMtu">reset_mtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#create DxHostedPrivateVirtualInterface#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#delete DxHostedPrivateVirtualInterface#delete}.

---

##### `reset_amazon_address` <a name="reset_amazon_address" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetAmazonAddress"></a>

```python
def reset_amazon_address() -> None
```

##### `reset_bgp_auth_key` <a name="reset_bgp_auth_key" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetBgpAuthKey"></a>

```python
def reset_bgp_auth_key() -> None
```

##### `reset_customer_address` <a name="reset_customer_address" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetCustomerAddress"></a>

```python
def reset_customer_address() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mtu` <a name="reset_mtu" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetMtu"></a>

```python
def reset_mtu() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_private_virtual_interface

dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_private_virtual_interface

dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_private_virtual_interface

dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonSideAsn">amazon_side_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.awsDevice">aws_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.jumboFrameCapable">jumbo_frame_capable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference">DxHostedPrivateVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.addressFamilyInput">address_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonAddressInput">amazon_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAsnInput">bgp_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAuthKeyInput">bgp_auth_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.customerAddressInput">customer_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.mtuInput">mtu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.ownerAccountIdInput">owner_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.vlanInput">vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonAddress">amazon_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAuthKey">bgp_auth_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.customerAddress">customer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amazon_side_asn`<sup>Required</sup> <a name="amazon_side_asn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonSideAsn"></a>

```python
amazon_side_asn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `aws_device`<sup>Required</sup> <a name="aws_device" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.awsDevice"></a>

```python
aws_device: str
```

- *Type:* str

---

##### `jumbo_frame_capable`<sup>Required</sup> <a name="jumbo_frame_capable" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.jumboFrameCapable"></a>

```python
jumbo_frame_capable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.timeouts"></a>

```python
timeouts: DxHostedPrivateVirtualInterfaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference">DxHostedPrivateVirtualInterfaceTimeoutsOutputReference</a>

---

##### `address_family_input`<sup>Optional</sup> <a name="address_family_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.addressFamilyInput"></a>

```python
address_family_input: str
```

- *Type:* str

---

##### `amazon_address_input`<sup>Optional</sup> <a name="amazon_address_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonAddressInput"></a>

```python
amazon_address_input: str
```

- *Type:* str

---

##### `bgp_asn_input`<sup>Optional</sup> <a name="bgp_asn_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAsnInput"></a>

```python
bgp_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_auth_key_input`<sup>Optional</sup> <a name="bgp_auth_key_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAuthKeyInput"></a>

```python
bgp_auth_key_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `customer_address_input`<sup>Optional</sup> <a name="customer_address_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.customerAddressInput"></a>

```python
customer_address_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mtu_input`<sup>Optional</sup> <a name="mtu_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.mtuInput"></a>

```python
mtu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_account_id_input`<sup>Optional</sup> <a name="owner_account_id_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.ownerAccountIdInput"></a>

```python
owner_account_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DxHostedPrivateVirtualInterfaceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a>, cdktf.IResolvable]

---

##### `vlan_input`<sup>Optional</sup> <a name="vlan_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.vlanInput"></a>

```python
vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `amazon_address`<sup>Required</sup> <a name="amazon_address" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonAddress"></a>

```python
amazon_address: str
```

- *Type:* str

---

##### `bgp_asn`<sup>Required</sup> <a name="bgp_asn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAsn"></a>

```python
bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_auth_key`<sup>Required</sup> <a name="bgp_auth_key" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAuthKey"></a>

```python
bgp_auth_key: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `customer_address`<sup>Required</sup> <a name="customer_address" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.customerAddress"></a>

```python
customer_address: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedPrivateVirtualInterfaceConfig <a name="DxHostedPrivateVirtualInterfaceConfig" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_private_virtual_interface

dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_family: str,
  bgp_asn: typing.Union[int, float],
  connection_id: str,
  name: str,
  owner_account_id: str,
  vlan: typing.Union[int, float],
  amazon_address: str = None,
  bgp_auth_key: str = None,
  customer_address: str = None,
  id: str = None,
  mtu: typing.Union[int, float] = None,
  timeouts: DxHostedPrivateVirtualInterfaceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#address_family DxHostedPrivateVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#bgp_asn DxHostedPrivateVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#connection_id DxHostedPrivateVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#name DxHostedPrivateVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#owner_account_id DxHostedPrivateVirtualInterface#owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#vlan DxHostedPrivateVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.amazonAddress">amazon_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#amazon_address DxHostedPrivateVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.bgpAuthKey">bgp_auth_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#bgp_auth_key DxHostedPrivateVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.customerAddress">customer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#customer_address DxHostedPrivateVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#id DxHostedPrivateVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#mtu DxHostedPrivateVirtualInterface#mtu}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#address_family DxHostedPrivateVirtualInterface#address_family}.

---

##### `bgp_asn`<sup>Required</sup> <a name="bgp_asn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.bgpAsn"></a>

```python
bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#bgp_asn DxHostedPrivateVirtualInterface#bgp_asn}.

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#connection_id DxHostedPrivateVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#name DxHostedPrivateVirtualInterface#name}.

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#owner_account_id DxHostedPrivateVirtualInterface#owner_account_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#vlan DxHostedPrivateVirtualInterface#vlan}.

---

##### `amazon_address`<sup>Optional</sup> <a name="amazon_address" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.amazonAddress"></a>

```python
amazon_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#amazon_address DxHostedPrivateVirtualInterface#amazon_address}.

---

##### `bgp_auth_key`<sup>Optional</sup> <a name="bgp_auth_key" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.bgpAuthKey"></a>

```python
bgp_auth_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#bgp_auth_key DxHostedPrivateVirtualInterface#bgp_auth_key}.

---

##### `customer_address`<sup>Optional</sup> <a name="customer_address" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.customerAddress"></a>

```python
customer_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#customer_address DxHostedPrivateVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#id DxHostedPrivateVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#mtu DxHostedPrivateVirtualInterface#mtu}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.timeouts"></a>

```python
timeouts: DxHostedPrivateVirtualInterfaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#timeouts DxHostedPrivateVirtualInterface#timeouts}

---

### DxHostedPrivateVirtualInterfaceTimeouts <a name="DxHostedPrivateVirtualInterfaceTimeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_private_virtual_interface

dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#create DxHostedPrivateVirtualInterface#create}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#delete DxHostedPrivateVirtualInterface#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#create DxHostedPrivateVirtualInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#delete DxHostedPrivateVirtualInterface#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedPrivateVirtualInterfaceTimeoutsOutputReference <a name="DxHostedPrivateVirtualInterfaceTimeoutsOutputReference" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_private_virtual_interface

dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DxHostedPrivateVirtualInterfaceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a>, cdktf.IResolvable]

---



