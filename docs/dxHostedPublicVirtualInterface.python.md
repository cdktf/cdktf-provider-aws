# `dxHostedPublicVirtualInterface` Submodule <a name="`dxHostedPublicVirtualInterface` Submodule" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedPublicVirtualInterface <a name="DxHostedPublicVirtualInterface" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface aws_dx_hosted_public_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface

dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface(
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
  route_filter_prefixes: typing.List[str],
  vlan: typing.Union[int, float],
  amazon_address: str = None,
  bgp_auth_key: str = None,
  customer_address: str = None,
  id: str = None,
  timeouts: DxHostedPublicVirtualInterfaceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#address_family DxHostedPublicVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#bgp_asn DxHostedPublicVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#connection_id DxHostedPublicVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#name DxHostedPublicVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.ownerAccountId">owner_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#owner_account_id DxHostedPublicVirtualInterface#owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.routeFilterPrefixes">route_filter_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#route_filter_prefixes DxHostedPublicVirtualInterface#route_filter_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#vlan DxHostedPublicVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.amazonAddress">amazon_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#amazon_address DxHostedPublicVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.bgpAuthKey">bgp_auth_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#bgp_auth_key DxHostedPublicVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.customerAddress">customer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#customer_address DxHostedPublicVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#id DxHostedPublicVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts">DxHostedPublicVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.addressFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#address_family DxHostedPublicVirtualInterface#address_family}.

---

##### `bgp_asn`<sup>Required</sup> <a name="bgp_asn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.bgpAsn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#bgp_asn DxHostedPublicVirtualInterface#bgp_asn}.

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.connectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#connection_id DxHostedPublicVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#name DxHostedPublicVirtualInterface#name}.

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.ownerAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#owner_account_id DxHostedPublicVirtualInterface#owner_account_id}.

---

##### `route_filter_prefixes`<sup>Required</sup> <a name="route_filter_prefixes" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.routeFilterPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#route_filter_prefixes DxHostedPublicVirtualInterface#route_filter_prefixes}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#vlan DxHostedPublicVirtualInterface#vlan}.

---

##### `amazon_address`<sup>Optional</sup> <a name="amazon_address" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.amazonAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#amazon_address DxHostedPublicVirtualInterface#amazon_address}.

---

##### `bgp_auth_key`<sup>Optional</sup> <a name="bgp_auth_key" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.bgpAuthKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#bgp_auth_key DxHostedPublicVirtualInterface#bgp_auth_key}.

---

##### `customer_address`<sup>Optional</sup> <a name="customer_address" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.customerAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#customer_address DxHostedPublicVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#id DxHostedPublicVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts">DxHostedPublicVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#timeouts DxHostedPublicVirtualInterface#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetAmazonAddress">reset_amazon_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetBgpAuthKey">reset_bgp_auth_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetCustomerAddress">reset_customer_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#create DxHostedPublicVirtualInterface#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#delete DxHostedPublicVirtualInterface#delete}.

---

##### `reset_amazon_address` <a name="reset_amazon_address" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetAmazonAddress"></a>

```python
def reset_amazon_address() -> None
```

##### `reset_bgp_auth_key` <a name="reset_bgp_auth_key" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetBgpAuthKey"></a>

```python
def reset_bgp_auth_key() -> None
```

##### `reset_customer_address` <a name="reset_customer_address" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetCustomerAddress"></a>

```python
def reset_customer_address() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface

dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface

dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface

dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.amazonSideAsn">amazon_side_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.awsDevice">aws_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference">DxHostedPublicVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.addressFamilyInput">address_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.amazonAddressInput">amazon_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAsnInput">bgp_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAuthKeyInput">bgp_auth_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.customerAddressInput">customer_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.ownerAccountIdInput">owner_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.routeFilterPrefixesInput">route_filter_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts">DxHostedPublicVirtualInterfaceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.vlanInput">vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.amazonAddress">amazon_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAuthKey">bgp_auth_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.customerAddress">customer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.routeFilterPrefixes">route_filter_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amazon_side_asn`<sup>Required</sup> <a name="amazon_side_asn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.amazonSideAsn"></a>

```python
amazon_side_asn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `aws_device`<sup>Required</sup> <a name="aws_device" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.awsDevice"></a>

```python
aws_device: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.timeouts"></a>

```python
timeouts: DxHostedPublicVirtualInterfaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference">DxHostedPublicVirtualInterfaceTimeoutsOutputReference</a>

---

##### `address_family_input`<sup>Optional</sup> <a name="address_family_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.addressFamilyInput"></a>

```python
address_family_input: str
```

- *Type:* str

---

##### `amazon_address_input`<sup>Optional</sup> <a name="amazon_address_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.amazonAddressInput"></a>

```python
amazon_address_input: str
```

- *Type:* str

---

##### `bgp_asn_input`<sup>Optional</sup> <a name="bgp_asn_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAsnInput"></a>

```python
bgp_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_auth_key_input`<sup>Optional</sup> <a name="bgp_auth_key_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAuthKeyInput"></a>

```python
bgp_auth_key_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `customer_address_input`<sup>Optional</sup> <a name="customer_address_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.customerAddressInput"></a>

```python
customer_address_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_account_id_input`<sup>Optional</sup> <a name="owner_account_id_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.ownerAccountIdInput"></a>

```python
owner_account_id_input: str
```

- *Type:* str

---

##### `route_filter_prefixes_input`<sup>Optional</sup> <a name="route_filter_prefixes_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.routeFilterPrefixesInput"></a>

```python
route_filter_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DxHostedPublicVirtualInterfaceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts">DxHostedPublicVirtualInterfaceTimeouts</a>, cdktf.IResolvable]

---

##### `vlan_input`<sup>Optional</sup> <a name="vlan_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.vlanInput"></a>

```python
vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `amazon_address`<sup>Required</sup> <a name="amazon_address" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.amazonAddress"></a>

```python
amazon_address: str
```

- *Type:* str

---

##### `bgp_asn`<sup>Required</sup> <a name="bgp_asn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAsn"></a>

```python
bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_auth_key`<sup>Required</sup> <a name="bgp_auth_key" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAuthKey"></a>

```python
bgp_auth_key: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `customer_address`<sup>Required</sup> <a name="customer_address" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.customerAddress"></a>

```python
customer_address: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `route_filter_prefixes`<sup>Required</sup> <a name="route_filter_prefixes" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.routeFilterPrefixes"></a>

```python
route_filter_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedPublicVirtualInterfaceConfig <a name="DxHostedPublicVirtualInterfaceConfig" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface

dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig(
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
  route_filter_prefixes: typing.List[str],
  vlan: typing.Union[int, float],
  amazon_address: str = None,
  bgp_auth_key: str = None,
  customer_address: str = None,
  id: str = None,
  timeouts: DxHostedPublicVirtualInterfaceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#address_family DxHostedPublicVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#bgp_asn DxHostedPublicVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#connection_id DxHostedPublicVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#name DxHostedPublicVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#owner_account_id DxHostedPublicVirtualInterface#owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.routeFilterPrefixes">route_filter_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#route_filter_prefixes DxHostedPublicVirtualInterface#route_filter_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#vlan DxHostedPublicVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.amazonAddress">amazon_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#amazon_address DxHostedPublicVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.bgpAuthKey">bgp_auth_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#bgp_auth_key DxHostedPublicVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.customerAddress">customer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#customer_address DxHostedPublicVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#id DxHostedPublicVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts">DxHostedPublicVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#address_family DxHostedPublicVirtualInterface#address_family}.

---

##### `bgp_asn`<sup>Required</sup> <a name="bgp_asn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.bgpAsn"></a>

```python
bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#bgp_asn DxHostedPublicVirtualInterface#bgp_asn}.

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#connection_id DxHostedPublicVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#name DxHostedPublicVirtualInterface#name}.

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#owner_account_id DxHostedPublicVirtualInterface#owner_account_id}.

---

##### `route_filter_prefixes`<sup>Required</sup> <a name="route_filter_prefixes" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.routeFilterPrefixes"></a>

```python
route_filter_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#route_filter_prefixes DxHostedPublicVirtualInterface#route_filter_prefixes}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#vlan DxHostedPublicVirtualInterface#vlan}.

---

##### `amazon_address`<sup>Optional</sup> <a name="amazon_address" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.amazonAddress"></a>

```python
amazon_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#amazon_address DxHostedPublicVirtualInterface#amazon_address}.

---

##### `bgp_auth_key`<sup>Optional</sup> <a name="bgp_auth_key" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.bgpAuthKey"></a>

```python
bgp_auth_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#bgp_auth_key DxHostedPublicVirtualInterface#bgp_auth_key}.

---

##### `customer_address`<sup>Optional</sup> <a name="customer_address" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.customerAddress"></a>

```python
customer_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#customer_address DxHostedPublicVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#id DxHostedPublicVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.timeouts"></a>

```python
timeouts: DxHostedPublicVirtualInterfaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts">DxHostedPublicVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#timeouts DxHostedPublicVirtualInterface#timeouts}

---

### DxHostedPublicVirtualInterfaceTimeouts <a name="DxHostedPublicVirtualInterfaceTimeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface

dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#create DxHostedPublicVirtualInterface#create}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#delete DxHostedPublicVirtualInterface#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#create DxHostedPublicVirtualInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#delete DxHostedPublicVirtualInterface#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedPublicVirtualInterfaceTimeoutsOutputReference <a name="DxHostedPublicVirtualInterfaceTimeoutsOutputReference" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface

dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts">DxHostedPublicVirtualInterfaceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DxHostedPublicVirtualInterfaceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts">DxHostedPublicVirtualInterfaceTimeouts</a>, cdktf.IResolvable]

---



