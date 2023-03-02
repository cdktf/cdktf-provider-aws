# `elastictranscoderPipeline` Submodule <a name="`elastictranscoderPipeline` Submodule" id="@cdktf/provider-aws.elastictranscoderPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastictranscoderPipeline <a name="ElastictranscoderPipeline" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline aws_elastictranscoder_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipeline;

ElastictranscoderPipeline.Builder.create(Construct scope, java.lang.String id)
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
    .inputBucket(java.lang.String)
    .role(java.lang.String)
//  .awsKmsKeyArn(java.lang.String)
//  .contentConfig(ElastictranscoderPipelineContentConfig)
//  .contentConfigPermissions(IResolvable)
//  .contentConfigPermissions(java.util.List<ElastictranscoderPipelineContentConfigPermissions>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .notifications(ElastictranscoderPipelineNotifications)
//  .outputBucket(java.lang.String)
//  .thumbnailConfig(ElastictranscoderPipelineThumbnailConfig)
//  .thumbnailConfigPermissions(IResolvable)
//  .thumbnailConfigPermissions(java.util.List<ElastictranscoderPipelineThumbnailConfigPermissions>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.inputBucket">inputBucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.awsKmsKeyArn">awsKmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.contentConfig">contentConfig</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | content_config block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.contentConfigPermissions">contentConfigPermissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>></code> | content_config_permissions block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#id ElastictranscoderPipeline#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.outputBucket">outputBucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.thumbnailConfig">thumbnailConfig</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | thumbnail_config block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.thumbnailConfigPermissions">thumbnailConfigPermissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>></code> | thumbnail_config_permissions block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `inputBucket`<sup>Required</sup> <a name="inputBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.inputBucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}.

---

##### `awsKmsKeyArn`<sup>Optional</sup> <a name="awsKmsKeyArn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.awsKmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}.

---

##### `contentConfig`<sup>Optional</sup> <a name="contentConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.contentConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

content_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#content_config ElastictranscoderPipeline#content_config}

---

##### `contentConfigPermissions`<sup>Optional</sup> <a name="contentConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.contentConfigPermissions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>>

content_config_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#content_config_permissions ElastictranscoderPipeline#content_config_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#id ElastictranscoderPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.notifications"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#notifications ElastictranscoderPipeline#notifications}

---

##### `outputBucket`<sup>Optional</sup> <a name="outputBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.outputBucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}.

---

##### `thumbnailConfig`<sup>Optional</sup> <a name="thumbnailConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.thumbnailConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

thumbnail_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#thumbnail_config ElastictranscoderPipeline#thumbnail_config}

---

##### `thumbnailConfigPermissions`<sup>Optional</sup> <a name="thumbnailConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.thumbnailConfigPermissions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>>

thumbnail_config_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#thumbnail_config_permissions ElastictranscoderPipeline#thumbnail_config_permissions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfig">putContentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfigPermissions">putContentConfigPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications">putNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfig">putThumbnailConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfigPermissions">putThumbnailConfigPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetAwsKmsKeyArn">resetAwsKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfig">resetContentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfigPermissions">resetContentConfigPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetNotifications">resetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetOutputBucket">resetOutputBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfig">resetThumbnailConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfigPermissions">resetThumbnailConfigPermissions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putContentConfig` <a name="putContentConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfig"></a>

