# `cloudfrontkeyvaluestoreKeysExclusive` Submodule <a name="`cloudfrontkeyvaluestoreKeysExclusive` Submodule" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontkeyvaluestoreKeysExclusive <a name="CloudfrontkeyvaluestoreKeysExclusive" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive aws_cloudfrontkeyvaluestore_keys_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_keys_exclusive.CloudfrontkeyvaluestoreKeysExclusive;

CloudfrontkeyvaluestoreKeysExclusive.Builder.create(Construct scope, java.lang.String id)
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
    .keyValueStoreArn(java.lang.String)
//  .maxBatchSize(java.lang.Number)
//  .resourceKeyValuePair(IResolvable)
//  .resourceKeyValuePair(java.util.List<CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.keyValueStoreArn">keyValueStoreArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Key Value Store. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.maxBatchSize">maxBatchSize</a></code> | <code>java.lang.Number</code> | Maximum resource key values pairs that you wills update in a single API request. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.resourceKeyValuePair">resourceKeyValuePair</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair</a>></code> | resource_key_value_pair block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyValueStoreArn`<sup>Required</sup> <a name="keyValueStoreArn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.keyValueStoreArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Key Value Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#key_value_store_arn CloudfrontkeyvaluestoreKeysExclusive#key_value_store_arn}

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.maxBatchSize"></a>

- *Type:* java.lang.Number

Maximum resource key values pairs that you wills update in a single API request.

AWS has a default quota of 50 keys or a 3 MB payload, whichever is reached first

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#max_batch_size CloudfrontkeyvaluestoreKeysExclusive#max_batch_size}

---

##### `resourceKeyValuePair`<sup>Optional</sup> <a name="resourceKeyValuePair" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.resourceKeyValuePair"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair</a>>

resource_key_value_pair block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#resource_key_value_pair CloudfrontkeyvaluestoreKeysExclusive#resource_key_value_pair}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.putResourceKeyValuePair">putResourceKeyValuePair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.resetMaxBatchSize">resetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.resetResourceKeyValuePair">resetResourceKeyValuePair</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceKeyValuePair` <a name="putResourceKeyValuePair" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.putResourceKeyValuePair"></a>

```java
public void putResourceKeyValuePair(IResolvable OR java.util.List<CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.putResourceKeyValuePair.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair</a>>

---

##### `resetMaxBatchSize` <a name="resetMaxBatchSize" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.resetMaxBatchSize"></a>

```java
public void resetMaxBatchSize()
```

##### `resetResourceKeyValuePair` <a name="resetResourceKeyValuePair" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.resetResourceKeyValuePair"></a>

```java
public void resetResourceKeyValuePair()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontkeyvaluestoreKeysExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_keys_exclusive.CloudfrontkeyvaluestoreKeysExclusive;

CloudfrontkeyvaluestoreKeysExclusive.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_keys_exclusive.CloudfrontkeyvaluestoreKeysExclusive;

CloudfrontkeyvaluestoreKeysExclusive.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_keys_exclusive.CloudfrontkeyvaluestoreKeysExclusive;

CloudfrontkeyvaluestoreKeysExclusive.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_keys_exclusive.CloudfrontkeyvaluestoreKeysExclusive;

CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudfrontkeyvaluestoreKeysExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudfrontkeyvaluestoreKeysExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudfrontkeyvaluestoreKeysExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontkeyvaluestoreKeysExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.resourceKeyValuePair">resourceKeyValuePair</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.totalSizeInBytes">totalSizeInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.keyValueStoreArnInput">keyValueStoreArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.maxBatchSizeInput">maxBatchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.resourceKeyValuePairInput">resourceKeyValuePairInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.keyValueStoreArn">keyValueStoreArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.maxBatchSize">maxBatchSize</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceKeyValuePair`<sup>Required</sup> <a name="resourceKeyValuePair" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.resourceKeyValuePair"></a>

```java
public CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList getResourceKeyValuePair();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList</a>

---

##### `totalSizeInBytes`<sup>Required</sup> <a name="totalSizeInBytes" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.totalSizeInBytes"></a>

```java
public java.lang.Number getTotalSizeInBytes();
```

- *Type:* java.lang.Number

---

##### `keyValueStoreArnInput`<sup>Optional</sup> <a name="keyValueStoreArnInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.keyValueStoreArnInput"></a>

```java
public java.lang.String getKeyValueStoreArnInput();
```

- *Type:* java.lang.String

---

##### `maxBatchSizeInput`<sup>Optional</sup> <a name="maxBatchSizeInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.maxBatchSizeInput"></a>

```java
public java.lang.Number getMaxBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `resourceKeyValuePairInput`<sup>Optional</sup> <a name="resourceKeyValuePairInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.resourceKeyValuePairInput"></a>

```java
public java.lang.Object getResourceKeyValuePairInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair</a>>

---

##### `keyValueStoreArn`<sup>Required</sup> <a name="keyValueStoreArn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.keyValueStoreArn"></a>

```java
public java.lang.String getKeyValueStoreArn();
```

- *Type:* java.lang.String

---

##### `maxBatchSize`<sup>Required</sup> <a name="maxBatchSize" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.maxBatchSize"></a>

```java
public java.lang.Number getMaxBatchSize();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontkeyvaluestoreKeysExclusiveConfig <a name="CloudfrontkeyvaluestoreKeysExclusiveConfig" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_keys_exclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig;

CloudfrontkeyvaluestoreKeysExclusiveConfig.builder()
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
    .keyValueStoreArn(java.lang.String)
//  .maxBatchSize(java.lang.Number)
//  .resourceKeyValuePair(IResolvable)
//  .resourceKeyValuePair(java.util.List<CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.keyValueStoreArn">keyValueStoreArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Key Value Store. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.maxBatchSize">maxBatchSize</a></code> | <code>java.lang.Number</code> | Maximum resource key values pairs that you wills update in a single API request. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.resourceKeyValuePair">resourceKeyValuePair</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair</a>></code> | resource_key_value_pair block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyValueStoreArn`<sup>Required</sup> <a name="keyValueStoreArn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.keyValueStoreArn"></a>

```java
public java.lang.String getKeyValueStoreArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Key Value Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#key_value_store_arn CloudfrontkeyvaluestoreKeysExclusive#key_value_store_arn}

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.maxBatchSize"></a>

```java
public java.lang.Number getMaxBatchSize();
```

- *Type:* java.lang.Number

Maximum resource key values pairs that you wills update in a single API request.

AWS has a default quota of 50 keys or a 3 MB payload, whichever is reached first

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#max_batch_size CloudfrontkeyvaluestoreKeysExclusive#max_batch_size}

---

##### `resourceKeyValuePair`<sup>Optional</sup> <a name="resourceKeyValuePair" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.resourceKeyValuePair"></a>

```java
public java.lang.Object getResourceKeyValuePair();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair</a>>

resource_key_value_pair block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#resource_key_value_pair CloudfrontkeyvaluestoreKeysExclusive#resource_key_value_pair}

---

### CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair <a name="CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_keys_exclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair;

CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair.property.key">key</a></code> | <code>java.lang.String</code> | The key to put. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair.property.value">value</a></code> | <code>java.lang.String</code> | The value to put. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key to put.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#key CloudfrontkeyvaluestoreKeysExclusive#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value to put.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#value CloudfrontkeyvaluestoreKeysExclusive#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList <a name="CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_keys_exclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList;

new CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.get"></a>

```java
public CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair</a>>

---


### CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference <a name="CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfrontkeyvaluestore_keys_exclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference;

new CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair</a>

---



