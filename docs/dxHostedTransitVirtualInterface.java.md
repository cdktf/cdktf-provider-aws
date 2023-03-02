# `dxHostedTransitVirtualInterface` Submodule <a name="`dxHostedTransitVirtualInterface` Submodule" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedTransitVirtualInterface <a name="DxHostedTransitVirtualInterface" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface aws_dx_hosted_transit_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface.DxHostedTransitVirtualInterface;

DxHostedTransitVirtualInterface.Builder.create(Construct scope, java.lang.String id)
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
    .ownerAccountId(java.lang.String)
    .vlan(java.lang.Number)
//  .amazonAddress(java.lang.String)
//  .bgpAuthKey(java.lang.String)
//  .customerAddress(java.lang.String)
//  .id(java.lang.String)
//  .mtu(java.lang.Number)
//  .timeouts(DxHostedTransitVirtualInterfaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#address_family DxHostedTransitVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#bgp_asn DxHostedTransitVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#connection_id DxHostedTransitVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#name DxHostedTransitVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.ownerAccountId">ownerAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#owner_account_id DxHostedTransitVirtualInterface#owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#vlan DxHostedTransitVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#amazon_address DxHostedTransitVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#bgp_auth_key DxHostedTransitVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#customer_address DxHostedTransitVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#id DxHostedTransitVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.mtu">mtu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#mtu DxHostedTransitVirtualInterface#mtu}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts">DxHostedTransitVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.addressFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#address_family DxHostedTransitVirtualInterface#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.bgpAsn"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#bgp_asn DxHostedTransitVirtualInterface#bgp_asn}.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#connection_id DxHostedTransitVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#name DxHostedTransitVirtualInterface#name}.

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.ownerAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#owner_account_id DxHostedTransitVirtualInterface#owner_account_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#vlan DxHostedTransitVirtualInterface#vlan}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.amazonAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#amazon_address DxHostedTransitVirtualInterface#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.bgpAuthKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#bgp_auth_key DxHostedTransitVirtualInterface#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.customerAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#customer_address DxHostedTransitVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#id DxHostedTransitVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.mtu"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#mtu DxHostedTransitVirtualInterface#mtu}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts">DxHostedTransitVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#timeouts DxHostedTransitVirtualInterface#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetBgpAuthKey">resetBgpAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.putTimeouts"></a>

```java
public void putTimeouts(DxHostedTransitVirtualInterfaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts">DxHostedTransitVirtualInterfaceTimeouts</a>

---

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetAmazonAddress"></a>

```java
public void resetAmazonAddress()
```

##### `resetBgpAuthKey` <a name="resetBgpAuthKey" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetBgpAuthKey"></a>

```java
public void resetBgpAuthKey()
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetCustomerAddress"></a>

```java
public void resetCustomerAddress()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetId"></a>

```java
public void resetId()
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetMtu"></a>

```java
public void resetMtu()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface.DxHostedTransitVirtualInterface;

DxHostedTransitVirtualInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface.DxHostedTransitVirtualInterface;

DxHostedTransitVirtualInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface.DxHostedTransitVirtualInterface;

DxHostedTransitVirtualInterface.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.amazonSideAsn">amazonSideAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.awsDevice">awsDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.jumboFrameCapable">jumboFrameCapable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference">DxHostedTransitVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.addressFamilyInput">addressFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.amazonAddressInput">amazonAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.bgpAsnInput">bgpAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.bgpAuthKeyInput">bgpAuthKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.customerAddressInput">customerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.mtuInput">mtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.ownerAccountIdInput">ownerAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts">DxHostedTransitVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.ownerAccountId">ownerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.amazonSideAsn"></a>

```java
public java.lang.String getAmazonSideAsn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `awsDevice`<sup>Required</sup> <a name="awsDevice" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.awsDevice"></a>

```java
public java.lang.String getAwsDevice();
```

- *Type:* java.lang.String

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="jumboFrameCapable" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.jumboFrameCapable"></a>

```java
public IResolvable getJumboFrameCapable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.timeouts"></a>

```java
public DxHostedTransitVirtualInterfaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference">DxHostedTransitVirtualInterfaceTimeoutsOutputReference</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.addressFamilyInput"></a>

```java
public java.lang.String getAddressFamilyInput();
```

- *Type:* java.lang.String

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.amazonAddressInput"></a>

