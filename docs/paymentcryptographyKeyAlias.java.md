# `paymentcryptographyKeyAlias` Submodule <a name="`paymentcryptographyKeyAlias` Submodule" id="@cdktf/provider-aws.paymentcryptographyKeyAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaymentcryptographyKeyAlias <a name="PaymentcryptographyKeyAlias" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/paymentcryptography_key_alias aws_paymentcryptography_key_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key_alias.PaymentcryptographyKeyAlias;

PaymentcryptographyKeyAlias.Builder.create(Construct scope, java.lang.String id)
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
    .aliasName(java.lang.String)
//  .keyArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.aliasName">aliasName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/paymentcryptography_key_alias#alias_name PaymentcryptographyKeyAlias#alias_name}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.keyArn">keyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/paymentcryptography_key_alias#key_arn PaymentcryptographyKeyAlias#key_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.aliasName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/paymentcryptography_key_alias#alias_name PaymentcryptographyKeyAlias#alias_name}.

---

##### `keyArn`<sup>Optional</sup> <a name="keyArn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.keyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/paymentcryptography_key_alias#key_arn PaymentcryptographyKeyAlias#key_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.resetKeyArn">resetKeyArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKeyArn` <a name="resetKeyArn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.resetKeyArn"></a>

```java
public void resetKeyArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PaymentcryptographyKeyAlias resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key_alias.PaymentcryptographyKeyAlias;

PaymentcryptographyKeyAlias.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key_alias.PaymentcryptographyKeyAlias;

PaymentcryptographyKeyAlias.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key_alias.PaymentcryptographyKeyAlias;

PaymentcryptographyKeyAlias.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key_alias.PaymentcryptographyKeyAlias;

PaymentcryptographyKeyAlias.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PaymentcryptographyKeyAlias.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PaymentcryptographyKeyAlias resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PaymentcryptographyKeyAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PaymentcryptographyKeyAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/paymentcryptography_key_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PaymentcryptographyKeyAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.aliasNameInput">aliasNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.keyArnInput">keyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `aliasNameInput`<sup>Optional</sup> <a name="aliasNameInput" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.aliasNameInput"></a>

```java
public java.lang.String getAliasNameInput();
```

- *Type:* java.lang.String

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.keyArnInput"></a>

```java
public java.lang.String getKeyArnInput();
```

- *Type:* java.lang.String

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PaymentcryptographyKeyAliasConfig <a name="PaymentcryptographyKeyAliasConfig" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key_alias.PaymentcryptographyKeyAliasConfig;

PaymentcryptographyKeyAliasConfig.builder()
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
    .aliasName(java.lang.String)
//  .keyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/paymentcryptography_key_alias#alias_name PaymentcryptographyKeyAlias#alias_name}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/paymentcryptography_key_alias#key_arn PaymentcryptographyKeyAlias#key_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/paymentcryptography_key_alias#alias_name PaymentcryptographyKeyAlias#alias_name}.

---

##### `keyArn`<sup>Optional</sup> <a name="keyArn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/paymentcryptography_key_alias#key_arn PaymentcryptographyKeyAlias#key_arn}.

---



