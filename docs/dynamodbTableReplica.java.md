# `dynamodbTableReplica` Submodule <a name="`dynamodbTableReplica` Submodule" id="@cdktf/provider-aws.dynamodbTableReplica"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTableReplicaA <a name="DynamodbTableReplicaA" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica aws_dynamodb_table_replica}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_replica.DynamodbTableReplicaA;

DynamodbTableReplicaA.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .globalTableArn(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .pointInTimeRecovery(java.lang.Boolean)
//  .pointInTimeRecovery(IResolvable)
//  .tableClassOverride(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DynamodbTableReplicaTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.globalTableArn">globalTableArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#global_table_arn DynamodbTableReplicaA#global_table_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#id DynamodbTableReplicaA#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#kms_key_arn DynamodbTableReplicaA#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#point_in_time_recovery DynamodbTableReplicaA#point_in_time_recovery}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.tableClassOverride">tableClassOverride</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#table_class_override DynamodbTableReplicaA#table_class_override}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#tags DynamodbTableReplicaA#tags}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#tags_all DynamodbTableReplicaA#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `globalTableArn`<sup>Required</sup> <a name="globalTableArn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.globalTableArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#global_table_arn DynamodbTableReplicaA#global_table_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#id DynamodbTableReplicaA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#kms_key_arn DynamodbTableReplicaA#kms_key_arn}.

---

##### `pointInTimeRecovery`<sup>Optional</sup> <a name="pointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.pointInTimeRecovery"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#point_in_time_recovery DynamodbTableReplicaA#point_in_time_recovery}.

---

##### `tableClassOverride`<sup>Optional</sup> <a name="tableClassOverride" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.tableClassOverride"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#table_class_override DynamodbTableReplicaA#table_class_override}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#tags DynamodbTableReplicaA#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#tags_all DynamodbTableReplicaA#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#timeouts DynamodbTableReplicaA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetPointInTimeRecovery">resetPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTableClassOverride">resetTableClassOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.putTimeouts"></a>

```java
public void putTimeouts(DynamodbTableReplicaTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetPointInTimeRecovery` <a name="resetPointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetPointInTimeRecovery"></a>

```java
public void resetPointInTimeRecovery()
```

##### `resetTableClassOverride` <a name="resetTableClassOverride" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTableClassOverride"></a>

```java
public void resetTableClassOverride()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_replica.DynamodbTableReplicaA;

DynamodbTableReplicaA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_replica.DynamodbTableReplicaA;

DynamodbTableReplicaA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_replica.DynamodbTableReplicaA;

DynamodbTableReplicaA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference">DynamodbTableReplicaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.globalTableArnInput">globalTableArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.pointInTimeRecoveryInput">pointInTimeRecoveryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tableClassOverrideInput">tableClassOverrideInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.globalTableArn">globalTableArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tableClassOverride">tableClassOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.timeouts"></a>

```java
public DynamodbTableReplicaTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference">DynamodbTableReplicaTimeoutsOutputReference</a>

---

##### `globalTableArnInput`<sup>Optional</sup> <a name="globalTableArnInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.globalTableArnInput"></a>

```java
public java.lang.String getGlobalTableArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `pointInTimeRecoveryInput`<sup>Optional</sup> <a name="pointInTimeRecoveryInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.pointInTimeRecoveryInput"></a>

```java
public java.lang.Object getPointInTimeRecoveryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tableClassOverrideInput`<sup>Optional</sup> <a name="tableClassOverrideInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tableClassOverrideInput"></a>

```java
public java.lang.String getTableClassOverrideInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `globalTableArn`<sup>Required</sup> <a name="globalTableArn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.globalTableArn"></a>

```java
public java.lang.String getGlobalTableArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `pointInTimeRecovery`<sup>Required</sup> <a name="pointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.pointInTimeRecovery"></a>

```java
public java.lang.Object getPointInTimeRecovery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tableClassOverride`<sup>Required</sup> <a name="tableClassOverride" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tableClassOverride"></a>

```java
public java.lang.String getTableClassOverride();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableReplicaAConfig <a name="DynamodbTableReplicaAConfig" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_replica.DynamodbTableReplicaAConfig;

DynamodbTableReplicaAConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .globalTableArn(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .pointInTimeRecovery(java.lang.Boolean)
//  .pointInTimeRecovery(IResolvable)
//  .tableClassOverride(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DynamodbTableReplicaTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.globalTableArn">globalTableArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#global_table_arn DynamodbTableReplicaA#global_table_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#id DynamodbTableReplicaA#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#kms_key_arn DynamodbTableReplicaA#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#point_in_time_recovery DynamodbTableReplicaA#point_in_time_recovery}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tableClassOverride">tableClassOverride</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#table_class_override DynamodbTableReplicaA#table_class_override}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#tags DynamodbTableReplicaA#tags}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#tags_all DynamodbTableReplicaA#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `globalTableArn`<sup>Required</sup> <a name="globalTableArn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.globalTableArn"></a>

```java
public java.lang.String getGlobalTableArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#global_table_arn DynamodbTableReplicaA#global_table_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#id DynamodbTableReplicaA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#kms_key_arn DynamodbTableReplicaA#kms_key_arn}.

---

##### `pointInTimeRecovery`<sup>Optional</sup> <a name="pointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.pointInTimeRecovery"></a>

```java
public java.lang.Object getPointInTimeRecovery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#point_in_time_recovery DynamodbTableReplicaA#point_in_time_recovery}.

---

##### `tableClassOverride`<sup>Optional</sup> <a name="tableClassOverride" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tableClassOverride"></a>

```java
public java.lang.String getTableClassOverride();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#table_class_override DynamodbTableReplicaA#table_class_override}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#tags DynamodbTableReplicaA#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#tags_all DynamodbTableReplicaA#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.timeouts"></a>

```java
public DynamodbTableReplicaTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#timeouts DynamodbTableReplicaA#timeouts}

---

### DynamodbTableReplicaTimeouts <a name="DynamodbTableReplicaTimeouts" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_replica.DynamodbTableReplicaTimeouts;

DynamodbTableReplicaTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#create DynamodbTableReplicaA#create}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#delete DynamodbTableReplicaA#delete}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#update DynamodbTableReplicaA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#create DynamodbTableReplicaA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#delete DynamodbTableReplicaA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#update DynamodbTableReplicaA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableReplicaTimeoutsOutputReference <a name="DynamodbTableReplicaTimeoutsOutputReference" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_replica.DynamodbTableReplicaTimeoutsOutputReference;

new DynamodbTableReplicaTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