```java
public void putContentConfig(ElastictranscoderPipelineContentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

---

##### `putContentConfigPermissions` <a name="putContentConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfigPermissions"></a>

```java
public void putContentConfigPermissions(IResolvable OR java.util.List<ElastictranscoderPipelineContentConfigPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfigPermissions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>>

---

##### `putNotifications` <a name="putNotifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications"></a>

```java
public void putNotifications(ElastictranscoderPipelineNotifications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

---

##### `putThumbnailConfig` <a name="putThumbnailConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfig"></a>

```java
public void putThumbnailConfig(ElastictranscoderPipelineThumbnailConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

---

##### `putThumbnailConfigPermissions` <a name="putThumbnailConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfigPermissions"></a>

```java
public void putThumbnailConfigPermissions(IResolvable OR java.util.List<ElastictranscoderPipelineThumbnailConfigPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfigPermissions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>>

---

##### `resetAwsKmsKeyArn` <a name="resetAwsKmsKeyArn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetAwsKmsKeyArn"></a>

```java
public void resetAwsKmsKeyArn()
```

##### `resetContentConfig` <a name="resetContentConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfig"></a>

```java
public void resetContentConfig()
```

##### `resetContentConfigPermissions` <a name="resetContentConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfigPermissions"></a>

```java
public void resetContentConfigPermissions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetName"></a>

```java
public void resetName()
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetNotifications"></a>

```java
public void resetNotifications()
```

##### `resetOutputBucket` <a name="resetOutputBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetOutputBucket"></a>

```java
public void resetOutputBucket()
```

##### `resetThumbnailConfig` <a name="resetThumbnailConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfig"></a>

```java
public void resetThumbnailConfig()
```

##### `resetThumbnailConfigPermissions` <a name="resetThumbnailConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfigPermissions"></a>

```java
public void resetThumbnailConfigPermissions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipeline;

ElastictranscoderPipeline.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipeline;

ElastictranscoderPipeline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipeline;

ElastictranscoderPipeline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfig">contentConfig</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference">ElastictranscoderPipelineContentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissions">contentConfigPermissions</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList">ElastictranscoderPipelineContentConfigPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference">ElastictranscoderPipelineNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfig">thumbnailConfig</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference">ElastictranscoderPipelineThumbnailConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissions">thumbnailConfigPermissions</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList">ElastictranscoderPipelineThumbnailConfigPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArnInput">awsKmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigInput">contentConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissionsInput">contentConfigPermissionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucketInput">inputBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.notificationsInput">notificationsInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucketInput">outputBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigInput">thumbnailConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissionsInput">thumbnailConfigPermissionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArn">awsKmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucket">inputBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucket">outputBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `contentConfig`<sup>Required</sup> <a name="contentConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfig"></a>

```java
public ElastictranscoderPipelineContentConfigOutputReference getContentConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference">ElastictranscoderPipelineContentConfigOutputReference</a>

---

##### `contentConfigPermissions`<sup>Required</sup> <a name="contentConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissions"></a>

```java
public ElastictranscoderPipelineContentConfigPermissionsList getContentConfigPermissions();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList">ElastictranscoderPipelineContentConfigPermissionsList</a>

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.notifications"></a>

```java
public ElastictranscoderPipelineNotificationsOutputReference getNotifications();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference">ElastictranscoderPipelineNotificationsOutputReference</a>

---

##### `thumbnailConfig`<sup>Required</sup> <a name="thumbnailConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfig"></a>

```java
public ElastictranscoderPipelineThumbnailConfigOutputReference getThumbnailConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference">ElastictranscoderPipelineThumbnailConfigOutputReference</a>

---

##### `thumbnailConfigPermissions`<sup>Required</sup> <a name="thumbnailConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissions"></a>

```java
public ElastictranscoderPipelineThumbnailConfigPermissionsList getThumbnailConfigPermissions();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList">ElastictranscoderPipelineThumbnailConfigPermissionsList</a>

---

##### `awsKmsKeyArnInput`<sup>Optional</sup> <a name="awsKmsKeyArnInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArnInput"></a>

```java
public java.lang.String getAwsKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `contentConfigInput`<sup>Optional</sup> <a name="contentConfigInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigInput"></a>

```java
public ElastictranscoderPipelineContentConfig getContentConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

---

##### `contentConfigPermissionsInput`<sup>Optional</sup> <a name="contentConfigPermissionsInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissionsInput"></a>

```java
public java.lang.Object getContentConfigPermissionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputBucketInput`<sup>Optional</sup> <a name="inputBucketInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucketInput"></a>

```java
public java.lang.String getInputBucketInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.notificationsInput"></a>

```java
public ElastictranscoderPipelineNotifications getNotificationsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

---

##### `outputBucketInput`<sup>Optional</sup> <a name="outputBucketInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucketInput"></a>

```java
public java.lang.String getOutputBucketInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `thumbnailConfigInput`<sup>Optional</sup> <a name="thumbnailConfigInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigInput"></a>

```java
public ElastictranscoderPipelineThumbnailConfig getThumbnailConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

---

##### `thumbnailConfigPermissionsInput`<sup>Optional</sup> <a name="thumbnailConfigPermissionsInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissionsInput"></a>

```java
public java.lang.Object getThumbnailConfigPermissionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>>

---

##### `awsKmsKeyArn`<sup>Required</sup> <a name="awsKmsKeyArn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArn"></a>

```java
public java.lang.String getAwsKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputBucket`<sup>Required</sup> <a name="inputBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucket"></a>

```java
public java.lang.String getInputBucket();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputBucket`<sup>Required</sup> <a name="outputBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucket"></a>

```java
public java.lang.String getOutputBucket();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElastictranscoderPipelineConfig <a name="ElastictranscoderPipelineConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipelineConfig;

ElastictranscoderPipelineConfig.builder()
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
    .inputBucket(java.lang.String)
    .role(java.lang.String)
//  .awsKmsKeyArn(java.lang.String)
//  .contentConfig(ElastictranscoderPipelineContentConfig)
//  .contentConfigPermissions(IResolvable)
//  .contentConfigPermissions(java.util.List<ElastictranscoderPipelineContentConfigPermissions>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .notifications(ElastictranscoderPipelineNotifications)
//  .outputBucket(java.lang.String)
//  .thumbnailConfig(ElastictranscoderPipelineThumbnailConfig)
//  .thumbnailConfigPermissions(IResolvable)
//  .thumbnailConfigPermissions(java.util.List<ElastictranscoderPipelineThumbnailConfigPermissions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.inputBucket">inputBucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.awsKmsKeyArn">awsKmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfig">contentConfig</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | content_config block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfigPermissions">contentConfigPermissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>></code> | content_config_permissions block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#id ElastictranscoderPipeline#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.outputBucket">outputBucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfig">thumbnailConfig</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | thumbnail_config block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfigPermissions">thumbnailConfigPermissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>></code> | thumbnail_config_permissions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `inputBucket`<sup>Required</sup> <a name="inputBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.inputBucket"></a>

```java
public java.lang.String getInputBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}.

---

##### `awsKmsKeyArn`<sup>Optional</sup> <a name="awsKmsKeyArn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.awsKmsKeyArn"></a>

```java
public java.lang.String getAwsKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}.

---

##### `contentConfig`<sup>Optional</sup> <a name="contentConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfig"></a>

```java
public ElastictranscoderPipelineContentConfig getContentConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

content_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#content_config ElastictranscoderPipeline#content_config}

---

##### `contentConfigPermissions`<sup>Optional</sup> <a name="contentConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfigPermissions"></a>

```java
public java.lang.Object getContentConfigPermissions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>>

content_config_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#content_config_permissions ElastictranscoderPipeline#content_config_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#id ElastictranscoderPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.notifications"></a>

```java
public ElastictranscoderPipelineNotifications getNotifications();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#notifications ElastictranscoderPipeline#notifications}

---

##### `outputBucket`<sup>Optional</sup> <a name="outputBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.outputBucket"></a>

```java
public java.lang.String getOutputBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}.

---

##### `thumbnailConfig`<sup>Optional</sup> <a name="thumbnailConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfig"></a>

```java
public ElastictranscoderPipelineThumbnailConfig getThumbnailConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

thumbnail_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#thumbnail_config ElastictranscoderPipeline#thumbnail_config}

---

##### `thumbnailConfigPermissions`<sup>Optional</sup> <a name="thumbnailConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfigPermissions"></a>

```java
public java.lang.Object getThumbnailConfigPermissions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>>

thumbnail_config_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#thumbnail_config_permissions ElastictranscoderPipeline#thumbnail_config_permissions}

---

### ElastictranscoderPipelineContentConfig <a name="ElastictranscoderPipelineContentConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipelineContentConfig;

ElastictranscoderPipelineContentConfig.builder()
//  .bucket(java.lang.String)
//  .storageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}.

---

### ElastictranscoderPipelineContentConfigPermissions <a name="ElastictranscoderPipelineContentConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipelineContentConfigPermissions;

ElastictranscoderPipelineContentConfigPermissions.builder()
//  .access(java.util.List<java.lang.String>)
//  .grantee(java.lang.String)
//  .granteeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.access">access</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.grantee">grantee</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.granteeType">granteeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}. |

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.access"></a>

```java
public java.util.List<java.lang.String> getAccess();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}.

