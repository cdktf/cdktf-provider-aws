# `ebsFastSnapshotRestore` Submodule <a name="`ebsFastSnapshotRestore` Submodule" id="@cdktf/provider-aws.ebsFastSnapshotRestore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EbsFastSnapshotRestore <a name="EbsFastSnapshotRestore" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore aws_ebs_fast_snapshot_restore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_fast_snapshot_restore.EbsFastSnapshotRestore;

EbsFastSnapshotRestore.Builder.create(Construct scope, java.lang.String id)
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
    .availabilityZone(java.lang.String)
    .snapshotId(java.lang.String)
//  .timeouts(EbsFastSnapshotRestoreTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore#availability_zone EbsFastSnapshotRestore#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore#snapshot_id EbsFastSnapshotRestore#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore#availability_zone EbsFastSnapshotRestore#availability_zone}.

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.snapshotId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore#snapshot_id EbsFastSnapshotRestore#snapshot_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore#timeouts EbsFastSnapshotRestore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.putTimeouts"></a>

```java
public void putTimeouts(EbsFastSnapshotRestoreTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EbsFastSnapshotRestore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_fast_snapshot_restore.EbsFastSnapshotRestore;

EbsFastSnapshotRestore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_fast_snapshot_restore.EbsFastSnapshotRestore;

EbsFastSnapshotRestore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_fast_snapshot_restore.EbsFastSnapshotRestore;

EbsFastSnapshotRestore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_fast_snapshot_restore.EbsFastSnapshotRestore;

EbsFastSnapshotRestore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EbsFastSnapshotRestore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EbsFastSnapshotRestore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EbsFastSnapshotRestore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EbsFastSnapshotRestore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EbsFastSnapshotRestore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference">EbsFastSnapshotRestoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.timeouts"></a>

```java
public EbsFastSnapshotRestoreTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference">EbsFastSnapshotRestoreTimeoutsOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EbsFastSnapshotRestoreConfig <a name="EbsFastSnapshotRestoreConfig" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_fast_snapshot_restore.EbsFastSnapshotRestoreConfig;

EbsFastSnapshotRestoreConfig.builder()
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
    .availabilityZone(java.lang.String)
    .snapshotId(java.lang.String)
//  .timeouts(EbsFastSnapshotRestoreTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore#availability_zone EbsFastSnapshotRestore#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore#snapshot_id EbsFastSnapshotRestore#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore#availability_zone EbsFastSnapshotRestore#availability_zone}.

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore#snapshot_id EbsFastSnapshotRestore#snapshot_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.timeouts"></a>

```java
public EbsFastSnapshotRestoreTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore#timeouts EbsFastSnapshotRestore#timeouts}

---

### EbsFastSnapshotRestoreTimeouts <a name="EbsFastSnapshotRestoreTimeouts" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_fast_snapshot_restore.EbsFastSnapshotRestoreTimeouts;

EbsFastSnapshotRestoreTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore#create EbsFastSnapshotRestore#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/ebs_fast_snapshot_restore#delete EbsFastSnapshotRestore#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### EbsFastSnapshotRestoreTimeoutsOutputReference <a name="EbsFastSnapshotRestoreTimeoutsOutputReference" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_fast_snapshot_restore.EbsFastSnapshotRestoreTimeoutsOutputReference;

new EbsFastSnapshotRestoreTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a>

---



