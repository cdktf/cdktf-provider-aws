# `codebuildSourceCredential` Submodule <a name="`codebuildSourceCredential` Submodule" id="@cdktf/provider-aws.codebuildSourceCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildSourceCredential <a name="CodebuildSourceCredential" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential aws_codebuild_source_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_source_credential.CodebuildSourceCredential;

CodebuildSourceCredential.Builder.create(Construct scope, java.lang.String id)
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
    .authType(java.lang.String)
    .serverType(java.lang.String)
    .token(java.lang.String)
//  .id(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#auth_type CodebuildSourceCredential#auth_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.serverType">serverType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#server_type CodebuildSourceCredential#server_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#token CodebuildSourceCredential#token}. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#id CodebuildSourceCredential#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#user_name CodebuildSourceCredential#user_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.authType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#auth_type CodebuildSourceCredential#auth_type}.

---

##### `serverType`<sup>Required</sup> <a name="serverType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.serverType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#server_type CodebuildSourceCredential#server_type}.

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#token CodebuildSourceCredential#token}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#id CodebuildSourceCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#user_name CodebuildSourceCredential#user_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetId"></a>

```java
public void resetId()
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetUserName"></a>

```java
public void resetUserName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodebuildSourceCredential resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_source_credential.CodebuildSourceCredential;

CodebuildSourceCredential.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_source_credential.CodebuildSourceCredential;

CodebuildSourceCredential.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_source_credential.CodebuildSourceCredential;

CodebuildSourceCredential.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_source_credential.CodebuildSourceCredential;

CodebuildSourceCredential.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodebuildSourceCredential.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CodebuildSourceCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodebuildSourceCredential to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodebuildSourceCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CodebuildSourceCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.serverTypeInput">serverTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.serverType">serverType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `serverTypeInput`<sup>Optional</sup> <a name="serverTypeInput" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.serverTypeInput"></a>

```java
public java.lang.String getServerTypeInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serverType`<sup>Required</sup> <a name="serverType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.serverType"></a>

```java
public java.lang.String getServerType();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildSourceCredentialConfig <a name="CodebuildSourceCredentialConfig" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_source_credential.CodebuildSourceCredentialConfig;

CodebuildSourceCredentialConfig.builder()
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
    .authType(java.lang.String)
    .serverType(java.lang.String)
    .token(java.lang.String)
//  .id(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#auth_type CodebuildSourceCredential#auth_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.serverType">serverType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#server_type CodebuildSourceCredential#server_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#token CodebuildSourceCredential#token}. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#id CodebuildSourceCredential#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#user_name CodebuildSourceCredential#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#auth_type CodebuildSourceCredential#auth_type}.

---

##### `serverType`<sup>Required</sup> <a name="serverType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.serverType"></a>

```java
public java.lang.String getServerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#server_type CodebuildSourceCredential#server_type}.

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#token CodebuildSourceCredential#token}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#id CodebuildSourceCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/codebuild_source_credential#user_name CodebuildSourceCredential#user_name}.

---



