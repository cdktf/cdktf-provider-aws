# `rekognitionStreamProcessor` Submodule <a name="`rekognitionStreamProcessor` Submodule" id="@cdktf/provider-aws.rekognitionStreamProcessor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RekognitionStreamProcessor <a name="RekognitionStreamProcessor" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor aws_rekognition_stream_processor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessor;

RekognitionStreamProcessor.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .dataSharingPreference(IResolvable)
//  .dataSharingPreference(java.util.List<RekognitionStreamProcessorDataSharingPreference>)
//  .input(IResolvable)
//  .input(java.util.List<RekognitionStreamProcessorInput>)
//  .kmsKeyId(java.lang.String)
//  .notificationChannel(IResolvable)
//  .notificationChannel(java.util.List<RekognitionStreamProcessorNotificationChannel>)
//  .output(IResolvable)
//  .output(java.util.List<RekognitionStreamProcessorOutput>)
//  .region(java.lang.String)
//  .regionsOfInterest(IResolvable)
//  .regionsOfInterest(java.util.List<RekognitionStreamProcessorRegionsOfInterest>)
//  .settings(IResolvable)
//  .settings(java.util.List<RekognitionStreamProcessorSettings>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RekognitionStreamProcessorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | An identifier you assign to the stream processor. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.dataSharingPreference">dataSharingPreference</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>></code> | data_sharing_preference block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.input">input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>></code> | input block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The identifier for your AWS Key Management Service key (AWS KMS key). |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.notificationChannel">notificationChannel</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>></code> | notification_channel block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.output">output</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>></code> | output block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.regionsOfInterest">regionsOfInterest</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>></code> | regions_of_interest block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.settings">settings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>></code> | settings block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.name"></a>

- *Type:* java.lang.String

An identifier you assign to the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#name RekognitionStreamProcessor#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#role_arn RekognitionStreamProcessor#role_arn}

---

##### `dataSharingPreference`<sup>Optional</sup> <a name="dataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.dataSharingPreference"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>>

data_sharing_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#data_sharing_preference RekognitionStreamProcessor#data_sharing_preference}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.input"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#input RekognitionStreamProcessor#input}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The identifier for your AWS Key Management Service key (AWS KMS key).

You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#kms_key_id RekognitionStreamProcessor#kms_key_id}

---

##### `notificationChannel`<sup>Optional</sup> <a name="notificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.notificationChannel"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>>

notification_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#notification_channel RekognitionStreamProcessor#notification_channel}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.output"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#output RekognitionStreamProcessor#output}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#region RekognitionStreamProcessor#region}

---

##### `regionsOfInterest`<sup>Optional</sup> <a name="regionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.regionsOfInterest"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>>

regions_of_interest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#regions_of_interest RekognitionStreamProcessor#regions_of_interest}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.settings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#settings RekognitionStreamProcessor#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#timeouts RekognitionStreamProcessor#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putDataSharingPreference">putDataSharingPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putNotificationChannel">putNotificationChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putRegionsOfInterest">putRegionsOfInterest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetDataSharingPreference">resetDataSharingPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetNotificationChannel">resetNotificationChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetRegionsOfInterest">resetRegionsOfInterest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSharingPreference` <a name="putDataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putDataSharingPreference"></a>

