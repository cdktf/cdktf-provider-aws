# `ssoadminApplicationAssignment` Submodule <a name="`ssoadminApplicationAssignment` Submodule" id="@cdktf/provider-aws.ssoadminApplicationAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminApplicationAssignment <a name="SsoadminApplicationAssignment" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment aws_ssoadmin_application_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_application_assignment.SsoadminApplicationAssignment;

SsoadminApplicationAssignment.Builder.create(Construct scope, java.lang.String id)
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
    .applicationArn(java.lang.String)
    .principalId(java.lang.String)
    .principalType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment#application_arn SsoadminApplicationAssignment#application_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment#principal_id SsoadminApplicationAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment#principal_type SsoadminApplicationAssignment#principal_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.applicationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment#application_arn SsoadminApplicationAssignment#application_arn}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.principalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment#principal_id SsoadminApplicationAssignment#principal_id}.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.Initializer.parameter.principalType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment#principal_type SsoadminApplicationAssignment#principal_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SsoadminApplicationAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_application_assignment.SsoadminApplicationAssignment;

SsoadminApplicationAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_application_assignment.SsoadminApplicationAssignment;

SsoadminApplicationAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_application_assignment.SsoadminApplicationAssignment;

SsoadminApplicationAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_application_assignment.SsoadminApplicationAssignment;

SsoadminApplicationAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsoadminApplicationAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SsoadminApplicationAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsoadminApplicationAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsoadminApplicationAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SsoadminApplicationAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.applicationArnInput">applicationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.applicationArnInput"></a>

```java
public java.lang.String getApplicationArnInput();
```

- *Type:* java.lang.String

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.principalIdInput"></a>

```java
public java.lang.String getPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminApplicationAssignmentConfig <a name="SsoadminApplicationAssignmentConfig" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_application_assignment.SsoadminApplicationAssignmentConfig;

SsoadminApplicationAssignmentConfig.builder()
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
    .applicationArn(java.lang.String)
    .principalId(java.lang.String)
    .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment#application_arn SsoadminApplicationAssignment#application_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment#principal_id SsoadminApplicationAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment#principal_type SsoadminApplicationAssignment#principal_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment#application_arn SsoadminApplicationAssignment#application_arn}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment#principal_id SsoadminApplicationAssignment#principal_id}.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-aws.ssoadminApplicationAssignment.SsoadminApplicationAssignmentConfig.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/ssoadmin_application_assignment#principal_type SsoadminApplicationAssignment#principal_type}.

---



