# `ssmcontactsPlan` Submodule <a name="`ssmcontactsPlan` Submodule" id="@cdktf/provider-aws.ssmcontactsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsPlan <a name="SsmcontactsPlan" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan aws_ssmcontacts_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlan;

SsmcontactsPlan.Builder.create(Construct scope, java.lang.String id)
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
    .contactId(java.lang.String)
    .stage(IResolvable)
    .stage(java.util.List<SsmcontactsPlanStage>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.contactId">contactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.stage">stage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>></code> | stage block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#id SsmcontactsPlan#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.contactId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.stage"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>>

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#stage SsmcontactsPlan#stage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#id SsmcontactsPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.putStage">putStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStage` <a name="putStage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.putStage"></a>

```java
public void putStage(IResolvable OR java.util.List<SsmcontactsPlanStage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.putStage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SsmcontactsPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlan;

SsmcontactsPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlan;

SsmcontactsPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlan;

SsmcontactsPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlan;

SsmcontactsPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsmcontactsPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SsmcontactsPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsmcontactsPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsmcontactsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SsmcontactsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.stage">stage</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList">SsmcontactsPlanStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput">contactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.stageInput">stageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.contactId">contactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.stage"></a>

```java
public SsmcontactsPlanStageList getStage();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList">SsmcontactsPlanStageList</a>

---

##### `contactIdInput`<sup>Optional</sup> <a name="contactIdInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput"></a>

```java
public java.lang.String getContactIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.stageInput"></a>

```java
public java.lang.Object getStageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>>

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.contactId"></a>

```java
public java.lang.String getContactId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsPlanConfig <a name="SsmcontactsPlanConfig" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlanConfig;

SsmcontactsPlanConfig.builder()
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
    .contactId(java.lang.String)
    .stage(IResolvable)
    .stage(java.util.List<SsmcontactsPlanStage>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId">contactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.stage">stage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>></code> | stage block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#id SsmcontactsPlan#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId"></a>

```java
public java.lang.String getContactId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.stage"></a>

```java
public java.lang.Object getStage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>>

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#stage SsmcontactsPlan#stage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#id SsmcontactsPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SsmcontactsPlanStage <a name="SsmcontactsPlanStage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlanStage;

SsmcontactsPlanStage.builder()
    .durationInMinutes(java.lang.Number)
//  .target(IResolvable)
//  .target(java.util.List<SsmcontactsPlanStageTarget>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#duration_in_minutes SsmcontactsPlan#duration_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.property.target">target</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>></code> | target block. |

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#duration_in_minutes SsmcontactsPlan#duration_in_minutes}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.property.target"></a>

```java
public java.lang.Object getTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#target SsmcontactsPlan#target}

---

### SsmcontactsPlanStageTarget <a name="SsmcontactsPlanStageTarget" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlanStageTarget;

SsmcontactsPlanStageTarget.builder()
//  .channelTargetInfo(SsmcontactsPlanStageTargetChannelTargetInfo)
//  .contactTargetInfo(SsmcontactsPlanStageTargetContactTargetInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.property.channelTargetInfo">channelTargetInfo</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a></code> | channel_target_info block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.property.contactTargetInfo">contactTargetInfo</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a></code> | contact_target_info block. |

---

##### `channelTargetInfo`<sup>Optional</sup> <a name="channelTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.property.channelTargetInfo"></a>

```java
public SsmcontactsPlanStageTargetChannelTargetInfo getChannelTargetInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a>

channel_target_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#channel_target_info SsmcontactsPlan#channel_target_info}

---

##### `contactTargetInfo`<sup>Optional</sup> <a name="contactTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.property.contactTargetInfo"></a>

```java
public SsmcontactsPlanStageTargetContactTargetInfo getContactTargetInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a>

contact_target_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#contact_target_info SsmcontactsPlan#contact_target_info}

---

### SsmcontactsPlanStageTargetChannelTargetInfo <a name="SsmcontactsPlanStageTargetChannelTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlanStageTargetChannelTargetInfo;

SsmcontactsPlanStageTargetChannelTargetInfo.builder()
    .contactChannelId(java.lang.String)
//  .retryIntervalInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.property.contactChannelId">contactChannelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#contact_channel_id SsmcontactsPlan#contact_channel_id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.property.retryIntervalInMinutes">retryIntervalInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}. |

---

##### `contactChannelId`<sup>Required</sup> <a name="contactChannelId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.property.contactChannelId"></a>

```java
public java.lang.String getContactChannelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#contact_channel_id SsmcontactsPlan#contact_channel_id}.

---

##### `retryIntervalInMinutes`<sup>Optional</sup> <a name="retryIntervalInMinutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.property.retryIntervalInMinutes"></a>

```java
public java.lang.Number getRetryIntervalInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}.