```java
public java.lang.String getAmazonAddressInput();
```

- *Type:* java.lang.String

---

##### `bgpAsnInput`<sup>Optional</sup> <a name="bgpAsnInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.bgpAsnInput"></a>

```java
public java.lang.Number getBgpAsnInput();
```

- *Type:* java.lang.Number

---

##### `bgpAuthKeyInput`<sup>Optional</sup> <a name="bgpAuthKeyInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.bgpAuthKeyInput"></a>

```java
public java.lang.String getBgpAuthKeyInput();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.customerAddressInput"></a>

```java
public java.lang.String getCustomerAddressInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.mtuInput"></a>

```java
public java.lang.Number getMtuInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerAccountIdInput`<sup>Optional</sup> <a name="ownerAccountIdInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.ownerAccountIdInput"></a>

```java
public java.lang.String getOwnerAccountIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts">DxHostedTransitVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.vlanInput"></a>

```java
public java.lang.Number getVlanInput();
```

- *Type:* java.lang.Number

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.bgpAsn"></a>

```java
public java.lang.Number getBgpAsn();
```

- *Type:* java.lang.Number

---

##### `bgpAuthKey`<sup>Required</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.bgpAuthKey"></a>

```java
public java.lang.String getBgpAuthKey();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.ownerAccountId"></a>

```java
public java.lang.String getOwnerAccountId();
```

- *Type:* java.lang.String

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedTransitVirtualInterfaceConfig <a name="DxHostedTransitVirtualInterfaceConfig" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface.DxHostedTransitVirtualInterfaceConfig;

DxHostedTransitVirtualInterfaceConfig.builder()
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
    .ownerAccountId(java.lang.String)
    .vlan(java.lang.Number)
//  .amazonAddress(java.lang.String)
//  .bgpAuthKey(java.lang.String)
//  .customerAddress(java.lang.String)
//  .id(java.lang.String)
//  .mtu(java.lang.Number)
//  .timeouts(DxHostedTransitVirtualInterfaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#address_family DxHostedTransitVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#bgp_asn DxHostedTransitVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#connection_id DxHostedTransitVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#name DxHostedTransitVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.ownerAccountId">ownerAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#owner_account_id DxHostedTransitVirtualInterface#owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#vlan DxHostedTransitVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#amazon_address DxHostedTransitVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#bgp_auth_key DxHostedTransitVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#customer_address DxHostedTransitVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#id DxHostedTransitVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#mtu DxHostedTransitVirtualInterface#mtu}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts">DxHostedTransitVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#address_family DxHostedTransitVirtualInterface#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.bgpAsn"></a>

```java
public java.lang.Number getBgpAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#bgp_asn DxHostedTransitVirtualInterface#bgp_asn}.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#connection_id DxHostedTransitVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#name DxHostedTransitVirtualInterface#name}.

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.ownerAccountId"></a>

```java
public java.lang.String getOwnerAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#owner_account_id DxHostedTransitVirtualInterface#owner_account_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#vlan DxHostedTransitVirtualInterface#vlan}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#amazon_address DxHostedTransitVirtualInterface#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.bgpAuthKey"></a>

```java
public java.lang.String getBgpAuthKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#bgp_auth_key DxHostedTransitVirtualInterface#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#customer_address DxHostedTransitVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#id DxHostedTransitVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#mtu DxHostedTransitVirtualInterface#mtu}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceConfig.property.timeouts"></a>

```java
public DxHostedTransitVirtualInterfaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts">DxHostedTransitVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#timeouts DxHostedTransitVirtualInterface#timeouts}

---

### DxHostedTransitVirtualInterfaceTimeouts <a name="DxHostedTransitVirtualInterfaceTimeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface.DxHostedTransitVirtualInterfaceTimeouts;

DxHostedTransitVirtualInterfaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#create DxHostedTransitVirtualInterface#create}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#delete DxHostedTransitVirtualInterface#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#create DxHostedTransitVirtualInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface#delete DxHostedTransitVirtualInterface#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedTransitVirtualInterfaceTimeoutsOutputReference <a name="DxHostedTransitVirtualInterfaceTimeoutsOutputReference" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference;

new DxHostedTransitVirtualInterfaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts">DxHostedTransitVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterface.DxHostedTransitVirtualInterfaceTimeouts">DxHostedTransitVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



