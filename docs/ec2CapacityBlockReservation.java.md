# `ec2CapacityBlockReservation` Submodule <a name="`ec2CapacityBlockReservation` Submodule" id="@cdktf/provider-aws.ec2CapacityBlockReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CapacityBlockReservation <a name="Ec2CapacityBlockReservation" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation aws_ec2_capacity_block_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_capacity_block_reservation.Ec2CapacityBlockReservation;

Ec2CapacityBlockReservation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .capacityBlockOfferingId(java.lang.String)
    .instancePlatform(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Ec2CapacityBlockReservationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.capacityBlockOfferingId">capacityBlockOfferingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#capacity_block_offering_id Ec2CapacityBlockReservation#capacity_block_offering_id}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.instancePlatform">instancePlatform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#instance_platform Ec2CapacityBlockReservation#instance_platform}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#tags Ec2CapacityBlockReservation#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityBlockOfferingId`<sup>Required</sup> <a name="capacityBlockOfferingId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.capacityBlockOfferingId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#capacity_block_offering_id Ec2CapacityBlockReservation#capacity_block_offering_id}.

---

##### `instancePlatform`<sup>Required</sup> <a name="instancePlatform" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.instancePlatform"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#instance_platform Ec2CapacityBlockReservation#instance_platform}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#tags Ec2CapacityBlockReservation#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#timeouts Ec2CapacityBlockReservation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.putTimeouts"></a>

```java
public void putTimeouts(Ec2CapacityBlockReservationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a>

---

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2CapacityBlockReservation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_capacity_block_reservation.Ec2CapacityBlockReservation;

Ec2CapacityBlockReservation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_capacity_block_reservation.Ec2CapacityBlockReservation;

Ec2CapacityBlockReservation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_capacity_block_reservation.Ec2CapacityBlockReservation;

Ec2CapacityBlockReservation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_capacity_block_reservation.Ec2CapacityBlockReservation;

Ec2CapacityBlockReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2CapacityBlockReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Ec2CapacityBlockReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2CapacityBlockReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2CapacityBlockReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Ec2CapacityBlockReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.ebsOptimized">ebsOptimized</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.endDateType">endDateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.placementGroupArn">placementGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.reservationType">reservationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference">Ec2CapacityBlockReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.capacityBlockOfferingIdInput">capacityBlockOfferingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instancePlatformInput">instancePlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.capacityBlockOfferingId">capacityBlockOfferingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instancePlatform">instancePlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.ebsOptimized"></a>

```java
public IResolvable getEbsOptimized();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `endDateType`<sup>Required</sup> <a name="endDateType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.endDateType"></a>

```java
public java.lang.String getEndDateType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

---

##### `placementGroupArn`<sup>Required</sup> <a name="placementGroupArn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.placementGroupArn"></a>

```java
public java.lang.String getPlacementGroupArn();
```

- *Type:* java.lang.String

---

##### `reservationType`<sup>Required</sup> <a name="reservationType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.reservationType"></a>

```java
public java.lang.String getReservationType();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.timeouts"></a>

```java
public Ec2CapacityBlockReservationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference">Ec2CapacityBlockReservationTimeoutsOutputReference</a>

---

##### `capacityBlockOfferingIdInput`<sup>Optional</sup> <a name="capacityBlockOfferingIdInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.capacityBlockOfferingIdInput"></a>

```java
public java.lang.String getCapacityBlockOfferingIdInput();
```

- *Type:* java.lang.String

---

##### `instancePlatformInput`<sup>Optional</sup> <a name="instancePlatformInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instancePlatformInput"></a>

```java
public java.lang.String getInstancePlatformInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a>

---

##### `capacityBlockOfferingId`<sup>Required</sup> <a name="capacityBlockOfferingId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.capacityBlockOfferingId"></a>

```java
public java.lang.String getCapacityBlockOfferingId();
```

- *Type:* java.lang.String

---

##### `instancePlatform`<sup>Required</sup> <a name="instancePlatform" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instancePlatform"></a>

```java
public java.lang.String getInstancePlatform();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CapacityBlockReservationConfig <a name="Ec2CapacityBlockReservationConfig" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_capacity_block_reservation.Ec2CapacityBlockReservationConfig;

Ec2CapacityBlockReservationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .capacityBlockOfferingId(java.lang.String)
    .instancePlatform(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Ec2CapacityBlockReservationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.capacityBlockOfferingId">capacityBlockOfferingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#capacity_block_offering_id Ec2CapacityBlockReservation#capacity_block_offering_id}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.instancePlatform">instancePlatform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#instance_platform Ec2CapacityBlockReservation#instance_platform}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#tags Ec2CapacityBlockReservation#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityBlockOfferingId`<sup>Required</sup> <a name="capacityBlockOfferingId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.capacityBlockOfferingId"></a>

```java
public java.lang.String getCapacityBlockOfferingId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#capacity_block_offering_id Ec2CapacityBlockReservation#capacity_block_offering_id}.

---

##### `instancePlatform`<sup>Required</sup> <a name="instancePlatform" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.instancePlatform"></a>

```java
public java.lang.String getInstancePlatform();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#instance_platform Ec2CapacityBlockReservation#instance_platform}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#tags Ec2CapacityBlockReservation#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.timeouts"></a>

```java
public Ec2CapacityBlockReservationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#timeouts Ec2CapacityBlockReservation#timeouts}

---

### Ec2CapacityBlockReservationTimeouts <a name="Ec2CapacityBlockReservationTimeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_capacity_block_reservation.Ec2CapacityBlockReservationTimeouts;

Ec2CapacityBlockReservationTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/ec2_capacity_block_reservation#create Ec2CapacityBlockReservation#create}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CapacityBlockReservationTimeoutsOutputReference <a name="Ec2CapacityBlockReservationTimeoutsOutputReference" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_capacity_block_reservation.Ec2CapacityBlockReservationTimeoutsOutputReference;

new Ec2CapacityBlockReservationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a>

---



