# `dxPrivateVirtualInterface` Submodule <a name="`dxPrivateVirtualInterface` Submodule" id="@cdktf/provider-aws.dxPrivateVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxPrivateVirtualInterface <a name="DxPrivateVirtualInterface" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface aws_dx_private_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_private_virtual_interface.DxPrivateVirtualInterface;

DxPrivateVirtualInterface.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .addressFamily(java.lang.String)
    .bgpAsn(java.lang.Number)
    .connectionId(java.lang.String)
    .name(java.lang.String)
    .vlan(java.lang.Number)
//  .amazonAddress(java.lang.String)
//  .bgpAuthKey(java.lang.String)
//  .customerAddress(java.lang.String)
//  .dxGatewayId(java.lang.String)
//  .id(java.lang.String)
//  .mtu(java.lang.Number)
//  .sitelinkEnabled(java.lang.Boolean)
//  .sitelinkEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DxPrivateVirtualInterfaceTimeouts)
//  .vpnGatewayId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#address_family DxPrivateVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#bgp_asn DxPrivateVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#connection_id DxPrivateVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#name DxPrivateVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#vlan DxPrivateVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#amazon_address DxPrivateVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#bgp_auth_key DxPrivateVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#customer_address DxPrivateVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#dx_gateway_id DxPrivateVirtualInterface#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#id DxPrivateVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.mtu">mtu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#mtu DxPrivateVirtualInterface#mtu}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.sitelinkEnabled">sitelinkEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#sitelink_enabled DxPrivateVirtualInterface#sitelink_enabled}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#tags DxPrivateVirtualInterface#tags}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#tags_all DxPrivateVirtualInterface#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts">DxPrivateVirtualInterfaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.vpnGatewayId">vpnGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#vpn_gateway_id DxPrivateVirtualInterface#vpn_gateway_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.addressFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#address_family DxPrivateVirtualInterface#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.bgpAsn"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#bgp_asn DxPrivateVirtualInterface#bgp_asn}.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#connection_id DxPrivateVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#name DxPrivateVirtualInterface#name}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#vlan DxPrivateVirtualInterface#vlan}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.amazonAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#amazon_address DxPrivateVirtualInterface#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.bgpAuthKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#bgp_auth_key DxPrivateVirtualInterface#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.customerAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#customer_address DxPrivateVirtualInterface#customer_address}.

---

##### `dxGatewayId`<sup>Optional</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.dxGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#dx_gateway_id DxPrivateVirtualInterface#dx_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#id DxPrivateVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.mtu"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#mtu DxPrivateVirtualInterface#mtu}.

---

##### `sitelinkEnabled`<sup>Optional</sup> <a name="sitelinkEnabled" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.sitelinkEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#sitelink_enabled DxPrivateVirtualInterface#sitelink_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#tags DxPrivateVirtualInterface#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#tags_all DxPrivateVirtualInterface#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts">DxPrivateVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#timeouts DxPrivateVirtualInterface#timeouts}

---

##### `vpnGatewayId`<sup>Optional</sup> <a name="vpnGatewayId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.Initializer.parameter.vpnGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#vpn_gateway_id DxPrivateVirtualInterface#vpn_gateway_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetBgpAuthKey">resetBgpAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetDxGatewayId">resetDxGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetSitelinkEnabled">resetSitelinkEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetVpnGatewayId">resetVpnGatewayId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.putTimeouts"></a>

```java
public void putTimeouts(DxPrivateVirtualInterfaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts">DxPrivateVirtualInterfaceTimeouts</a>

---

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetAmazonAddress"></a>

```java
public void resetAmazonAddress()
```

##### `resetBgpAuthKey` <a name="resetBgpAuthKey" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetBgpAuthKey"></a>

```java
public void resetBgpAuthKey()
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetCustomerAddress"></a>

```java
public void resetCustomerAddress()
```

##### `resetDxGatewayId` <a name="resetDxGatewayId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetDxGatewayId"></a>

```java
public void resetDxGatewayId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetId"></a>

```java
public void resetId()
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetMtu"></a>

```java
public void resetMtu()
```

