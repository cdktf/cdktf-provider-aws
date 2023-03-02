# `ec2TransitGatewayPeeringAttachment` Submodule <a name="`ec2TransitGatewayPeeringAttachment` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayPeeringAttachment <a name="Ec2TransitGatewayPeeringAttachment" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment aws_ec2_transit_gateway_peering_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_peering_attachment.Ec2TransitGatewayPeeringAttachment;

Ec2TransitGatewayPeeringAttachment.Builder.create(Construct scope, java.lang.String id)
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
    .peerRegion(java.lang.String)
    .peerTransitGatewayId(java.lang.String)
    .transitGatewayId(java.lang.String)
//  .id(java.lang.String)
//  .peerAccountId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerRegion">peerRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerTransitGatewayId">peerTransitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#id Ec2TransitGatewayPeeringAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerAccountId">peerAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#tags_all Ec2TransitGatewayPeeringAttachment#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}.

---

##### `peerTransitGatewayId`<sup>Required</sup> <a name="peerTransitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerTransitGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}.

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.transitGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#id Ec2TransitGatewayPeeringAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peerAccountId`<sup>Optional</sup> <a name="peerAccountId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#tags_all Ec2TransitGatewayPeeringAttachment#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetPeerAccountId">resetPeerAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetPeerAccountId` <a name="resetPeerAccountId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetPeerAccountId"></a>

```java
public void resetPeerAccountId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_peering_attachment.Ec2TransitGatewayPeeringAttachment;

Ec2TransitGatewayPeeringAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_peering_attachment.Ec2TransitGatewayPeeringAttachment;

Ec2TransitGatewayPeeringAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_peering_attachment.Ec2TransitGatewayPeeringAttachment;

Ec2TransitGatewayPeeringAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountIdInput">peerAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegionInput">peerRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayIdInput">peerTransitGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountId">peerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegion">peerRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayId">peerTransitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `peerAccountIdInput`<sup>Optional</sup> <a name="peerAccountIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountIdInput"></a>

```java
public java.lang.String getPeerAccountIdInput();
```

- *Type:* java.lang.String

---

##### `peerRegionInput`<sup>Optional</sup> <a name="peerRegionInput" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegionInput"></a>

```java
public java.lang.String getPeerRegionInput();
```

- *Type:* java.lang.String

---

##### `peerTransitGatewayIdInput`<sup>Optional</sup> <a name="peerTransitGatewayIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayIdInput"></a>

```java
public java.lang.String getPeerTransitGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayIdInput"></a>

```java
public java.lang.String getTransitGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `peerAccountId`<sup>Required</sup> <a name="peerAccountId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountId"></a>

```java
public java.lang.String getPeerAccountId();
```

- *Type:* java.lang.String

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegion"></a>

```java
public java.lang.String getPeerRegion();
```

- *Type:* java.lang.String

---

##### `peerTransitGatewayId`<sup>Required</sup> <a name="peerTransitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayId"></a>

```java
public java.lang.String getPeerTransitGatewayId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayPeeringAttachmentConfig <a name="Ec2TransitGatewayPeeringAttachmentConfig" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_transit_gateway_peering_attachment.Ec2TransitGatewayPeeringAttachmentConfig;

Ec2TransitGatewayPeeringAttachmentConfig.builder()
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
    .peerRegion(java.lang.String)
    .peerTransitGatewayId(java.lang.String)
    .transitGatewayId(java.lang.String)
//  .id(java.lang.String)
//  .peerAccountId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerRegion">peerRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerTransitGatewayId">peerTransitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#id Ec2TransitGatewayPeeringAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerAccountId">peerAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#tags_all Ec2TransitGatewayPeeringAttachment#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerRegion"></a>

```java
public java.lang.String getPeerRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}.

---

##### `peerTransitGatewayId`<sup>Required</sup> <a name="peerTransitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerTransitGatewayId"></a>

```java
public java.lang.String getPeerTransitGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}.

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#id Ec2TransitGatewayPeeringAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peerAccountId`<sup>Optional</sup> <a name="peerAccountId" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerAccountId"></a>

```java
public java.lang.String getPeerAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#tags_all Ec2TransitGatewayPeeringAttachment#tags_all}.

---



