# `dxTransitVirtualInterface` Submodule <a name="`dxTransitVirtualInterface` Submodule" id="@cdktf/provider-aws.dxTransitVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxTransitVirtualInterface <a name="DxTransitVirtualInterface" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface aws_dx_transit_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_transit_virtual_interface.DxTransitVirtualInterface;

DxTransitVirtualInterface.Builder.create(Construct scope, java.lang.String id)
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
    .dxGatewayId(java.lang.String)
    .name(java.lang.String)
    .vlan(java.lang.Number)
//  .amazonAddress(java.lang.String)
//  .bgpAuthKey(java.lang.String)
//  .customerAddress(java.lang.String)
//  .id(java.lang.String)
//  .mtu(java.lang.Number)
//  .sitelinkEnabled(java.lang.Boolean)
//  .sitelinkEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DxTransitVirtualInterfaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#address_family DxTransitVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_asn DxTransitVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#connection_id DxTransitVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#name DxTransitVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#vlan DxTransitVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#amazon_address DxTransitVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#customer_address DxTransitVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#id DxTransitVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.mtu">mtu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#mtu DxTransitVirtualInterface#mtu}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.sitelinkEnabled">sitelinkEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#sitelink_enabled DxTransitVirtualInterface#sitelink_enabled}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags DxTransitVirtualInterface#tags}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags_all DxTransitVirtualInterface#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.addressFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#address_family DxTransitVirtualInterface#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.bgpAsn"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_asn DxTransitVirtualInterface#bgp_asn}.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#connection_id DxTransitVirtualInterface#connection_id}.

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.dxGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#name DxTransitVirtualInterface#name}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#vlan DxTransitVirtualInterface#vlan}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.amazonAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#amazon_address DxTransitVirtualInterface#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.bgpAuthKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.customerAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#customer_address DxTransitVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#id DxTransitVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.mtu"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#mtu DxTransitVirtualInterface#mtu}.

---

##### `sitelinkEnabled`<sup>Optional</sup> <a name="sitelinkEnabled" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.sitelinkEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#sitelink_enabled DxTransitVirtualInterface#sitelink_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags DxTransitVirtualInterface#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags_all DxTransitVirtualInterface#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#timeouts DxTransitVirtualInterface#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetBgpAuthKey">resetBgpAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetSitelinkEnabled">resetSitelinkEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts"></a>

```java
public void putTimeouts(DxTransitVirtualInterfaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a>

---

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetAmazonAddress"></a>

```java
public void resetAmazonAddress()
```

##### `resetBgpAuthKey` <a name="resetBgpAuthKey" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetBgpAuthKey"></a>

```java
public void resetBgpAuthKey()
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetCustomerAddress"></a>

```java
public void resetCustomerAddress()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetId"></a>

```java
public void resetId()
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetMtu"></a>

```java
public void resetMtu()
```

##### `resetSitelinkEnabled` <a name="resetSitelinkEnabled" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetSitelinkEnabled"></a>

```java
public void resetSitelinkEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_transit_virtual_interface.DxTransitVirtualInterface;

DxTransitVirtualInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_transit_virtual_interface.DxTransitVirtualInterface;

DxTransitVirtualInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_transit_virtual_interface.DxTransitVirtualInterface;

DxTransitVirtualInterface.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonSideAsn">amazonSideAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.awsDevice">awsDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.jumboFrameCapable">jumboFrameCapable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference">DxTransitVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamilyInput">addressFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddressInput">amazonAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsnInput">bgpAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKeyInput">bgpAuthKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddressInput">customerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayIdInput">dxGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtuInput">mtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabledInput">sitelinkEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabled">sitelinkEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonSideAsn"></a>

```java
public java.lang.String getAmazonSideAsn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `awsDevice`<sup>Required</sup> <a name="awsDevice" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.awsDevice"></a>

```java
public java.lang.String getAwsDevice();
```

- *Type:* java.lang.String

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="jumboFrameCapable" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.jumboFrameCapable"></a>

```java
public IResolvable getJumboFrameCapable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeouts"></a>

```java
public DxTransitVirtualInterfaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference">DxTransitVirtualInterfaceTimeoutsOutputReference</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamilyInput"></a>

```java
public java.lang.String getAddressFamilyInput();
```

- *Type:* java.lang.String

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddressInput"></a>

```java
public java.lang.String getAmazonAddressInput();
```

- *Type:* java.lang.String

---