---

##### `grantee`<sup>Optional</sup> <a name="grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.grantee"></a>

```java
public java.lang.String getGrantee();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}.

---

##### `granteeType`<sup>Optional</sup> <a name="granteeType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.granteeType"></a>

```java
public java.lang.String getGranteeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}.

---

### ElastictranscoderPipelineNotifications <a name="ElastictranscoderPipelineNotifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipelineNotifications;

ElastictranscoderPipelineNotifications.builder()
//  .completed(java.lang.String)
//  .error(java.lang.String)
//  .progressing(java.lang.String)
//  .warning(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.completed">completed</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#completed ElastictranscoderPipeline#completed}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.error">error</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#error ElastictranscoderPipeline#error}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.progressing">progressing</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#progressing ElastictranscoderPipeline#progressing}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.warning">warning</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#warning ElastictranscoderPipeline#warning}. |

---

##### `completed`<sup>Optional</sup> <a name="completed" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.completed"></a>

```java
public java.lang.String getCompleted();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#completed ElastictranscoderPipeline#completed}.

---

##### `error`<sup>Optional</sup> <a name="error" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.error"></a>

```java
public java.lang.String getError();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#error ElastictranscoderPipeline#error}.

---

##### `progressing`<sup>Optional</sup> <a name="progressing" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.progressing"></a>