```java
public void putDataSharingPreference(IResolvable OR java.util.List<RekognitionStreamProcessorDataSharingPreference> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putDataSharingPreference.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>>

---

##### `putInput` <a name="putInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putInput"></a>

```java
public void putInput(IResolvable OR java.util.List<RekognitionStreamProcessorInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putInput.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>>

---

##### `putNotificationChannel` <a name="putNotificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putNotificationChannel"></a>

```java
public void putNotificationChannel(IResolvable OR java.util.List<RekognitionStreamProcessorNotificationChannel> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putNotificationChannel.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>>

---

##### `putOutput` <a name="putOutput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putOutput"></a>

```java
public void putOutput(IResolvable OR java.util.List<RekognitionStreamProcessorOutput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putOutput.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>>

---

##### `putRegionsOfInterest` <a name="putRegionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putRegionsOfInterest"></a>

```java
public void putRegionsOfInterest(IResolvable OR java.util.List<RekognitionStreamProcessorRegionsOfInterest> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putRegionsOfInterest.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>>

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putSettings"></a>

```java
public void putSettings(IResolvable OR java.util.List<RekognitionStreamProcessorSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putSettings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putTimeouts"></a>

```java
public void putTimeouts(RekognitionStreamProcessorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>

---

##### `resetDataSharingPreference` <a name="resetDataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetDataSharingPreference"></a>

```java
public void resetDataSharingPreference()
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetInput"></a>

```java
public void resetInput()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetNotificationChannel` <a name="resetNotificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetNotificationChannel"></a>

```java
public void resetNotificationChannel()
```

##### `resetOutput` <a name="resetOutput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOutput"></a>

```java
public void resetOutput()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRegionsOfInterest` <a name="resetRegionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetRegionsOfInterest"></a>

```java
public void resetRegionsOfInterest()
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RekognitionStreamProcessor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessor;

RekognitionStreamProcessor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessor;

RekognitionStreamProcessor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessor;

RekognitionStreamProcessor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessor;

RekognitionStreamProcessor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RekognitionStreamProcessor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RekognitionStreamProcessor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RekognitionStreamProcessor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RekognitionStreamProcessor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RekognitionStreamProcessor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreference">dataSharingPreference</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList">RekognitionStreamProcessorDataSharingPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.input">input</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList">RekognitionStreamProcessorInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannel">notificationChannel</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList">RekognitionStreamProcessorNotificationChannelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.output">output</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList">RekognitionStreamProcessorOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterest">regionsOfInterest</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList">RekognitionStreamProcessorRegionsOfInterestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList">RekognitionStreamProcessorSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.streamProcessorArn">streamProcessorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference">RekognitionStreamProcessorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreferenceInput">dataSharingPreferenceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.inputInput">inputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannelInput">notificationChannelInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.outputInput">outputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterestInput">regionsOfInterestInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settingsInput">settingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dataSharingPreference`<sup>Required</sup> <a name="dataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreference"></a>

```java
public RekognitionStreamProcessorDataSharingPreferenceList getDataSharingPreference();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList">RekognitionStreamProcessorDataSharingPreferenceList</a>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.input"></a>

```java
public RekognitionStreamProcessorInputList getInput();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList">RekognitionStreamProcessorInputList</a>

---

##### `notificationChannel`<sup>Required</sup> <a name="notificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannel"></a>

```java
public RekognitionStreamProcessorNotificationChannelList getNotificationChannel();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList">RekognitionStreamProcessorNotificationChannelList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.output"></a>

```java
public RekognitionStreamProcessorOutputList getOutput();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList">RekognitionStreamProcessorOutputList</a>

---

##### `regionsOfInterest`<sup>Required</sup> <a name="regionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterest"></a>

```java
public RekognitionStreamProcessorRegionsOfInterestList getRegionsOfInterest();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList">RekognitionStreamProcessorRegionsOfInterestList</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settings"></a>

```java
public RekognitionStreamProcessorSettingsList getSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList">RekognitionStreamProcessorSettingsList</a>

---

##### `streamProcessorArn`<sup>Required</sup> <a name="streamProcessorArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.streamProcessorArn"></a>

```java
public java.lang.String getStreamProcessorArn();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeouts"></a>

```java
public RekognitionStreamProcessorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference">RekognitionStreamProcessorTimeoutsOutputReference</a>

---

##### `dataSharingPreferenceInput`<sup>Optional</sup> <a name="dataSharingPreferenceInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreferenceInput"></a>

```java
public java.lang.Object getDataSharingPreferenceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.inputInput"></a>

```java
public java.lang.Object getInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationChannelInput`<sup>Optional</sup> <a name="notificationChannelInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannelInput"></a>

```java
public java.lang.Object getNotificationChannelInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>>

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.outputInput"></a>

```java
public java.lang.Object getOutputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `regionsOfInterestInput`<sup>Optional</sup> <a name="regionsOfInterestInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterestInput"></a>

```java
public java.lang.Object getRegionsOfInterestInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settingsInput"></a>

```java
public java.lang.Object getSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RekognitionStreamProcessorConfig <a name="RekognitionStreamProcessorConfig" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorConfig;

RekognitionStreamProcessorConfig.builder()
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
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .dataSharingPreference(IResolvable)
//  .dataSharingPreference(java.util.List<RekognitionStreamProcessorDataSharingPreference>)
//  .input(IResolvable)
//  .input(java.util.List<RekognitionStreamProcessorInput>)
//  .kmsKeyId(java.lang.String)
//  .notificationChannel(IResolvable)
//  .notificationChannel(java.util.List<RekognitionStreamProcessorNotificationChannel>)
//  .output(IResolvable)
//  .output(java.util.List<RekognitionStreamProcessorOutput>)
//  .region(java.lang.String)
//  .regionsOfInterest(IResolvable)
//  .regionsOfInterest(java.util.List<RekognitionStreamProcessorRegionsOfInterest>)
//  .settings(IResolvable)
//  .settings(java.util.List<RekognitionStreamProcessorSettings>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RekognitionStreamProcessorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.name">name</a></code> | <code>java.lang.String</code> | An identifier you assign to the stream processor. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dataSharingPreference">dataSharingPreference</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>></code> | data_sharing_preference block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.input">input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>></code> | input block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The identifier for your AWS Key Management Service key (AWS KMS key). |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.notificationChannel">notificationChannel</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>></code> | notification_channel block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.output">output</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>></code> | output block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.regionsOfInterest">regionsOfInterest</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>></code> | regions_of_interest block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.settings">settings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>></code> | settings block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

An identifier you assign to the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#name RekognitionStreamProcessor#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#role_arn RekognitionStreamProcessor#role_arn}

---

##### `dataSharingPreference`<sup>Optional</sup> <a name="dataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dataSharingPreference"></a>

```java
public java.lang.Object getDataSharingPreference();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>>

data_sharing_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#data_sharing_preference RekognitionStreamProcessor#data_sharing_preference}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.input"></a>

```java
public java.lang.Object getInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#input RekognitionStreamProcessor#input}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The identifier for your AWS Key Management Service key (AWS KMS key).

You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#kms_key_id RekognitionStreamProcessor#kms_key_id}

---

##### `notificationChannel`<sup>Optional</sup> <a name="notificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.notificationChannel"></a>

```java
public java.lang.Object getNotificationChannel();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>>

notification_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#notification_channel RekognitionStreamProcessor#notification_channel}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.output"></a>

```java
public java.lang.Object getOutput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#output RekognitionStreamProcessor#output}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#region RekognitionStreamProcessor#region}

---

##### `regionsOfInterest`<sup>Optional</sup> <a name="regionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.regionsOfInterest"></a>

```java
public java.lang.Object getRegionsOfInterest();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>>

regions_of_interest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#regions_of_interest RekognitionStreamProcessor#regions_of_interest}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.settings"></a>

```java
public java.lang.Object getSettings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#settings RekognitionStreamProcessor#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.timeouts"></a>

```java
public RekognitionStreamProcessorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#timeouts RekognitionStreamProcessor#timeouts}

---

### RekognitionStreamProcessorDataSharingPreference <a name="RekognitionStreamProcessorDataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorDataSharingPreference;

RekognitionStreamProcessorDataSharingPreference.builder()
    .optIn(java.lang.Boolean)
    .optIn(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference.property.optIn">optIn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do you want to share data with Rekognition to improve model performance. |

---

##### `optIn`<sup>Required</sup> <a name="optIn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference.property.optIn"></a>

```java
public java.lang.Object getOptIn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do you want to share data with Rekognition to improve model performance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#opt_in RekognitionStreamProcessor#opt_in}

---

### RekognitionStreamProcessorInput <a name="RekognitionStreamProcessorInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorInput;

RekognitionStreamProcessorInput.builder()
//  .kinesisVideoStream(IResolvable)
//  .kinesisVideoStream(java.util.List<RekognitionStreamProcessorInputKinesisVideoStream>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput.property.kinesisVideoStream">kinesisVideoStream</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>></code> | kinesis_video_stream block. |

---

##### `kinesisVideoStream`<sup>Optional</sup> <a name="kinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput.property.kinesisVideoStream"></a>

```java
public java.lang.Object getKinesisVideoStream();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>>

kinesis_video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#kinesis_video_stream RekognitionStreamProcessor#kinesis_video_stream}

---

### RekognitionStreamProcessorInputKinesisVideoStream <a name="RekognitionStreamProcessorInputKinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorInputKinesisVideoStream;

RekognitionStreamProcessorInputKinesisVideoStream.builder()
    .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream.property.arn">arn</a></code> | <code>java.lang.String</code> | ARN of the Kinesis video stream stream that streams the source video. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

ARN of the Kinesis video stream stream that streams the source video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#arn RekognitionStreamProcessor#arn}

---

### RekognitionStreamProcessorNotificationChannel <a name="RekognitionStreamProcessorNotificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorNotificationChannel;

RekognitionStreamProcessorNotificationChannel.builder()
//  .snsTopicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status. |

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#sns_topic_arn RekognitionStreamProcessor#sns_topic_arn}

---

### RekognitionStreamProcessorOutput <a name="RekognitionStreamProcessorOutput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorOutput;

RekognitionStreamProcessorOutput.builder()
//  .kinesisDataStream(IResolvable)
//  .kinesisDataStream(java.util.List<RekognitionStreamProcessorOutputKinesisDataStream>)
//  .s3Destination(IResolvable)
//  .s3Destination(java.util.List<RekognitionStreamProcessorOutputS3Destination>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.kinesisDataStream">kinesisDataStream</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>></code> | kinesis_data_stream block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.s3Destination">s3Destination</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>></code> | s3_destination block. |

---

##### `kinesisDataStream`<sup>Optional</sup> <a name="kinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.kinesisDataStream"></a>

```java
public java.lang.Object getKinesisDataStream();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>>

kinesis_data_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#kinesis_data_stream RekognitionStreamProcessor#kinesis_data_stream}

---

##### `s3Destination`<sup>Optional</sup> <a name="s3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.s3Destination"></a>

```java
public java.lang.Object getS3Destination();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>>

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#s3_destination RekognitionStreamProcessor#s3_destination}

---

### RekognitionStreamProcessorOutputKinesisDataStream <a name="RekognitionStreamProcessorOutputKinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorOutputKinesisDataStream;

RekognitionStreamProcessorOutputKinesisDataStream.builder()
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream.property.arn">arn</a></code> | <code>java.lang.String</code> | ARN of the output Amazon Kinesis Data Streams stream. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

ARN of the output Amazon Kinesis Data Streams stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#arn RekognitionStreamProcessor#arn}

---

### RekognitionStreamProcessorOutputS3Destination <a name="RekognitionStreamProcessorOutputS3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorOutputS3Destination;

RekognitionStreamProcessorOutputS3Destination.builder()
//  .bucket(java.lang.String)
//  .keyPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the Amazon S3 bucket you want to associate with the streaming video project. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.keyPrefix">keyPrefix</a></code> | <code>java.lang.String</code> | The prefix value of the location within the bucket that you want the information to be published to. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the Amazon S3 bucket you want to associate with the streaming video project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#bucket RekognitionStreamProcessor#bucket}

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.keyPrefix"></a>

```java
public java.lang.String getKeyPrefix();
```

- *Type:* java.lang.String

The prefix value of the location within the bucket that you want the information to be published to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#key_prefix RekognitionStreamProcessor#key_prefix}

---

### RekognitionStreamProcessorRegionsOfInterest <a name="RekognitionStreamProcessorRegionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorRegionsOfInterest;

RekognitionStreamProcessorRegionsOfInterest.builder()
//  .boundingBox(IResolvable)
//  .boundingBox(java.util.List<RekognitionStreamProcessorRegionsOfInterestBoundingBox>)
//  .polygon(IResolvable)
//  .polygon(java.util.List<RekognitionStreamProcessorRegionsOfInterestPolygon>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.boundingBox">boundingBox</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>></code> | bounding_box block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.polygon">polygon</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>></code> | polygon block. |

---

##### `boundingBox`<sup>Optional</sup> <a name="boundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.boundingBox"></a>

```java
public java.lang.Object getBoundingBox();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>>

bounding_box block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#bounding_box RekognitionStreamProcessor#bounding_box}

---

##### `polygon`<sup>Optional</sup> <a name="polygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.polygon"></a>

```java
public java.lang.Object getPolygon();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>>

polygon block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#polygon RekognitionStreamProcessor#polygon}

---

### RekognitionStreamProcessorRegionsOfInterestBoundingBox <a name="RekognitionStreamProcessorRegionsOfInterestBoundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorRegionsOfInterestBoundingBox;

RekognitionStreamProcessorRegionsOfInterestBoundingBox.builder()
//  .height(java.lang.Number)
//  .left(java.lang.Number)
//  .top(java.lang.Number)
//  .width(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.height">height</a></code> | <code>java.lang.Number</code> | Height of the bounding box as a ratio of the overall image height. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.left">left</a></code> | <code>java.lang.Number</code> | Left coordinate of the bounding box as a ratio of overall image width. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.top">top</a></code> | <code>java.lang.Number</code> | Top coordinate of the bounding box as a ratio of overall image height. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.width">width</a></code> | <code>java.lang.Number</code> | Width of the bounding box as a ratio of the overall image width. |

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.height"></a>

```java
public java.lang.Number getHeight();
```

- *Type:* java.lang.Number

Height of the bounding box as a ratio of the overall image height.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#height RekognitionStreamProcessor#height}

---

##### `left`<sup>Optional</sup> <a name="left" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.left"></a>

```java
public java.lang.Number getLeft();
```

- *Type:* java.lang.Number

Left coordinate of the bounding box as a ratio of overall image width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#left RekognitionStreamProcessor#left}

---

##### `top`<sup>Optional</sup> <a name="top" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.top"></a>

```java
public java.lang.Number getTop();
```

- *Type:* java.lang.Number

Top coordinate of the bounding box as a ratio of overall image height.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#top RekognitionStreamProcessor#top}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.width"></a>

```java
public java.lang.Number getWidth();
```

- *Type:* java.lang.Number

Width of the bounding box as a ratio of the overall image width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#width RekognitionStreamProcessor#width}

---

### RekognitionStreamProcessorRegionsOfInterestPolygon <a name="RekognitionStreamProcessorRegionsOfInterestPolygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorRegionsOfInterestPolygon;

RekognitionStreamProcessorRegionsOfInterestPolygon.builder()
//  .x(java.lang.Number)
//  .y(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.x">x</a></code> | <code>java.lang.Number</code> | The value of the X coordinate for a point on a Polygon. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.y">y</a></code> | <code>java.lang.Number</code> | The value of the Y coordinate for a point on a Polygon. |

---

##### `x`<sup>Optional</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.x"></a>

```java
public java.lang.Number getX();
```

- *Type:* java.lang.Number

The value of the X coordinate for a point on a Polygon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#x RekognitionStreamProcessor#x}

---

##### `y`<sup>Optional</sup> <a name="y" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.y"></a>

```java
public java.lang.Number getY();
```

- *Type:* java.lang.Number

The value of the Y coordinate for a point on a Polygon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#y RekognitionStreamProcessor#y}

---

### RekognitionStreamProcessorSettings <a name="RekognitionStreamProcessorSettings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorSettings;

RekognitionStreamProcessorSettings.builder()
//  .connectedHome(IResolvable)
//  .connectedHome(java.util.List<RekognitionStreamProcessorSettingsConnectedHome>)
//  .faceSearch(IResolvable)
//  .faceSearch(java.util.List<RekognitionStreamProcessorSettingsFaceSearch>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.connectedHome">connectedHome</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>></code> | connected_home block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.faceSearch">faceSearch</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>></code> | face_search block. |

---

##### `connectedHome`<sup>Optional</sup> <a name="connectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.connectedHome"></a>

```java
public java.lang.Object getConnectedHome();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>>

connected_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#connected_home RekognitionStreamProcessor#connected_home}

---

##### `faceSearch`<sup>Optional</sup> <a name="faceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.faceSearch"></a>

```java
public java.lang.Object getFaceSearch();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>>

face_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#face_search RekognitionStreamProcessor#face_search}

---

### RekognitionStreamProcessorSettingsConnectedHome <a name="RekognitionStreamProcessorSettingsConnectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorSettingsConnectedHome;

RekognitionStreamProcessorSettingsConnectedHome.builder()
//  .labels(java.util.List<java.lang.String>)
//  .minConfidence(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | Specifies what you want to detect in the video, such as people, packages, or pets. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.minConfidence">minConfidence</a></code> | <code>java.lang.Number</code> | The minimum confidence required to label an object in the video. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

Specifies what you want to detect in the video, such as people, packages, or pets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#labels RekognitionStreamProcessor#labels}

---

##### `minConfidence`<sup>Optional</sup> <a name="minConfidence" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.minConfidence"></a>

```java
public java.lang.Number getMinConfidence();
```

- *Type:* java.lang.Number

The minimum confidence required to label an object in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#min_confidence RekognitionStreamProcessor#min_confidence}

---

### RekognitionStreamProcessorSettingsFaceSearch <a name="RekognitionStreamProcessorSettingsFaceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorSettingsFaceSearch;

RekognitionStreamProcessorSettingsFaceSearch.builder()
    .collectionId(java.lang.String)
//  .faceMatchThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The ID of a collection that contains faces that you want to search for. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.faceMatchThreshold">faceMatchThreshold</a></code> | <code>java.lang.Number</code> | Minimum face match confidence score that must be met to return a result for a recognized face. |

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The ID of a collection that contains faces that you want to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#collection_id RekognitionStreamProcessor#collection_id}

---

##### `faceMatchThreshold`<sup>Optional</sup> <a name="faceMatchThreshold" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.faceMatchThreshold"></a>

```java
public java.lang.Number getFaceMatchThreshold();
```

- *Type:* java.lang.Number

Minimum face match confidence score that must be met to return a result for a recognized face.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#face_match_threshold RekognitionStreamProcessor#face_match_threshold}

---

### RekognitionStreamProcessorTimeouts <a name="RekognitionStreamProcessorTimeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorTimeouts;

RekognitionStreamProcessorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#create RekognitionStreamProcessor#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#delete RekognitionStreamProcessor#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/rekognition_stream_processor#update RekognitionStreamProcessor#update}

---

## Classes <a name="Classes" id="Classes"></a>

### RekognitionStreamProcessorDataSharingPreferenceList <a name="RekognitionStreamProcessorDataSharingPreferenceList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorDataSharingPreferenceList;

new RekognitionStreamProcessorDataSharingPreferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.get"></a>

```java
public RekognitionStreamProcessorDataSharingPreferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>>

---


### RekognitionStreamProcessorDataSharingPreferenceOutputReference <a name="RekognitionStreamProcessorDataSharingPreferenceOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorDataSharingPreferenceOutputReference;

new RekognitionStreamProcessorDataSharingPreferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optInInput">optInInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optIn">optIn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `optInInput`<sup>Optional</sup> <a name="optInInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optInInput"></a>

```java
public java.lang.Object getOptInInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `optIn`<sup>Required</sup> <a name="optIn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optIn"></a>

```java
public java.lang.Object getOptIn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>

---


### RekognitionStreamProcessorInputKinesisVideoStreamList <a name="RekognitionStreamProcessorInputKinesisVideoStreamList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorInputKinesisVideoStreamList;

new RekognitionStreamProcessorInputKinesisVideoStreamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.get"></a>

```java
public RekognitionStreamProcessorInputKinesisVideoStreamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>>

---


### RekognitionStreamProcessorInputKinesisVideoStreamOutputReference <a name="RekognitionStreamProcessorInputKinesisVideoStreamOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference;

new RekognitionStreamProcessorInputKinesisVideoStreamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>

---


### RekognitionStreamProcessorInputList <a name="RekognitionStreamProcessorInputList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorInputList;

new RekognitionStreamProcessorInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.get"></a>

```java
public RekognitionStreamProcessorInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>>

---


### RekognitionStreamProcessorInputOutputReference <a name="RekognitionStreamProcessorInputOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorInputOutputReference;

new RekognitionStreamProcessorInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.putKinesisVideoStream">putKinesisVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resetKinesisVideoStream">resetKinesisVideoStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesisVideoStream` <a name="putKinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.putKinesisVideoStream"></a>

```java
public void putKinesisVideoStream(IResolvable OR java.util.List<RekognitionStreamProcessorInputKinesisVideoStream> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.putKinesisVideoStream.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>>

---

##### `resetKinesisVideoStream` <a name="resetKinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resetKinesisVideoStream"></a>

```java
public void resetKinesisVideoStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStream">kinesisVideoStream</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList">RekognitionStreamProcessorInputKinesisVideoStreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStreamInput">kinesisVideoStreamInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kinesisVideoStream`<sup>Required</sup> <a name="kinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStream"></a>

```java
public RekognitionStreamProcessorInputKinesisVideoStreamList getKinesisVideoStream();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList">RekognitionStreamProcessorInputKinesisVideoStreamList</a>

---

##### `kinesisVideoStreamInput`<sup>Optional</sup> <a name="kinesisVideoStreamInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStreamInput"></a>

```java
public java.lang.Object getKinesisVideoStreamInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>

---


### RekognitionStreamProcessorNotificationChannelList <a name="RekognitionStreamProcessorNotificationChannelList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorNotificationChannelList;

new RekognitionStreamProcessorNotificationChannelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.get"></a>

```java
public RekognitionStreamProcessorNotificationChannelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>>

---


### RekognitionStreamProcessorNotificationChannelOutputReference <a name="RekognitionStreamProcessorNotificationChannelOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorNotificationChannelOutputReference;

new RekognitionStreamProcessorNotificationChannelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resetSnsTopicArn"></a>

```java
public void resetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArnInput"></a>

```java
public java.lang.String getSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>

---


### RekognitionStreamProcessorOutputKinesisDataStreamList <a name="RekognitionStreamProcessorOutputKinesisDataStreamList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorOutputKinesisDataStreamList;

new RekognitionStreamProcessorOutputKinesisDataStreamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.get"></a>

```java
public RekognitionStreamProcessorOutputKinesisDataStreamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>>

---


### RekognitionStreamProcessorOutputKinesisDataStreamOutputReference <a name="RekognitionStreamProcessorOutputKinesisDataStreamOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference;

new RekognitionStreamProcessorOutputKinesisDataStreamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>

---


### RekognitionStreamProcessorOutputList <a name="RekognitionStreamProcessorOutputList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorOutputList;

new RekognitionStreamProcessorOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.get"></a>

```java
public RekognitionStreamProcessorOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>>

---


### RekognitionStreamProcessorOutputOutputReference <a name="RekognitionStreamProcessorOutputOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorOutputOutputReference;

new RekognitionStreamProcessorOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putKinesisDataStream">putKinesisDataStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putS3Destination">putS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetKinesisDataStream">resetKinesisDataStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetS3Destination">resetS3Destination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesisDataStream` <a name="putKinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putKinesisDataStream"></a>

```java
public void putKinesisDataStream(IResolvable OR java.util.List<RekognitionStreamProcessorOutputKinesisDataStream> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putKinesisDataStream.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>>

---

##### `putS3Destination` <a name="putS3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putS3Destination"></a>

```java
public void putS3Destination(IResolvable OR java.util.List<RekognitionStreamProcessorOutputS3Destination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putS3Destination.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>>

---

##### `resetKinesisDataStream` <a name="resetKinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetKinesisDataStream"></a>

```java
public void resetKinesisDataStream()
```

##### `resetS3Destination` <a name="resetS3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetS3Destination"></a>

```java
public void resetS3Destination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStream">kinesisDataStream</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList">RekognitionStreamProcessorOutputKinesisDataStreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList">RekognitionStreamProcessorOutputS3DestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStreamInput">kinesisDataStreamInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3DestinationInput">s3DestinationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kinesisDataStream`<sup>Required</sup> <a name="kinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStream"></a>

```java
public RekognitionStreamProcessorOutputKinesisDataStreamList getKinesisDataStream();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList">RekognitionStreamProcessorOutputKinesisDataStreamList</a>

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3Destination"></a>

```java
public RekognitionStreamProcessorOutputS3DestinationList getS3Destination();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList">RekognitionStreamProcessorOutputS3DestinationList</a>

---

##### `kinesisDataStreamInput`<sup>Optional</sup> <a name="kinesisDataStreamInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStreamInput"></a>

```java
public java.lang.Object getKinesisDataStreamInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>>

---

##### `s3DestinationInput`<sup>Optional</sup> <a name="s3DestinationInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3DestinationInput"></a>

```java
public java.lang.Object getS3DestinationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>

---


### RekognitionStreamProcessorOutputS3DestinationList <a name="RekognitionStreamProcessorOutputS3DestinationList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorOutputS3DestinationList;

new RekognitionStreamProcessorOutputS3DestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.get"></a>

```java
public RekognitionStreamProcessorOutputS3DestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>>

---


### RekognitionStreamProcessorOutputS3DestinationOutputReference <a name="RekognitionStreamProcessorOutputS3DestinationOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorOutputS3DestinationOutputReference;

new RekognitionStreamProcessorOutputS3DestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetKeyPrefix">resetKeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetKeyPrefix"></a>

```java
public void resetKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefix">keyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefixInput"></a>

```java
public java.lang.String getKeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefix"></a>

```java
public java.lang.String getKeyPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>

---


### RekognitionStreamProcessorRegionsOfInterestBoundingBoxList <a name="RekognitionStreamProcessorRegionsOfInterestBoundingBoxList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList;

new RekognitionStreamProcessorRegionsOfInterestBoundingBoxList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.get"></a>

```java
public RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>>

---


### RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference <a name="RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference;

new RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetLeft">resetLeft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetTop">resetTop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetHeight"></a>

```java
public void resetHeight()
```

##### `resetLeft` <a name="resetLeft" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetLeft"></a>

```java
public void resetLeft()
```

##### `resetTop` <a name="resetTop" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetTop"></a>

```java
public void resetTop()
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetWidth"></a>

```java
public void resetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.heightInput">heightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.leftInput">leftInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.topInput">topInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.widthInput">widthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.height">height</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.left">left</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.top">top</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.width">width</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.heightInput"></a>

```java
public java.lang.Number getHeightInput();
```

- *Type:* java.lang.Number

---

##### `leftInput`<sup>Optional</sup> <a name="leftInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.leftInput"></a>

```java
public java.lang.Number getLeftInput();
```

- *Type:* java.lang.Number

---

##### `topInput`<sup>Optional</sup> <a name="topInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.topInput"></a>

```java
public java.lang.Number getTopInput();
```

- *Type:* java.lang.Number

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.widthInput"></a>

```java
public java.lang.Number getWidthInput();
```

- *Type:* java.lang.Number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.height"></a>

```java
public java.lang.Number getHeight();
```

- *Type:* java.lang.Number

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.left"></a>

```java
public java.lang.Number getLeft();
```

- *Type:* java.lang.Number

---

##### `top`<sup>Required</sup> <a name="top" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.top"></a>

```java
public java.lang.Number getTop();
```

- *Type:* java.lang.Number

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.width"></a>

```java
public java.lang.Number getWidth();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>

---


### RekognitionStreamProcessorRegionsOfInterestList <a name="RekognitionStreamProcessorRegionsOfInterestList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorRegionsOfInterestList;

new RekognitionStreamProcessorRegionsOfInterestList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.get"></a>

```java
public RekognitionStreamProcessorRegionsOfInterestOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>>

---


### RekognitionStreamProcessorRegionsOfInterestOutputReference <a name="RekognitionStreamProcessorRegionsOfInterestOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorRegionsOfInterestOutputReference;

new RekognitionStreamProcessorRegionsOfInterestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox">putBoundingBox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putPolygon">putPolygon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetBoundingBox">resetBoundingBox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetPolygon">resetPolygon</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBoundingBox` <a name="putBoundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox"></a>

```java
public void putBoundingBox(IResolvable OR java.util.List<RekognitionStreamProcessorRegionsOfInterestBoundingBox> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>>

---

##### `putPolygon` <a name="putPolygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putPolygon"></a>

```java
public void putPolygon(IResolvable OR java.util.List<RekognitionStreamProcessorRegionsOfInterestPolygon> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putPolygon.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>>

---

##### `resetBoundingBox` <a name="resetBoundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetBoundingBox"></a>

```java
public void resetBoundingBox()
```

##### `resetPolygon` <a name="resetPolygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetPolygon"></a>

```java
public void resetPolygon()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBox">boundingBox</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList">RekognitionStreamProcessorRegionsOfInterestBoundingBoxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygon">polygon</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList">RekognitionStreamProcessorRegionsOfInterestPolygonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBoxInput">boundingBoxInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygonInput">polygonInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `boundingBox`<sup>Required</sup> <a name="boundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBox"></a>

```java
public RekognitionStreamProcessorRegionsOfInterestBoundingBoxList getBoundingBox();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList">RekognitionStreamProcessorRegionsOfInterestBoundingBoxList</a>

---

##### `polygon`<sup>Required</sup> <a name="polygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygon"></a>

```java
public RekognitionStreamProcessorRegionsOfInterestPolygonList getPolygon();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList">RekognitionStreamProcessorRegionsOfInterestPolygonList</a>

---

##### `boundingBoxInput`<sup>Optional</sup> <a name="boundingBoxInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBoxInput"></a>

```java
public java.lang.Object getBoundingBoxInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>>

---

##### `polygonInput`<sup>Optional</sup> <a name="polygonInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygonInput"></a>

```java
public java.lang.Object getPolygonInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>

---


### RekognitionStreamProcessorRegionsOfInterestPolygonList <a name="RekognitionStreamProcessorRegionsOfInterestPolygonList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorRegionsOfInterestPolygonList;

new RekognitionStreamProcessorRegionsOfInterestPolygonList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.get"></a>

```java
public RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>>

---


### RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference <a name="RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference;

new RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetX">resetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetY">resetY</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetX` <a name="resetX" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetX"></a>

```java
public void resetX()
```

##### `resetY` <a name="resetY" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetY"></a>

```java
public void resetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.xInput">xInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.yInput">yInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.x">x</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.y">y</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `xInput`<sup>Optional</sup> <a name="xInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.xInput"></a>

```java
public java.lang.Number getXInput();
```

- *Type:* java.lang.Number

---

##### `yInput`<sup>Optional</sup> <a name="yInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.yInput"></a>

```java
public java.lang.Number getYInput();
```

- *Type:* java.lang.Number

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.x"></a>

```java
public java.lang.Number getX();
```

- *Type:* java.lang.Number

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.y"></a>

```java
public java.lang.Number getY();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>

---


### RekognitionStreamProcessorSettingsConnectedHomeList <a name="RekognitionStreamProcessorSettingsConnectedHomeList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorSettingsConnectedHomeList;

new RekognitionStreamProcessorSettingsConnectedHomeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.get"></a>

```java
public RekognitionStreamProcessorSettingsConnectedHomeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>>

---


### RekognitionStreamProcessorSettingsConnectedHomeOutputReference <a name="RekognitionStreamProcessorSettingsConnectedHomeOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference;

new RekognitionStreamProcessorSettingsConnectedHomeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetMinConfidence">resetMinConfidence</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMinConfidence` <a name="resetMinConfidence" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetMinConfidence"></a>

```java
public void resetMinConfidence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidenceInput">minConfidenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidence">minConfidence</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labelsInput"></a>

```java
public java.util.List<java.lang.String> getLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `minConfidenceInput`<sup>Optional</sup> <a name="minConfidenceInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidenceInput"></a>

```java
public java.lang.Number getMinConfidenceInput();
```

- *Type:* java.lang.Number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `minConfidence`<sup>Required</sup> <a name="minConfidence" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidence"></a>

```java
public java.lang.Number getMinConfidence();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>

---


### RekognitionStreamProcessorSettingsFaceSearchList <a name="RekognitionStreamProcessorSettingsFaceSearchList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorSettingsFaceSearchList;

new RekognitionStreamProcessorSettingsFaceSearchList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.get"></a>

```java
public RekognitionStreamProcessorSettingsFaceSearchOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>>

---


### RekognitionStreamProcessorSettingsFaceSearchOutputReference <a name="RekognitionStreamProcessorSettingsFaceSearchOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorSettingsFaceSearchOutputReference;

new RekognitionStreamProcessorSettingsFaceSearchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resetFaceMatchThreshold">resetFaceMatchThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFaceMatchThreshold` <a name="resetFaceMatchThreshold" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resetFaceMatchThreshold"></a>

```java
public void resetFaceMatchThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThresholdInput">faceMatchThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThreshold">faceMatchThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `faceMatchThresholdInput`<sup>Optional</sup> <a name="faceMatchThresholdInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThresholdInput"></a>

```java
public java.lang.Number getFaceMatchThresholdInput();
```

- *Type:* java.lang.Number

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `faceMatchThreshold`<sup>Required</sup> <a name="faceMatchThreshold" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThreshold"></a>

```java
public java.lang.Number getFaceMatchThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>

---


### RekognitionStreamProcessorSettingsList <a name="RekognitionStreamProcessorSettingsList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorSettingsList;

new RekognitionStreamProcessorSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.get"></a>

```java
public RekognitionStreamProcessorSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>>

---


### RekognitionStreamProcessorSettingsOutputReference <a name="RekognitionStreamProcessorSettingsOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorSettingsOutputReference;

new RekognitionStreamProcessorSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putConnectedHome">putConnectedHome</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putFaceSearch">putFaceSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetConnectedHome">resetConnectedHome</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetFaceSearch">resetFaceSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectedHome` <a name="putConnectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putConnectedHome"></a>

```java
public void putConnectedHome(IResolvable OR java.util.List<RekognitionStreamProcessorSettingsConnectedHome> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putConnectedHome.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>>

---

##### `putFaceSearch` <a name="putFaceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putFaceSearch"></a>

```java
public void putFaceSearch(IResolvable OR java.util.List<RekognitionStreamProcessorSettingsFaceSearch> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putFaceSearch.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>>

---

##### `resetConnectedHome` <a name="resetConnectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetConnectedHome"></a>

```java
public void resetConnectedHome()
```

##### `resetFaceSearch` <a name="resetFaceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetFaceSearch"></a>

```java
public void resetFaceSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHome">connectedHome</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList">RekognitionStreamProcessorSettingsConnectedHomeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearch">faceSearch</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList">RekognitionStreamProcessorSettingsFaceSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHomeInput">connectedHomeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearchInput">faceSearchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectedHome`<sup>Required</sup> <a name="connectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHome"></a>

```java
public RekognitionStreamProcessorSettingsConnectedHomeList getConnectedHome();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList">RekognitionStreamProcessorSettingsConnectedHomeList</a>

---

##### `faceSearch`<sup>Required</sup> <a name="faceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearch"></a>

```java
public RekognitionStreamProcessorSettingsFaceSearchList getFaceSearch();
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList">RekognitionStreamProcessorSettingsFaceSearchList</a>

---

##### `connectedHomeInput`<sup>Optional</sup> <a name="connectedHomeInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHomeInput"></a>

```java
public java.lang.Object getConnectedHomeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>>

---

##### `faceSearchInput`<sup>Optional</sup> <a name="faceSearchInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearchInput"></a>

```java
public java.lang.Object getFaceSearchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>

---


### RekognitionStreamProcessorTimeoutsOutputReference <a name="RekognitionStreamProcessorTimeoutsOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rekognition_stream_processor.RekognitionStreamProcessorTimeoutsOutputReference;

new RekognitionStreamProcessorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>

---