---

### SsmcontactsPlanStageTargetContactTargetInfo <a name="SsmcontactsPlanStageTargetContactTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlanStageTargetContactTargetInfo;

SsmcontactsPlanStageTargetContactTargetInfo.builder()
    .isEssential(java.lang.Boolean)
    .isEssential(IResolvable)
//  .contactId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.property.isEssential">isEssential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.property.contactId">contactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}. |

---

##### `isEssential`<sup>Required</sup> <a name="isEssential" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.property.isEssential"></a>

```java
public java.lang.Object getIsEssential();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}.

---

##### `contactId`<sup>Optional</sup> <a name="contactId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.property.contactId"></a>

```java
public java.lang.String getContactId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsPlanStageList <a name="SsmcontactsPlanStageList" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlanStageList;

new SsmcontactsPlanStageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.get"></a>

```java
public SsmcontactsPlanStageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>>

---


### SsmcontactsPlanStageOutputReference <a name="SsmcontactsPlanStageOutputReference" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlanStageOutputReference;

new SsmcontactsPlanStageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.putTarget"></a>

```java
public void putTarget(IResolvable OR java.util.List<SsmcontactsPlanStageTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.putTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>>

---

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList">SsmcontactsPlanStageTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.durationInMinutesInput">durationInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.targetInput">targetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.target"></a>

```java
public SsmcontactsPlanStageTargetList getTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList">SsmcontactsPlanStageTargetList</a>

---

##### `durationInMinutesInput`<sup>Optional</sup> <a name="durationInMinutesInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.durationInMinutesInput"></a>

```java
public java.lang.Number getDurationInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.targetInput"></a>

```java
public java.lang.Object getTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>>

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage">SsmcontactsPlanStage</a>

---


### SsmcontactsPlanStageTargetChannelTargetInfoOutputReference <a name="SsmcontactsPlanStageTargetChannelTargetInfoOutputReference" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference;

new SsmcontactsPlanStageTargetChannelTargetInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resetRetryIntervalInMinutes">resetRetryIntervalInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetryIntervalInMinutes` <a name="resetRetryIntervalInMinutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resetRetryIntervalInMinutes"></a>

```java
public void resetRetryIntervalInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelIdInput">contactChannelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput">retryIntervalInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelId">contactChannelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutes">retryIntervalInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contactChannelIdInput`<sup>Optional</sup> <a name="contactChannelIdInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelIdInput"></a>

```java
public java.lang.String getContactChannelIdInput();
```

- *Type:* java.lang.String

---

##### `retryIntervalInMinutesInput`<sup>Optional</sup> <a name="retryIntervalInMinutesInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput"></a>

```java
public java.lang.Number getRetryIntervalInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `contactChannelId`<sup>Required</sup> <a name="contactChannelId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelId"></a>

```java
public java.lang.String getContactChannelId();
```

- *Type:* java.lang.String

---

##### `retryIntervalInMinutes`<sup>Required</sup> <a name="retryIntervalInMinutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutes"></a>

```java
public java.lang.Number getRetryIntervalInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.internalValue"></a>

```java
public SsmcontactsPlanStageTargetChannelTargetInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a>

---


### SsmcontactsPlanStageTargetContactTargetInfoOutputReference <a name="SsmcontactsPlanStageTargetContactTargetInfoOutputReference" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference;

new SsmcontactsPlanStageTargetContactTargetInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resetContactId">resetContactId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContactId` <a name="resetContactId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resetContactId"></a>

```java
public void resetContactId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactIdInput">contactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssentialInput">isEssentialInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactId">contactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssential">isEssential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contactIdInput`<sup>Optional</sup> <a name="contactIdInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactIdInput"></a>

```java
public java.lang.String getContactIdInput();
```

- *Type:* java.lang.String

---

##### `isEssentialInput`<sup>Optional</sup> <a name="isEssentialInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssentialInput"></a>

```java
public java.lang.Object getIsEssentialInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactId"></a>

```java
public java.lang.String getContactId();
```

- *Type:* java.lang.String

---

##### `isEssential`<sup>Required</sup> <a name="isEssential" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssential"></a>

```java
public java.lang.Object getIsEssential();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.internalValue"></a>

```java
public SsmcontactsPlanStageTargetContactTargetInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a>

---


### SsmcontactsPlanStageTargetList <a name="SsmcontactsPlanStageTargetList" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlanStageTargetList;

new SsmcontactsPlanStageTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.get"></a>

```java
public SsmcontactsPlanStageTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>>

---


### SsmcontactsPlanStageTargetOutputReference <a name="SsmcontactsPlanStageTargetOutputReference" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmcontacts_plan.SsmcontactsPlanStageTargetOutputReference;

new SsmcontactsPlanStageTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putChannelTargetInfo">putChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putContactTargetInfo">putContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resetChannelTargetInfo">resetChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resetContactTargetInfo">resetContactTargetInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChannelTargetInfo` <a name="putChannelTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putChannelTargetInfo"></a>

```java
public void putChannelTargetInfo(SsmcontactsPlanStageTargetChannelTargetInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putChannelTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a>

---

##### `putContactTargetInfo` <a name="putContactTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putContactTargetInfo"></a>

```java
public void putContactTargetInfo(SsmcontactsPlanStageTargetContactTargetInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putContactTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a>

---

##### `resetChannelTargetInfo` <a name="resetChannelTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resetChannelTargetInfo"></a>

```java
public void resetChannelTargetInfo()
```

##### `resetContactTargetInfo` <a name="resetContactTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resetContactTargetInfo"></a>

```java
public void resetContactTargetInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.channelTargetInfo">channelTargetInfo</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference">SsmcontactsPlanStageTargetChannelTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.contactTargetInfo">contactTargetInfo</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference">SsmcontactsPlanStageTargetContactTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.channelTargetInfoInput">channelTargetInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.contactTargetInfoInput">contactTargetInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelTargetInfo`<sup>Required</sup> <a name="channelTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.channelTargetInfo"></a>

```java
public SsmcontactsPlanStageTargetChannelTargetInfoOutputReference getChannelTargetInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference">SsmcontactsPlanStageTargetChannelTargetInfoOutputReference</a>

---

##### `contactTargetInfo`<sup>Required</sup> <a name="contactTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.contactTargetInfo"></a>

```java
public SsmcontactsPlanStageTargetContactTargetInfoOutputReference getContactTargetInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference">SsmcontactsPlanStageTargetContactTargetInfoOutputReference</a>

---

##### `channelTargetInfoInput`<sup>Optional</sup> <a name="channelTargetInfoInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.channelTargetInfoInput"></a>

```java
public SsmcontactsPlanStageTargetChannelTargetInfo getChannelTargetInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a>

---

##### `contactTargetInfoInput`<sup>Optional</sup> <a name="contactTargetInfoInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.contactTargetInfoInput"></a>

```java
public SsmcontactsPlanStageTargetContactTargetInfo getContactTargetInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget">SsmcontactsPlanStageTarget</a>

---



