# `dxPublicVirtualInterface` Submodule <a name="`dxPublicVirtualInterface` Submodule" id="@cdktf/provider-aws.dxPublicVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxPublicVirtualInterface <a name="DxPublicVirtualInterface" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface aws_dx_public_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_public_virtual_interface.DxPublicVirtualInterface;

DxPublicVirtualInterface.Builder.create(Construct scope, java.lang.String id)
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
    .routeFilterPrefixes(java.util.List<java.lang.String>)
    .vlan(java.lang.Number)
//  .amazonAddress(java.lang.String)
//  .bgpAuthKey(java.lang.String)
//  .customerAddress(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DxPublicVirtualInterfaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#address_family DxPublicVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#bgp_asn DxPublicVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#connection_id DxPublicVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#name DxPublicVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.routeFilterPrefixes">routeFilterPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#route_filter_prefixes DxPublicVirtualInterface#route_filter_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#vlan DxPublicVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#amazon_address DxPublicVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#bgp_auth_key DxPublicVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#customer_address DxPublicVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#id DxPublicVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#tags DxPublicVirtualInterface#tags}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#tags_all DxPublicVirtualInterface#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.addressFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#address_family DxPublicVirtualInterface#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.bgpAsn"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#bgp_asn DxPublicVirtualInterface#bgp_asn}.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#connection_id DxPublicVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#name DxPublicVirtualInterface#name}.

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="routeFilterPrefixes" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.routeFilterPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#route_filter_prefixes DxPublicVirtualInterface#route_filter_prefixes}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#vlan DxPublicVirtualInterface#vlan}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.amazonAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#amazon_address DxPublicVirtualInterface#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.bgpAuthKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#bgp_auth_key DxPublicVirtualInterface#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.customerAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#customer_address DxPublicVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#id DxPublicVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#tags DxPublicVirtualInterface#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#tags_all DxPublicVirtualInterface#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#timeouts DxPublicVirtualInterface#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetBgpAuthKey">resetBgpAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.putTimeouts"></a>

```java
public void putTimeouts(DxPublicVirtualInterfaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a>

---

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetAmazonAddress"></a>

```java
public void resetAmazonAddress()
```

##### `resetBgpAuthKey` <a name="resetBgpAuthKey" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetBgpAuthKey"></a>

```java
public void resetBgpAuthKey()
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetCustomerAddress"></a>

```java
public void resetCustomerAddress()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_public_virtual_interface.DxPublicVirtualInterface;

DxPublicVirtualInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_public_virtual_interface.DxPublicVirtualInterface;

DxPublicVirtualInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_public_virtual_interface.DxPublicVirtualInterface;

DxPublicVirtualInterface.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonSideAsn">amazonSideAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.awsDevice">awsDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference">DxPublicVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.addressFamilyInput">addressFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonAddressInput">amazonAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAsnInput">bgpAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAuthKeyInput">bgpAuthKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.customerAddressInput">customerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.routeFilterPrefixesInput">routeFilterPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.routeFilterPrefixes">routeFilterPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonSideAsn"></a>

```java
public java.lang.String getAmazonSideAsn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `awsDevice`<sup>Required</sup> <a name="awsDevice" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.awsDevice"></a>

```java
public java.lang.String getAwsDevice();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.timeouts"></a>

```java
public DxPublicVirtualInterfaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference">DxPublicVirtualInterfaceTimeoutsOutputReference</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.addressFamilyInput"></a>

```java
public java.lang.String getAddressFamilyInput();
```

- *Type:* java.lang.String

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonAddressInput"></a>

```java
public java.lang.String getAmazonAddressInput();
```

- *Type:* java.lang.String

---

##### `bgpAsnInput`<sup>Optional</sup> <a name="bgpAsnInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAsnInput"></a>

```java
public java.lang.Number getBgpAsnInput();
```

- *Type:* java.lang.Number

---

##### `bgpAuthKeyInput`<sup>Optional</sup> <a name="bgpAuthKeyInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAuthKeyInput"></a>

```java
public java.lang.String getBgpAuthKeyInput();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.customerAddressInput"></a>

```java
public java.lang.String getCustomerAddressInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `routeFilterPrefixesInput`<sup>Optional</sup> <a name="routeFilterPrefixesInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.routeFilterPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getRouteFilterPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.vlanInput"></a>

```java
public java.lang.Number getVlanInput();
```

- *Type:* java.lang.Number

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAsn"></a>

```java
public java.lang.Number getBgpAsn();
```

- *Type:* java.lang.Number

---

##### `bgpAuthKey`<sup>Required</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAuthKey"></a>

```java
public java.lang.String getBgpAuthKey();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="routeFilterPrefixes" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.routeFilterPrefixes"></a>

```java
public java.util.List<java.lang.String> getRouteFilterPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DxPublicVirtualInterfaceConfig <a name="DxPublicVirtualInterfaceConfig" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_public_virtual_interface.DxPublicVirtualInterfaceConfig;

DxPublicVirtualInterfaceConfig.builder()
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
    .routeFilterPrefixes(java.util.List<java.lang.String>)
    .vlan(java.lang.Number)
//  .amazonAddress(java.lang.String)
//  .bgpAuthKey(java.lang.String)
//  .customerAddress(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DxPublicVirtualInterfaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#address_family DxPublicVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#bgp_asn DxPublicVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#connection_id DxPublicVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#name DxPublicVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.routeFilterPrefixes">routeFilterPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#route_filter_prefixes DxPublicVirtualInterface#route_filter_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#vlan DxPublicVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#amazon_address DxPublicVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#bgp_auth_key DxPublicVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#customer_address DxPublicVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#id DxPublicVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#tags DxPublicVirtualInterface#tags}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#tags_all DxPublicVirtualInterface#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#address_family DxPublicVirtualInterface#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.bgpAsn"></a>

```java
public java.lang.Number getBgpAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#bgp_asn DxPublicVirtualInterface#bgp_asn}.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#connection_id DxPublicVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#name DxPublicVirtualInterface#name}.

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="routeFilterPrefixes" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.routeFilterPrefixes"></a>

```java
public java.util.List<java.lang.String> getRouteFilterPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#route_filter_prefixes DxPublicVirtualInterface#route_filter_prefixes}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#vlan DxPublicVirtualInterface#vlan}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#amazon_address DxPublicVirtualInterface#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.bgpAuthKey"></a>

```java
public java.lang.String getBgpAuthKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#bgp_auth_key DxPublicVirtualInterface#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#customer_address DxPublicVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#id DxPublicVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#tags DxPublicVirtualInterface#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#tags_all DxPublicVirtualInterface#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.timeouts"></a>

```java
public DxPublicVirtualInterfaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#timeouts DxPublicVirtualInterface#timeouts}

---

### DxPublicVirtualInterfaceTimeouts <a name="DxPublicVirtualInterfaceTimeouts" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_public_virtual_interface.DxPublicVirtualInterfaceTimeouts;

DxPublicVirtualInterfaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#create DxPublicVirtualInterface#create}. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#delete DxPublicVirtualInterface#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#create DxPublicVirtualInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface#delete DxPublicVirtualInterface#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxPublicVirtualInterfaceTimeoutsOutputReference <a name="DxPublicVirtualInterfaceTimeoutsOutputReference" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_public_virtual_interface.DxPublicVirtualInterfaceTimeoutsOutputReference;

new DxPublicVirtualInterfaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



