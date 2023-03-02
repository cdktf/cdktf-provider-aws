# `kinesisVideoStream` Submodule <a name="`kinesisVideoStream` Submodule" id="@cdktf/provider-aws.kinesisVideoStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisVideoStream <a name="KinesisVideoStream" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream aws_kinesis_video_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kinesis_video_stream.KinesisVideoStream;

KinesisVideoStream.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .dataRetentionInHours(java.lang.Number)
//  .deviceName(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .mediaType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KinesisVideoStreamTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#name KinesisVideoStream#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.dataRetentionInHours">dataRetentionInHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#data_retention_in_hours KinesisVideoStream#data_retention_in_hours}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#device_name KinesisVideoStream#device_name}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#id KinesisVideoStream#id}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#kms_key_id KinesisVideoStream#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.mediaType">mediaType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#media_type KinesisVideoStream#media_type}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#tags KinesisVideoStream#tags}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#tags_all KinesisVideoStream#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#name KinesisVideoStream#name}.

---

##### `dataRetentionInHours`<sup>Optional</sup> <a name="dataRetentionInHours" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.dataRetentionInHours"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#data_retention_in_hours KinesisVideoStream#data_retention_in_hours}.

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.deviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#device_name KinesisVideoStream#device_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#id KinesisVideoStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#kms_key_id KinesisVideoStream#kms_key_id}.

---

##### `mediaType`<sup>Optional</sup> <a name="mediaType" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.mediaType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#media_type KinesisVideoStream#media_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#tags KinesisVideoStream#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#tags_all KinesisVideoStream#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#timeouts KinesisVideoStream#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetDataRetentionInHours">resetDataRetentionInHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetMediaType">resetMediaType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.putTimeouts"></a>

```java
public void putTimeouts(KinesisVideoStreamTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a>

---

##### `resetDataRetentionInHours` <a name="resetDataRetentionInHours" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetDataRetentionInHours"></a>

```java
public void resetDataRetentionInHours()
```

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetDeviceName"></a>

```java
public void resetDeviceName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetMediaType` <a name="resetMediaType" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetMediaType"></a>

```java
public void resetMediaType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.kinesis_video_stream.KinesisVideoStream;

KinesisVideoStream.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.kinesis_video_stream.KinesisVideoStream;

KinesisVideoStream.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.kinesis_video_stream.KinesisVideoStream;

KinesisVideoStream.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference">KinesisVideoStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.dataRetentionInHoursInput">dataRetentionInHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.mediaTypeInput">mediaTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.dataRetentionInHours">dataRetentionInHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.mediaType">mediaType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.timeouts"></a>

```java
public KinesisVideoStreamTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference">KinesisVideoStreamTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `dataRetentionInHoursInput`<sup>Optional</sup> <a name="dataRetentionInHoursInput" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.dataRetentionInHoursInput"></a>

```java
public java.lang.Number getDataRetentionInHoursInput();
```

- *Type:* java.lang.Number

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `mediaTypeInput`<sup>Optional</sup> <a name="mediaTypeInput" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.mediaTypeInput"></a>

```java
public java.lang.String getMediaTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `dataRetentionInHours`<sup>Required</sup> <a name="dataRetentionInHours" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.dataRetentionInHours"></a>

```java
public java.lang.Number getDataRetentionInHours();
```

- *Type:* java.lang.Number

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `mediaType`<sup>Required</sup> <a name="mediaType" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.mediaType"></a>

```java
public java.lang.String getMediaType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisVideoStreamConfig <a name="KinesisVideoStreamConfig" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kinesis_video_stream.KinesisVideoStreamConfig;

KinesisVideoStreamConfig.builder()
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
    .name(java.lang.String)
//  .dataRetentionInHours(java.lang.Number)
//  .deviceName(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .mediaType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KinesisVideoStreamTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#name KinesisVideoStream#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.dataRetentionInHours">dataRetentionInHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#data_retention_in_hours KinesisVideoStream#data_retention_in_hours}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#device_name KinesisVideoStream#device_name}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#id KinesisVideoStream#id}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#kms_key_id KinesisVideoStream#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.mediaType">mediaType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#media_type KinesisVideoStream#media_type}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#tags KinesisVideoStream#tags}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#tags_all KinesisVideoStream#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#name KinesisVideoStream#name}.

---

##### `dataRetentionInHours`<sup>Optional</sup> <a name="dataRetentionInHours" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.dataRetentionInHours"></a>

```java
public java.lang.Number getDataRetentionInHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#data_retention_in_hours KinesisVideoStream#data_retention_in_hours}.

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#device_name KinesisVideoStream#device_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#id KinesisVideoStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#kms_key_id KinesisVideoStream#kms_key_id}.

---

##### `mediaType`<sup>Optional</sup> <a name="mediaType" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.mediaType"></a>

```java
public java.lang.String getMediaType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#media_type KinesisVideoStream#media_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#tags KinesisVideoStream#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#tags_all KinesisVideoStream#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.timeouts"></a>

```java
public KinesisVideoStreamTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#timeouts KinesisVideoStream#timeouts}

---

### KinesisVideoStreamTimeouts <a name="KinesisVideoStreamTimeouts" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kinesis_video_stream.KinesisVideoStreamTimeouts;

KinesisVideoStreamTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#create KinesisVideoStream#create}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#delete KinesisVideoStream#delete}. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#update KinesisVideoStream#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#create KinesisVideoStream#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#delete KinesisVideoStream#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream#update KinesisVideoStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisVideoStreamTimeoutsOutputReference <a name="KinesisVideoStreamTimeoutsOutputReference" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kinesis_video_stream.KinesisVideoStreamTimeoutsOutputReference;

new KinesisVideoStreamTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



