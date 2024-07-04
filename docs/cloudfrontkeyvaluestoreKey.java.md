# `cloudfrontkeyvaluestoreKey` Submodule <a name="`cloudfrontkeyvaluestoreKey` Submodule" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontkeyvaluestoreKey <a name="CloudfrontkeyvaluestoreKey" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/cloudfrontkeyvaluestore_key aws_cloudfrontkeyvaluestore_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_key.CloudfrontkeyvaluestoreKey;

CloudfrontkeyvaluestoreKey.Builder.create(Construct scope, java.lang.String id)
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
    .key(java.lang.String)
    .keyValueStoreArn(java.lang.String)
    .value(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | The key to put. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.keyValueStoreArn">keyValueStoreArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Key Value Store. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | The value to put. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.key"></a>

- *Type:* java.lang.String

The key to put.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/cloudfrontkeyvaluestore_key#key CloudfrontkeyvaluestoreKey#key}

---

##### `keyValueStoreArn`<sup>Required</sup> <a name="keyValueStoreArn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.keyValueStoreArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Key Value Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/cloudfrontkeyvaluestore_key#key_value_store_arn CloudfrontkeyvaluestoreKey#key_value_store_arn}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.Initializer.parameter.value"></a>

- *Type:* java.lang.String

The value to put.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/cloudfrontkeyvaluestore_key#value CloudfrontkeyvaluestoreKey#value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontkeyvaluestoreKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_key.CloudfrontkeyvaluestoreKey;

CloudfrontkeyvaluestoreKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_key.CloudfrontkeyvaluestoreKey;

CloudfrontkeyvaluestoreKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_key.CloudfrontkeyvaluestoreKey;

CloudfrontkeyvaluestoreKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_key.CloudfrontkeyvaluestoreKey;

CloudfrontkeyvaluestoreKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudfrontkeyvaluestoreKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudfrontkeyvaluestoreKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudfrontkeyvaluestoreKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudfrontkeyvaluestoreKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/cloudfrontkeyvaluestore_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontkeyvaluestoreKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.totalSizeInBytes">totalSizeInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.keyValueStoreArnInput">keyValueStoreArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.keyValueStoreArn">keyValueStoreArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `totalSizeInBytes`<sup>Required</sup> <a name="totalSizeInBytes" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.totalSizeInBytes"></a>

```java
public java.lang.Number getTotalSizeInBytes();
```

- *Type:* java.lang.Number

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `keyValueStoreArnInput`<sup>Optional</sup> <a name="keyValueStoreArnInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.keyValueStoreArnInput"></a>

```java
public java.lang.String getKeyValueStoreArnInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `keyValueStoreArn`<sup>Required</sup> <a name="keyValueStoreArn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.keyValueStoreArn"></a>

```java
public java.lang.String getKeyValueStoreArn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontkeyvaluestoreKeyConfig <a name="CloudfrontkeyvaluestoreKeyConfig" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_key.CloudfrontkeyvaluestoreKeyConfig;

CloudfrontkeyvaluestoreKeyConfig.builder()
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
    .key(java.lang.String)
    .keyValueStoreArn(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.key">key</a></code> | <code>java.lang.String</code> | The key to put. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.keyValueStoreArn">keyValueStoreArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Key Value Store. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.value">value</a></code> | <code>java.lang.String</code> | The value to put. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key to put.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/cloudfrontkeyvaluestore_key#key CloudfrontkeyvaluestoreKey#key}

---

##### `keyValueStoreArn`<sup>Required</sup> <a name="keyValueStoreArn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.keyValueStoreArn"></a>

```java
public java.lang.String getKeyValueStoreArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Key Value Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/cloudfrontkeyvaluestore_key#key_value_store_arn CloudfrontkeyvaluestoreKey#key_value_store_arn}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKey.CloudfrontkeyvaluestoreKeyConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value to put.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/cloudfrontkeyvaluestore_key#value CloudfrontkeyvaluestoreKey#value}

---



