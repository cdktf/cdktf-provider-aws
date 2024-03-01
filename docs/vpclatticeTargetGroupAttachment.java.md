# `vpclatticeTargetGroupAttachment` Submodule <a name="`vpclatticeTargetGroupAttachment` Submodule" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeTargetGroupAttachment <a name="VpclatticeTargetGroupAttachment" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment aws_vpclattice_target_group_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group_attachment.VpclatticeTargetGroupAttachment;

VpclatticeTargetGroupAttachment.Builder.create(Construct scope, java.lang.String id)
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
    .target(VpclatticeTargetGroupAttachmentTarget)
    .targetGroupIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(VpclatticeTargetGroupAttachmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.targetGroupIdentifier">targetGroupIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#target_group_identifier VpclatticeTargetGroupAttachment#target_group_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#id VpclatticeTargetGroupAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts">VpclatticeTargetGroupAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#target VpclatticeTargetGroupAttachment#target}

---

##### `targetGroupIdentifier`<sup>Required</sup> <a name="targetGroupIdentifier" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.targetGroupIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#target_group_identifier VpclatticeTargetGroupAttachment#target_group_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#id VpclatticeTargetGroupAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts">VpclatticeTargetGroupAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#timeouts VpclatticeTargetGroupAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.putTarget"></a>

```java
public void putTarget(VpclatticeTargetGroupAttachmentTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.putTimeouts"></a>

```java
public void putTimeouts(VpclatticeTargetGroupAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts">VpclatticeTargetGroupAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpclatticeTargetGroupAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group_attachment.VpclatticeTargetGroupAttachment;

VpclatticeTargetGroupAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group_attachment.VpclatticeTargetGroupAttachment;

VpclatticeTargetGroupAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group_attachment.VpclatticeTargetGroupAttachment;

VpclatticeTargetGroupAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group_attachment.VpclatticeTargetGroupAttachment;

VpclatticeTargetGroupAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpclatticeTargetGroupAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VpclatticeTargetGroupAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpclatticeTargetGroupAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpclatticeTargetGroupAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VpclatticeTargetGroupAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference">VpclatticeTargetGroupAttachmentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference">VpclatticeTargetGroupAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.targetGroupIdentifierInput">targetGroupIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts">VpclatticeTargetGroupAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.targetGroupIdentifier">targetGroupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.target"></a>

```java
public VpclatticeTargetGroupAttachmentTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference">VpclatticeTargetGroupAttachmentTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.timeouts"></a>

```java
public VpclatticeTargetGroupAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference">VpclatticeTargetGroupAttachmentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `targetGroupIdentifierInput`<sup>Optional</sup> <a name="targetGroupIdentifierInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.targetGroupIdentifierInput"></a>

```java
public java.lang.String getTargetGroupIdentifierInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.targetInput"></a>

```java
public VpclatticeTargetGroupAttachmentTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts">VpclatticeTargetGroupAttachmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `targetGroupIdentifier`<sup>Required</sup> <a name="targetGroupIdentifier" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.targetGroupIdentifier"></a>

```java
public java.lang.String getTargetGroupIdentifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeTargetGroupAttachmentConfig <a name="VpclatticeTargetGroupAttachmentConfig" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group_attachment.VpclatticeTargetGroupAttachmentConfig;

VpclatticeTargetGroupAttachmentConfig.builder()
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
    .target(VpclatticeTargetGroupAttachmentTarget)
    .targetGroupIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(VpclatticeTargetGroupAttachmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.targetGroupIdentifier">targetGroupIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#target_group_identifier VpclatticeTargetGroupAttachment#target_group_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#id VpclatticeTargetGroupAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts">VpclatticeTargetGroupAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.target"></a>

```java
public VpclatticeTargetGroupAttachmentTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#target VpclatticeTargetGroupAttachment#target}

---

##### `targetGroupIdentifier`<sup>Required</sup> <a name="targetGroupIdentifier" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.targetGroupIdentifier"></a>

```java
public java.lang.String getTargetGroupIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#target_group_identifier VpclatticeTargetGroupAttachment#target_group_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#id VpclatticeTargetGroupAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.timeouts"></a>

```java
public VpclatticeTargetGroupAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts">VpclatticeTargetGroupAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#timeouts VpclatticeTargetGroupAttachment#timeouts}

---

### VpclatticeTargetGroupAttachmentTarget <a name="VpclatticeTargetGroupAttachmentTarget" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group_attachment.VpclatticeTargetGroupAttachmentTarget;

VpclatticeTargetGroupAttachmentTarget.builder()
    .id(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#id VpclatticeTargetGroupAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#port VpclatticeTargetGroupAttachment#port}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#id VpclatticeTargetGroupAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#port VpclatticeTargetGroupAttachment#port}.

---

### VpclatticeTargetGroupAttachmentTimeouts <a name="VpclatticeTargetGroupAttachmentTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group_attachment.VpclatticeTargetGroupAttachmentTimeouts;

VpclatticeTargetGroupAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#create VpclatticeTargetGroupAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#delete VpclatticeTargetGroupAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#create VpclatticeTargetGroupAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_target_group_attachment#delete VpclatticeTargetGroupAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeTargetGroupAttachmentTargetOutputReference <a name="VpclatticeTargetGroupAttachmentTargetOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group_attachment.VpclatticeTargetGroupAttachmentTargetOutputReference;

new VpclatticeTargetGroupAttachmentTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.internalValue"></a>

```java
public VpclatticeTargetGroupAttachmentTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a>

---


### VpclatticeTargetGroupAttachmentTimeoutsOutputReference <a name="VpclatticeTargetGroupAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group_attachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference;

new VpclatticeTargetGroupAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts">VpclatticeTargetGroupAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts">VpclatticeTargetGroupAttachmentTimeouts</a>

---



