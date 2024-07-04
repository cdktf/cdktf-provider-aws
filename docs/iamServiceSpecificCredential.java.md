# `iamServiceSpecificCredential` Submodule <a name="`iamServiceSpecificCredential` Submodule" id="@cdktf/provider-aws.iamServiceSpecificCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamServiceSpecificCredential <a name="IamServiceSpecificCredential" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential aws_iam_service_specific_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_service_specific_credential.IamServiceSpecificCredential;

IamServiceSpecificCredential.Builder.create(Construct scope, java.lang.String id)
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
    .serviceName(java.lang.String)
    .userName(java.lang.String)
//  .id(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#service_name IamServiceSpecificCredential#service_name}. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#user_name IamServiceSpecificCredential#user_name}. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#id IamServiceSpecificCredential#id}. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#status IamServiceSpecificCredential#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#service_name IamServiceSpecificCredential#service_name}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#user_name IamServiceSpecificCredential#user_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#id IamServiceSpecificCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#status IamServiceSpecificCredential#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.resetId"></a>

```java
public void resetId()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamServiceSpecificCredential resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_service_specific_credential.IamServiceSpecificCredential;

IamServiceSpecificCredential.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_service_specific_credential.IamServiceSpecificCredential;

IamServiceSpecificCredential.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_service_specific_credential.IamServiceSpecificCredential;

IamServiceSpecificCredential.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_service_specific_credential.IamServiceSpecificCredential;

IamServiceSpecificCredential.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamServiceSpecificCredential.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IamServiceSpecificCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamServiceSpecificCredential to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamServiceSpecificCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IamServiceSpecificCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.servicePassword">servicePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceSpecificCredentialId">serviceSpecificCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceUserName">serviceUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `servicePassword`<sup>Required</sup> <a name="servicePassword" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.servicePassword"></a>

```java
public java.lang.String getServicePassword();
```

- *Type:* java.lang.String

---

##### `serviceSpecificCredentialId`<sup>Required</sup> <a name="serviceSpecificCredentialId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceSpecificCredentialId"></a>

```java
public java.lang.String getServiceSpecificCredentialId();
```

- *Type:* java.lang.String

---

##### `serviceUserName`<sup>Required</sup> <a name="serviceUserName" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceUserName"></a>

```java
public java.lang.String getServiceUserName();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamServiceSpecificCredentialConfig <a name="IamServiceSpecificCredentialConfig" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_service_specific_credential.IamServiceSpecificCredentialConfig;

IamServiceSpecificCredentialConfig.builder()
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
    .serviceName(java.lang.String)
    .userName(java.lang.String)
//  .id(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#service_name IamServiceSpecificCredential#service_name}. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#user_name IamServiceSpecificCredential#user_name}. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#id IamServiceSpecificCredential#id}. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#status IamServiceSpecificCredential#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#service_name IamServiceSpecificCredential#service_name}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#user_name IamServiceSpecificCredential#user_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#id IamServiceSpecificCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/iam_service_specific_credential#status IamServiceSpecificCredential#status}.

---