##### `resetSitelinkEnabled` <a name="resetSitelinkEnabled" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetSitelinkEnabled"></a>

```java
public void resetSitelinkEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpnGatewayId` <a name="resetVpnGatewayId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.resetVpnGatewayId"></a>

```java
public void resetVpnGatewayId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_private_virtual_interface.DxPrivateVirtualInterface;

DxPrivateVirtualInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_private_virtual_interface.DxPrivateVirtualInterface;

DxPrivateVirtualInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_private_virtual_interface.DxPrivateVirtualInterface;

DxPrivateVirtualInterface.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.amazonSideAsn">amazonSideAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.awsDevice">awsDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.jumboFrameCapable">jumboFrameCapable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference">DxPrivateVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.addressFamilyInput">addressFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.amazonAddressInput">amazonAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.bgpAsnInput">bgpAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.bgpAuthKeyInput">bgpAuthKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.customerAddressInput">customerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.dxGatewayIdInput">dxGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.mtuInput">mtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.sitelinkEnabledInput">sitelinkEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts">DxPrivateVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.vpnGatewayIdInput">vpnGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.sitelinkEnabled">sitelinkEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.vpnGatewayId">vpnGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.amazonSideAsn"></a>

```java
public java.lang.String getAmazonSideAsn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `awsDevice`<sup>Required</sup> <a name="awsDevice" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.awsDevice"></a>

```java
public java.lang.String getAwsDevice();
```

- *Type:* java.lang.String

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="jumboFrameCapable" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.jumboFrameCapable"></a>

```java
public IResolvable getJumboFrameCapable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.timeouts"></a>

```java
public DxPrivateVirtualInterfaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference">DxPrivateVirtualInterfaceTimeoutsOutputReference</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.addressFamilyInput"></a>

```java
public java.lang.String getAddressFamilyInput();
```

- *Type:* java.lang.String

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.amazonAddressInput"></a>

```java
public java.lang.String getAmazonAddressInput();
```

- *Type:* java.lang.String

---

##### `bgpAsnInput`<sup>Optional</sup> <a name="bgpAsnInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.bgpAsnInput"></a>

```java
public java.lang.Number getBgpAsnInput();
```

- *Type:* java.lang.Number

---

##### `bgpAuthKeyInput`<sup>Optional</sup> <a name="bgpAuthKeyInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.bgpAuthKeyInput"></a>

```java
public java.lang.String getBgpAuthKeyInput();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.customerAddressInput"></a>

```java
public java.lang.String getCustomerAddressInput();
```

- *Type:* java.lang.String

---

##### `dxGatewayIdInput`<sup>Optional</sup> <a name="dxGatewayIdInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.dxGatewayIdInput"></a>

```java
public java.lang.String getDxGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.mtuInput"></a>

```java
public java.lang.Number getMtuInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sitelinkEnabledInput`<sup>Optional</sup> <a name="sitelinkEnabledInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.sitelinkEnabledInput"></a>

```java
public java.lang.Object getSitelinkEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts">DxPrivateVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.vlanInput"></a>

```java
public java.lang.Number getVlanInput();
```

- *Type:* java.lang.Number

---

##### `vpnGatewayIdInput`<sup>Optional</sup> <a name="vpnGatewayIdInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.vpnGatewayIdInput"></a>

```java
public java.lang.String getVpnGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.bgpAsn"></a>

```java
public java.lang.Number getBgpAsn();
```

- *Type:* java.lang.Number

---

##### `bgpAuthKey`<sup>Required</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.bgpAuthKey"></a>

```java
public java.lang.String getBgpAuthKey();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.dxGatewayId"></a>

```java
public java.lang.String getDxGatewayId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sitelinkEnabled`<sup>Required</sup> <a name="sitelinkEnabled" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.sitelinkEnabled"></a>

```java
public java.lang.Object getSitelinkEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.vpnGatewayId"></a>

