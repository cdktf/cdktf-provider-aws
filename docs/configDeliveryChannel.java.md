# `configDeliveryChannel` Submodule <a name="`configDeliveryChannel` Submodule" id="@cdktf/provider-aws.configDeliveryChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigDeliveryChannel <a name="ConfigDeliveryChannel" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel aws_config_delivery_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_delivery_channel.ConfigDeliveryChannel;

ConfigDeliveryChannel.Builder.create(Construct scope, java.lang.String id)
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
    .s3BucketName(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .s3KeyPrefix(java.lang.String)
//  .s3KmsKeyArn(java.lang.String)
//  .snapshotDeliveryProperties(ConfigDeliveryChannelSnapshotDeliveryProperties)
//  .snsTopicArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#id ConfigDeliveryChannel#id}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#name ConfigDeliveryChannel#name}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KmsKeyArn">s3KmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.snapshotDeliveryProperties">snapshotDeliveryProperties</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | snapshot_delivery_properties block. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3BucketName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#id ConfigDeliveryChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#name ConfigDeliveryChannel#name}.

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KeyPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}.

---

##### `s3KmsKeyArn`<sup>Optional</sup> <a name="s3KmsKeyArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}.

---

##### `snapshotDeliveryProperties`<sup>Optional</sup> <a name="snapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.snapshotDeliveryProperties"></a>

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

snapshot_delivery_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#snapshot_delivery_properties ConfigDeliveryChannel#snapshot_delivery_properties}

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.snsTopicArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.putSnapshotDeliveryProperties">putSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn">resetS3KmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnapshotDeliveryProperties">resetSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSnapshotDeliveryProperties` <a name="putSnapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.putSnapshotDeliveryProperties"></a>

```java
public void putSnapshotDeliveryProperties(ConfigDeliveryChannelSnapshotDeliveryProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.putSnapshotDeliveryProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetName"></a>

```java
public void resetName()
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix"></a>

```java
public void resetS3KeyPrefix()
```

##### `resetS3KmsKeyArn` <a name="resetS3KmsKeyArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn"></a>

```java
public void resetS3KmsKeyArn()
```

##### `resetSnapshotDeliveryProperties` <a name="resetSnapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnapshotDeliveryProperties"></a>

```java
public void resetSnapshotDeliveryProperties()
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn"></a>

```java
public void resetSnsTopicArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_delivery_channel.ConfigDeliveryChannel;

ConfigDeliveryChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_delivery_channel.ConfigDeliveryChannel;

ConfigDeliveryChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_delivery_channel.ConfigDeliveryChannel;

ConfigDeliveryChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryProperties">snapshotDeliveryProperties</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput">s3KmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryPropertiesInput">snapshotDeliveryPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn">s3KmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `snapshotDeliveryProperties`<sup>Required</sup> <a name="snapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryProperties"></a>

```java
public ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference getSnapshotDeliveryProperties();
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput"></a>

```java
public java.lang.String getS3KeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `s3KmsKeyArnInput`<sup>Optional</sup> <a name="s3KmsKeyArnInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput"></a>

```java
public java.lang.String getS3KmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `snapshotDeliveryPropertiesInput`<sup>Optional</sup> <a name="snapshotDeliveryPropertiesInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryPropertiesInput"></a>

```java
public ConfigDeliveryChannelSnapshotDeliveryProperties getSnapshotDeliveryPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput"></a>

```java
public java.lang.String getSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

---

##### `s3KmsKeyArn`<sup>Required</sup> <a name="s3KmsKeyArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn"></a>

```java
public java.lang.String getS3KmsKeyArn();
```

- *Type:* java.lang.String

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigDeliveryChannelConfig <a name="ConfigDeliveryChannelConfig" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_delivery_channel.ConfigDeliveryChannelConfig;

ConfigDeliveryChannelConfig.builder()
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
    .s3BucketName(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .s3KeyPrefix(java.lang.String)
//  .s3KmsKeyArn(java.lang.String)
//  .snapshotDeliveryProperties(ConfigDeliveryChannelSnapshotDeliveryProperties)
//  .snsTopicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#id ConfigDeliveryChannel#id}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#name ConfigDeliveryChannel#name}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn">s3KmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snapshotDeliveryProperties">snapshotDeliveryProperties</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | snapshot_delivery_properties block. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#id ConfigDeliveryChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#name ConfigDeliveryChannel#name}.

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}.

---

##### `s3KmsKeyArn`<sup>Optional</sup> <a name="s3KmsKeyArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn"></a>

```java
public java.lang.String getS3KmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}.

---

##### `snapshotDeliveryProperties`<sup>Optional</sup> <a name="snapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snapshotDeliveryProperties"></a>

```java
public ConfigDeliveryChannelSnapshotDeliveryProperties getSnapshotDeliveryProperties();
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

snapshot_delivery_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#snapshot_delivery_properties ConfigDeliveryChannel#snapshot_delivery_properties}

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}.

---

### ConfigDeliveryChannelSnapshotDeliveryProperties <a name="ConfigDeliveryChannelSnapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_delivery_channel.ConfigDeliveryChannelSnapshotDeliveryProperties;

ConfigDeliveryChannelSnapshotDeliveryProperties.builder()
//  .deliveryFrequency(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties.property.deliveryFrequency">deliveryFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}. |

---

##### `deliveryFrequency`<sup>Optional</sup> <a name="deliveryFrequency" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties.property.deliveryFrequency"></a>

```java
public java.lang.String getDeliveryFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference <a name="ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_delivery_channel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference;

new ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency">resetDeliveryFrequency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryFrequency` <a name="resetDeliveryFrequency" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency"></a>

```java
public void resetDeliveryFrequency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput">deliveryFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency">deliveryFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryFrequencyInput`<sup>Optional</sup> <a name="deliveryFrequencyInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput"></a>

```java
public java.lang.String getDeliveryFrequencyInput();
```

- *Type:* java.lang.String

---

##### `deliveryFrequency`<sup>Required</sup> <a name="deliveryFrequency" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency"></a>

```java
public java.lang.String getDeliveryFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.internalValue"></a>

```java
public ConfigDeliveryChannelSnapshotDeliveryProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

---