```java
public java.lang.String getProgressing();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#progressing ElastictranscoderPipeline#progressing}.

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.warning"></a>

```java
public java.lang.String getWarning();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#warning ElastictranscoderPipeline#warning}.

---

### ElastictranscoderPipelineThumbnailConfig <a name="ElastictranscoderPipelineThumbnailConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipelineThumbnailConfig;

ElastictranscoderPipelineThumbnailConfig.builder()
//  .bucket(java.lang.String)
//  .storageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}.

---

### ElastictranscoderPipelineThumbnailConfigPermissions <a name="ElastictranscoderPipelineThumbnailConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipelineThumbnailConfigPermissions;

ElastictranscoderPipelineThumbnailConfigPermissions.builder()
//  .access(java.util.List<java.lang.String>)
//  .grantee(java.lang.String)
//  .granteeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.access">access</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.grantee">grantee</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.granteeType">granteeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}. |

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.access"></a>

```java
public java.util.List<java.lang.String> getAccess();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}.

---

##### `grantee`<sup>Optional</sup> <a name="grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.grantee"></a>

```java
public java.lang.String getGrantee();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}.

---

##### `granteeType`<sup>Optional</sup> <a name="granteeType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.granteeType"></a>

```java
public java.lang.String getGranteeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastictranscoderPipelineContentConfigOutputReference <a name="ElastictranscoderPipelineContentConfigOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipelineContentConfigOutputReference;

new ElastictranscoderPipelineContentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetStorageClass"></a>

```java
public void resetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.internalValue"></a>

```java
public ElastictranscoderPipelineContentConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

---


### ElastictranscoderPipelineContentConfigPermissionsList <a name="ElastictranscoderPipelineContentConfigPermissionsList" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipelineContentConfigPermissionsList;

new ElastictranscoderPipelineContentConfigPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.get"></a>

```java
public ElastictranscoderPipelineContentConfigPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>>

---


### ElastictranscoderPipelineContentConfigPermissionsOutputReference <a name="ElastictranscoderPipelineContentConfigPermissionsOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference;

new ElastictranscoderPipelineContentConfigPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGrantee">resetGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGranteeType">resetGranteeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccess` <a name="resetAccess" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetAccess"></a>

```java
public void resetAccess()
```

##### `resetGrantee` <a name="resetGrantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGrantee"></a>

```java
public void resetGrantee()
```

##### `resetGranteeType` <a name="resetGranteeType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGranteeType"></a>

```java
public void resetGranteeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.accessInput">accessInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeInput">granteeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeTypeInput">granteeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.access">access</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.grantee">grantee</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeType">granteeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.accessInput"></a>

```java
public java.util.List<java.lang.String> getAccessInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `granteeInput`<sup>Optional</sup> <a name="granteeInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeInput"></a>

```java
public java.lang.String getGranteeInput();
```

- *Type:* java.lang.String

---

##### `granteeTypeInput`<sup>Optional</sup> <a name="granteeTypeInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeTypeInput"></a>

```java
public java.lang.String getGranteeTypeInput();
```

- *Type:* java.lang.String

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.access"></a>

```java
public java.util.List<java.lang.String> getAccess();
```

- *Type:* java.util.List<java.lang.String>

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.grantee"></a>

```java
public java.lang.String getGrantee();
```

- *Type:* java.lang.String

---

##### `granteeType`<sup>Required</sup> <a name="granteeType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeType"></a>

```java
public java.lang.String getGranteeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a> OR com.hashicorp.cdktf.IResolvable

