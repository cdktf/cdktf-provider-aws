# `dxHostedTransitVirtualInterfaceAccepter` Submodule <a name="`dxHostedTransitVirtualInterfaceAccepter` Submodule" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedTransitVirtualInterfaceAccepter <a name="DxHostedTransitVirtualInterfaceAccepter" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter aws_dx_hosted_transit_virtual_interface_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface_accepter.DxHostedTransitVirtualInterfaceAccepter;

DxHostedTransitVirtualInterfaceAccepter.Builder.create(Construct scope, java.lang.String id)
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
    .dxGatewayId(java.lang.String)
    .virtualInterfaceId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DxHostedTransitVirtualInterfaceAccepterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#dx_gateway_id DxHostedTransitVirtualInterfaceAccepter#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.virtualInterfaceId">virtualInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#virtual_interface_id DxHostedTransitVirtualInterfaceAccepter#virtual_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#id DxHostedTransitVirtualInterfaceAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags DxHostedTransitVirtualInterfaceAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags_all DxHostedTransitVirtualInterfaceAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.dxGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#dx_gateway_id DxHostedTransitVirtualInterfaceAccepter#dx_gateway_id}.

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.virtualInterfaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#virtual_interface_id DxHostedTransitVirtualInterfaceAccepter#virtual_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#id DxHostedTransitVirtualInterfaceAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags DxHostedTransitVirtualInterfaceAccepter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags_all DxHostedTransitVirtualInterfaceAccepter#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#timeouts DxHostedTransitVirtualInterfaceAccepter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.putTimeouts"></a>

```java
public void putTimeouts(DxHostedTransitVirtualInterfaceAccepterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface_accepter.DxHostedTransitVirtualInterfaceAccepter;

DxHostedTransitVirtualInterfaceAccepter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface_accepter.DxHostedTransitVirtualInterfaceAccepter;

DxHostedTransitVirtualInterfaceAccepter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface_accepter.DxHostedTransitVirtualInterfaceAccepter;

DxHostedTransitVirtualInterfaceAccepter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dxGatewayIdInput">dxGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.virtualInterfaceIdInput">virtualInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.timeouts"></a>

```java
public DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference</a>

---

##### `dxGatewayIdInput`<sup>Optional</sup> <a name="dxGatewayIdInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dxGatewayIdInput"></a>

```java
public java.lang.String getDxGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `virtualInterfaceIdInput`<sup>Optional</sup> <a name="virtualInterfaceIdInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.virtualInterfaceIdInput"></a>

```java
public java.lang.String getVirtualInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dxGatewayId"></a>

```java
public java.lang.String getDxGatewayId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.virtualInterfaceId"></a>

```java
public java.lang.String getVirtualInterfaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedTransitVirtualInterfaceAccepterConfig <a name="DxHostedTransitVirtualInterfaceAccepterConfig" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface_accepter.DxHostedTransitVirtualInterfaceAccepterConfig;

DxHostedTransitVirtualInterfaceAccepterConfig.builder()
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
    .dxGatewayId(java.lang.String)
    .virtualInterfaceId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DxHostedTransitVirtualInterfaceAccepterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#dx_gateway_id DxHostedTransitVirtualInterfaceAccepter#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#virtual_interface_id DxHostedTransitVirtualInterfaceAccepter#virtual_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#id DxHostedTransitVirtualInterfaceAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags DxHostedTransitVirtualInterfaceAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags_all DxHostedTransitVirtualInterfaceAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.dxGatewayId"></a>

```java
public java.lang.String getDxGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#dx_gateway_id DxHostedTransitVirtualInterfaceAccepter#dx_gateway_id}.

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.virtualInterfaceId"></a>

```java
public java.lang.String getVirtualInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#virtual_interface_id DxHostedTransitVirtualInterfaceAccepter#virtual_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#id DxHostedTransitVirtualInterfaceAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags DxHostedTransitVirtualInterfaceAccepter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags_all DxHostedTransitVirtualInterfaceAccepter#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.timeouts"></a>

```java
public DxHostedTransitVirtualInterfaceAccepterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#timeouts DxHostedTransitVirtualInterfaceAccepter#timeouts}

---

### DxHostedTransitVirtualInterfaceAccepterTimeouts <a name="DxHostedTransitVirtualInterfaceAccepterTimeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface_accepter.DxHostedTransitVirtualInterfaceAccepterTimeouts;

DxHostedTransitVirtualInterfaceAccepterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#create DxHostedTransitVirtualInterfaceAccepter#create}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#delete DxHostedTransitVirtualInterfaceAccepter#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#create DxHostedTransitVirtualInterfaceAccepter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#delete DxHostedTransitVirtualInterfaceAccepter#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference <a name="DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_hosted_transit_virtual_interface_accepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference;

new DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