##### `bgpAsnInput`<sup>Optional</sup> <a name="bgpAsnInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsnInput"></a>

```java
public java.lang.Number getBgpAsnInput();
```

- *Type:* java.lang.Number

---

##### `bgpAuthKeyInput`<sup>Optional</sup> <a name="bgpAuthKeyInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKeyInput"></a>

```java
public java.lang.String getBgpAuthKeyInput();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddressInput"></a>

```java
public java.lang.String getCustomerAddressInput();
```

- *Type:* java.lang.String

---

##### `dxGatewayIdInput`<sup>Optional</sup> <a name="dxGatewayIdInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayIdInput"></a>

```java
public java.lang.String getDxGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtuInput"></a>

```java
public java.lang.Number getMtuInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sitelinkEnabledInput`<sup>Optional</sup> <a name="sitelinkEnabledInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabledInput"></a>

```java
public java.lang.Object getSitelinkEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlanInput"></a>

```java
public java.lang.Number getVlanInput();
```

- *Type:* java.lang.Number

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsn"></a>

```java
public java.lang.Number getBgpAsn();
```

- *Type:* java.lang.Number

---

##### `bgpAuthKey`<sup>Required</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKey"></a>

```java
public java.lang.String getBgpAuthKey();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayId"></a>

```java
public java.lang.String getDxGatewayId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sitelinkEnabled`<sup>Required</sup> <a name="sitelinkEnabled" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabled"></a>

```java
public java.lang.Object getSitelinkEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DxTransitVirtualInterfaceConfig <a name="DxTransitVirtualInterfaceConfig" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_transit_virtual_interface.DxTransitVirtualInterfaceConfig;

DxTransitVirtualInterfaceConfig.builder()
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
    .dxGatewayId(java.lang.String)
    .name(java.lang.String)
    .vlan(java.lang.Number)
//  .amazonAddress(java.lang.String)
//  .bgpAuthKey(java.lang.String)
//  .customerAddress(java.lang.String)
//  .id(java.lang.String)
//  .mtu(java.lang.Number)
//  .sitelinkEnabled(java.lang.Boolean)
//  .sitelinkEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DxTransitVirtualInterfaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#address_family DxTransitVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_asn DxTransitVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#connection_id DxTransitVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#name DxTransitVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#vlan DxTransitVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#amazon_address DxTransitVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#customer_address DxTransitVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#id DxTransitVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#mtu DxTransitVirtualInterface#mtu}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.sitelinkEnabled">sitelinkEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#sitelink_enabled DxTransitVirtualInterface#sitelink_enabled}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags DxTransitVirtualInterface#tags}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags_all DxTransitVirtualInterface#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#address_family DxTransitVirtualInterface#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAsn"></a>

```java
public java.lang.Number getBgpAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_asn DxTransitVirtualInterface#bgp_asn}.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#connection_id DxTransitVirtualInterface#connection_id}.

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dxGatewayId"></a>

```java
public java.lang.String getDxGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#name DxTransitVirtualInterface#name}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#vlan DxTransitVirtualInterface#vlan}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#amazon_address DxTransitVirtualInterface#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAuthKey"></a>

```java
public java.lang.String getBgpAuthKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#customer_address DxTransitVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#id DxTransitVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#mtu DxTransitVirtualInterface#mtu}.

---

##### `sitelinkEnabled`<sup>Optional</sup> <a name="sitelinkEnabled" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.sitelinkEnabled"></a>

```java
public java.lang.Object getSitelinkEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#sitelink_enabled DxTransitVirtualInterface#sitelink_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags DxTransitVirtualInterface#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags_all DxTransitVirtualInterface#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.timeouts"></a>

```java
public DxTransitVirtualInterfaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#timeouts DxTransitVirtualInterface#timeouts}

---

### DxTransitVirtualInterfaceTimeouts <a name="DxTransitVirtualInterfaceTimeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_transit_virtual_interface.DxTransitVirtualInterfaceTimeouts;

DxTransitVirtualInterfaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#create DxTransitVirtualInterface#create}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#delete DxTransitVirtualInterface#delete}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#update DxTransitVirtualInterface#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#create DxTransitVirtualInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#delete DxTransitVirtualInterface#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#update DxTransitVirtualInterface#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxTransitVirtualInterfaceTimeoutsOutputReference <a name="DxTransitVirtualInterfaceTimeoutsOutputReference" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_transit_virtual_interface.DxTransitVirtualInterfaceTimeoutsOutputReference;

new DxTransitVirtualInterfaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