---


### ElastictranscoderPipelineNotificationsOutputReference <a name="ElastictranscoderPipelineNotificationsOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipelineNotificationsOutputReference;

new ElastictranscoderPipelineNotificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetCompleted">resetCompleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetError">resetError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetProgressing">resetProgressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetWarning">resetWarning</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompleted` <a name="resetCompleted" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetCompleted"></a>

```java
public void resetCompleted()
```

##### `resetError` <a name="resetError" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetError"></a>

```java
public void resetError()
```

##### `resetProgressing` <a name="resetProgressing" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetProgressing"></a>

```java
public void resetProgressing()
```

##### `resetWarning` <a name="resetWarning" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetWarning"></a>

```java
public void resetWarning()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completedInput">completedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.errorInput">errorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressingInput">progressingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warningInput">warningInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completed">completed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.error">error</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressing">progressing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warning">warning</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `completedInput`<sup>Optional</sup> <a name="completedInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completedInput"></a>

```java
public java.lang.String getCompletedInput();
```

- *Type:* java.lang.String

---

##### `errorInput`<sup>Optional</sup> <a name="errorInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.errorInput"></a>

```java
public java.lang.String getErrorInput();
```

- *Type:* java.lang.String

---

##### `progressingInput`<sup>Optional</sup> <a name="progressingInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressingInput"></a>

```java
public java.lang.String getProgressingInput();
```

- *Type:* java.lang.String

---

##### `warningInput`<sup>Optional</sup> <a name="warningInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warningInput"></a>

```java
public java.lang.String getWarningInput();
```

- *Type:* java.lang.String

---

##### `completed`<sup>Required</sup> <a name="completed" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completed"></a>

```java
public java.lang.String getCompleted();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.error"></a>

```java
public java.lang.String getError();
```

- *Type:* java.lang.String

---

##### `progressing`<sup>Required</sup> <a name="progressing" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressing"></a>

```java
public java.lang.String getProgressing();
```

- *Type:* java.lang.String

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warning"></a>

```java
public java.lang.String getWarning();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.internalValue"></a>

```java
public ElastictranscoderPipelineNotifications getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

---


### ElastictranscoderPipelineThumbnailConfigOutputReference <a name="ElastictranscoderPipelineThumbnailConfigOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipelineThumbnailConfigOutputReference;

new ElastictranscoderPipelineThumbnailConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetStorageClass"></a>

```java
public void resetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.internalValue"></a>

```java
public ElastictranscoderPipelineThumbnailConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

---


### ElastictranscoderPipelineThumbnailConfigPermissionsList <a name="ElastictranscoderPipelineThumbnailConfigPermissionsList" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList;

new ElastictranscoderPipelineThumbnailConfigPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.get"></a>

```java
public ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>>

---


### ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference <a name="ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_pipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference;

new ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGrantee">resetGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGranteeType">resetGranteeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccess` <a name="resetAccess" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetAccess"></a>

```java
public void resetAccess()
```

##### `resetGrantee` <a name="resetGrantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGrantee"></a>

```java
public void resetGrantee()
```

##### `resetGranteeType` <a name="resetGranteeType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGranteeType"></a>

```java
public void resetGranteeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.accessInput">accessInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeInput">granteeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeTypeInput">granteeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.access">access</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.grantee">grantee</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeType">granteeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.accessInput"></a>

```java
public java.util.List<java.lang.String> getAccessInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `granteeInput`<sup>Optional</sup> <a name="granteeInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeInput"></a>

```java
public java.lang.String getGranteeInput();
```

- *Type:* java.lang.String

---

##### `granteeTypeInput`<sup>Optional</sup> <a name="granteeTypeInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeTypeInput"></a>

```java
public java.lang.String getGranteeTypeInput();
```

- *Type:* java.lang.String

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.access"></a>

```java
public java.util.List<java.lang.String> getAccess();
```

- *Type:* java.util.List<java.lang.String>

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.grantee"></a>

```java
public java.lang.String getGrantee();
```

- *Type:* java.lang.String

---

##### `granteeType`<sup>Required</sup> <a name="granteeType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeType"></a>

```java
public java.lang.String getGranteeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a> OR com.hashicorp.cdktf.IResolvable

---