```java
public java.lang.String getVpnGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DxPrivateVirtualInterfaceConfig <a name="DxPrivateVirtualInterfaceConfig" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_private_virtual_interface.DxPrivateVirtualInterfaceConfig;

DxPrivateVirtualInterfaceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .addressFamily(java.lang.String)
    .bgpAsn(java.lang.Number)
    .connectionId(java.lang.String)
    .name(java.lang.String)
    .vlan(java.lang.Number)
//  .amazonAddress(java.lang.String)
//  .bgpAuthKey(java.lang.String)
//  .customerAddress(java.lang.String)
//  .dxGatewayId(java.lang.String)
//  .id(java.lang.String)
//  .mtu(java.lang.Number)
//  .sitelinkEnabled(java.lang.Boolean)
//  .sitelinkEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DxPrivateVirtualInterfaceTimeouts)
//  .vpnGatewayId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#address_family DxPrivateVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#bgp_asn DxPrivateVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#connection_id DxPrivateVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#name DxPrivateVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#vlan DxPrivateVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#amazon_address DxPrivateVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#bgp_auth_key DxPrivateVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#customer_address DxPrivateVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#dx_gateway_id DxPrivateVirtualInterface#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#id DxPrivateVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#mtu DxPrivateVirtualInterface#mtu}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.sitelinkEnabled">sitelinkEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#sitelink_enabled DxPrivateVirtualInterface#sitelink_enabled}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#tags DxPrivateVirtualInterface#tags}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#tags_all DxPrivateVirtualInterface#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts">DxPrivateVirtualInterfaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.vpnGatewayId">vpnGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#vpn_gateway_id DxPrivateVirtualInterface#vpn_gateway_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#address_family DxPrivateVirtualInterface#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.bgpAsn"></a>

```java
public java.lang.Number getBgpAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#bgp_asn DxPrivateVirtualInterface#bgp_asn}.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#connection_id DxPrivateVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#name DxPrivateVirtualInterface#name}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#vlan DxPrivateVirtualInterface#vlan}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#amazon_address DxPrivateVirtualInterface#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.bgpAuthKey"></a>

```java
public java.lang.String getBgpAuthKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#bgp_auth_key DxPrivateVirtualInterface#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#customer_address DxPrivateVirtualInterface#customer_address}.

---

##### `dxGatewayId`<sup>Optional</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.dxGatewayId"></a>

```java
public java.lang.String getDxGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#dx_gateway_id DxPrivateVirtualInterface#dx_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#id DxPrivateVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#mtu DxPrivateVirtualInterface#mtu}.

---

##### `sitelinkEnabled`<sup>Optional</sup> <a name="sitelinkEnabled" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.sitelinkEnabled"></a>

```java
public java.lang.Object getSitelinkEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#sitelink_enabled DxPrivateVirtualInterface#sitelink_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#tags DxPrivateVirtualInterface#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#tags_all DxPrivateVirtualInterface#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.timeouts"></a>

```java
public DxPrivateVirtualInterfaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts">DxPrivateVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#timeouts DxPrivateVirtualInterface#timeouts}

---

##### `vpnGatewayId`<sup>Optional</sup> <a name="vpnGatewayId" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceConfig.property.vpnGatewayId"></a>

```java
public java.lang.String getVpnGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#vpn_gateway_id DxPrivateVirtualInterface#vpn_gateway_id}.

---

### DxPrivateVirtualInterfaceTimeouts <a name="DxPrivateVirtualInterfaceTimeouts" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_private_virtual_interface.DxPrivateVirtualInterfaceTimeouts;

DxPrivateVirtualInterfaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#create DxPrivateVirtualInterface#create}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#delete DxPrivateVirtualInterface#delete}. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#update DxPrivateVirtualInterface#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#create DxPrivateVirtualInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#delete DxPrivateVirtualInterface#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface#update DxPrivateVirtualInterface#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxPrivateVirtualInterfaceTimeoutsOutputReference <a name="DxPrivateVirtualInterfaceTimeoutsOutputReference" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_private_virtual_interface.DxPrivateVirtualInterfaceTimeoutsOutputReference;

new DxPrivateVirtualInterfaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts">DxPrivateVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dxPrivateVirtualInterface.DxPrivateVirtualInterfaceTimeouts">DxPrivateVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



