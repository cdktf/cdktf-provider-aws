# `shieldDrtAccessRoleArnAssociation` Submodule <a name="`shieldDrtAccessRoleArnAssociation` Submodule" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldDrtAccessRoleArnAssociation <a name="ShieldDrtAccessRoleArnAssociation" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_drt_access_role_arn_association aws_shield_drt_access_role_arn_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.shield_drt_access_role_arn_association.ShieldDrtAccessRoleArnAssociation;

ShieldDrtAccessRoleArnAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .roleArn(java.lang.String)
//  .timeouts(ShieldDrtAccessRoleArnAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_drt_access_role_arn_association#role_arn ShieldDrtAccessRoleArnAssociation#role_arn}. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_drt_access_role_arn_association#role_arn ShieldDrtAccessRoleArnAssociation#role_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_drt_access_role_arn_association#timeouts ShieldDrtAccessRoleArnAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.putTimeouts"></a>

```java
public void putTimeouts(ShieldDrtAccessRoleArnAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ShieldDrtAccessRoleArnAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.shield_drt_access_role_arn_association.ShieldDrtAccessRoleArnAssociation;

ShieldDrtAccessRoleArnAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.shield_drt_access_role_arn_association.ShieldDrtAccessRoleArnAssociation;

ShieldDrtAccessRoleArnAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.shield_drt_access_role_arn_association.ShieldDrtAccessRoleArnAssociation;

ShieldDrtAccessRoleArnAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.shield_drt_access_role_arn_association.ShieldDrtAccessRoleArnAssociation;

ShieldDrtAccessRoleArnAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ShieldDrtAccessRoleArnAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ShieldDrtAccessRoleArnAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ShieldDrtAccessRoleArnAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ShieldDrtAccessRoleArnAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_drt_access_role_arn_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ShieldDrtAccessRoleArnAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference">ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.timeouts"></a>

```java
public ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference">ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldDrtAccessRoleArnAssociationConfig <a name="ShieldDrtAccessRoleArnAssociationConfig" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.shield_drt_access_role_arn_association.ShieldDrtAccessRoleArnAssociationConfig;

ShieldDrtAccessRoleArnAssociationConfig.builder()
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
    .roleArn(java.lang.String)
//  .timeouts(ShieldDrtAccessRoleArnAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_drt_access_role_arn_association#role_arn ShieldDrtAccessRoleArnAssociation#role_arn}. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_drt_access_role_arn_association#role_arn ShieldDrtAccessRoleArnAssociation#role_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.timeouts"></a>

```java
public ShieldDrtAccessRoleArnAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_drt_access_role_arn_association#timeouts ShieldDrtAccessRoleArnAssociation#timeouts}

---

### ShieldDrtAccessRoleArnAssociationTimeouts <a name="ShieldDrtAccessRoleArnAssociationTimeouts" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.shield_drt_access_role_arn_association.ShieldDrtAccessRoleArnAssociationTimeouts;

ShieldDrtAccessRoleArnAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_drt_access_role_arn_association#create ShieldDrtAccessRoleArnAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_drt_access_role_arn_association#delete ShieldDrtAccessRoleArnAssociation#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_drt_access_role_arn_association#update ShieldDrtAccessRoleArnAssociation#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference <a name="ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.shield_drt_access_role_arn_association.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference;

new ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a>

---



