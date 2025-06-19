# `iamGroupPolicyAttachmentsExclusive` Submodule <a name="`iamGroupPolicyAttachmentsExclusive` Submodule" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamGroupPolicyAttachmentsExclusive <a name="IamGroupPolicyAttachmentsExclusive" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_group_policy_attachments_exclusive aws_iam_group_policy_attachments_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_group_policy_attachments_exclusive.IamGroupPolicyAttachmentsExclusive;

IamGroupPolicyAttachmentsExclusive.Builder.create(Construct scope, java.lang.String id)
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
    .groupName(java.lang.String)
    .policyArns(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.groupName">groupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_group_policy_attachments_exclusive#group_name IamGroupPolicyAttachmentsExclusive#group_name}. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.policyArns">policyArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_group_policy_attachments_exclusive#policy_arns IamGroupPolicyAttachmentsExclusive#policy_arns}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.groupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_group_policy_attachments_exclusive#group_name IamGroupPolicyAttachmentsExclusive#group_name}.

---

##### `policyArns`<sup>Required</sup> <a name="policyArns" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.policyArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_group_policy_attachments_exclusive#policy_arns IamGroupPolicyAttachmentsExclusive#policy_arns}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamGroupPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_group_policy_attachments_exclusive.IamGroupPolicyAttachmentsExclusive;

IamGroupPolicyAttachmentsExclusive.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_group_policy_attachments_exclusive.IamGroupPolicyAttachmentsExclusive;

IamGroupPolicyAttachmentsExclusive.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_group_policy_attachments_exclusive.IamGroupPolicyAttachmentsExclusive;

IamGroupPolicyAttachmentsExclusive.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_group_policy_attachments_exclusive.IamGroupPolicyAttachmentsExclusive;

IamGroupPolicyAttachmentsExclusive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamGroupPolicyAttachmentsExclusive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IamGroupPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamGroupPolicyAttachmentsExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamGroupPolicyAttachmentsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_group_policy_attachments_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IamGroupPolicyAttachmentsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.policyArnsInput">policyArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.policyArns">policyArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `policyArnsInput`<sup>Optional</sup> <a name="policyArnsInput" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.policyArnsInput"></a>

```java
public java.util.List<java.lang.String> getPolicyArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `policyArns`<sup>Required</sup> <a name="policyArns" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.policyArns"></a>

```java
public java.util.List<java.lang.String> getPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamGroupPolicyAttachmentsExclusiveConfig <a name="IamGroupPolicyAttachmentsExclusiveConfig" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_group_policy_attachments_exclusive.IamGroupPolicyAttachmentsExclusiveConfig;

IamGroupPolicyAttachmentsExclusiveConfig.builder()
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
    .groupName(java.lang.String)
    .policyArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.groupName">groupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_group_policy_attachments_exclusive#group_name IamGroupPolicyAttachmentsExclusive#group_name}. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.policyArns">policyArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_group_policy_attachments_exclusive#policy_arns IamGroupPolicyAttachmentsExclusive#policy_arns}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_group_policy_attachments_exclusive#group_name IamGroupPolicyAttachmentsExclusive#group_name}.

---

##### `policyArns`<sup>Required</sup> <a name="policyArns" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.policyArns"></a>

```java
public java.util.List<java.lang.String> getPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_group_policy_attachments_exclusive#policy_arns IamGroupPolicyAttachmentsExclusive#policy_arns}.

---



