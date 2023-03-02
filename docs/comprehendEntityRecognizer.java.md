# `comprehendEntityRecognizer` Submodule <a name="`comprehendEntityRecognizer` Submodule" id="@cdktf/provider-aws.comprehendEntityRecognizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendEntityRecognizer <a name="ComprehendEntityRecognizer" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer aws_comprehend_entity_recognizer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizer;

ComprehendEntityRecognizer.Builder.create(Construct scope, java.lang.String id)
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
    .dataAccessRoleArn(java.lang.String)
    .inputDataConfig(ComprehendEntityRecognizerInputDataConfig)
    .languageCode(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .modelKmsKeyId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ComprehendEntityRecognizerTimeouts)
//  .versionName(java.lang.String)
//  .versionNamePrefix(java.lang.String)
//  .volumeKmsKeyId(java.lang.String)
//  .vpcConfig(ComprehendEntityRecognizerVpcConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#data_access_role_arn ComprehendEntityRecognizer#data_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#language_code ComprehendEntityRecognizer#language_code}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#name ComprehendEntityRecognizer#name}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#id ComprehendEntityRecognizer#id}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.modelKmsKeyId">modelKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#model_kms_key_id ComprehendEntityRecognizer#model_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#tags ComprehendEntityRecognizer#tags}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#tags_all ComprehendEntityRecognizer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts">ComprehendEntityRecognizerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.versionName">versionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#version_name ComprehendEntityRecognizer#version_name}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.versionNamePrefix">versionNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#version_name_prefix ComprehendEntityRecognizer#version_name_prefix}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#volume_kms_key_id ComprehendEntityRecognizer#volume_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | vpc_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.dataAccessRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#data_access_role_arn ComprehendEntityRecognizer#data_access_role_arn}.

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.inputDataConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#input_data_config ComprehendEntityRecognizer#input_data_config}

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.languageCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#language_code ComprehendEntityRecognizer#language_code}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#name ComprehendEntityRecognizer#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#id ComprehendEntityRecognizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modelKmsKeyId`<sup>Optional</sup> <a name="modelKmsKeyId" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.modelKmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#model_kms_key_id ComprehendEntityRecognizer#model_kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#tags ComprehendEntityRecognizer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#tags_all ComprehendEntityRecognizer#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts">ComprehendEntityRecognizerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#timeouts ComprehendEntityRecognizer#timeouts}

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.versionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#version_name ComprehendEntityRecognizer#version_name}.

---

##### `versionNamePrefix`<sup>Optional</sup> <a name="versionNamePrefix" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.versionNamePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#version_name_prefix ComprehendEntityRecognizer#version_name_prefix}.

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.volumeKmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#volume_kms_key_id ComprehendEntityRecognizer#volume_kms_key_id}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#vpc_config ComprehendEntityRecognizer#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig">putInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelKmsKeyId">resetModelKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVersionName">resetVersionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVersionNamePrefix">resetVersionNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVolumeKmsKeyId">resetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putInputDataConfig` <a name="putInputDataConfig" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig"></a>

```java
public void putInputDataConfig(ComprehendEntityRecognizerInputDataConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.putTimeouts"></a>

```java
public void putTimeouts(ComprehendEntityRecognizerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts">ComprehendEntityRecognizerTimeouts</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.putVpcConfig"></a>

```java
public void putVpcConfig(ComprehendEntityRecognizerVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetId"></a>

```java
public void resetId()
```

##### `resetModelKmsKeyId` <a name="resetModelKmsKeyId" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelKmsKeyId"></a>

```java
public void resetModelKmsKeyId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersionName` <a name="resetVersionName" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVersionName"></a>

```java
public void resetVersionName()
```

##### `resetVersionNamePrefix` <a name="resetVersionNamePrefix" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVersionNamePrefix"></a>

```java
public void resetVersionNamePrefix()
```

##### `resetVolumeKmsKeyId` <a name="resetVolumeKmsKeyId" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVolumeKmsKeyId"></a>

```java
public void resetVolumeKmsKeyId()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizer;

ComprehendEntityRecognizer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizer;

ComprehendEntityRecognizer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizer;

ComprehendEntityRecognizer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference">ComprehendEntityRecognizerInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference">ComprehendEntityRecognizerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference">ComprehendEntityRecognizerVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArnInput">dataAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfigInput">inputDataConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyIdInput">modelKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts">ComprehendEntityRecognizerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionNameInput">versionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionNamePrefixInput">versionNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyIdInput">volumeKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfigInput">vpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyId">modelKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionNamePrefix">versionNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfig"></a>

```java
public ComprehendEntityRecognizerInputDataConfigOutputReference getInputDataConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference">ComprehendEntityRecognizerInputDataConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.timeouts"></a>

```java
public ComprehendEntityRecognizerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference">ComprehendEntityRecognizerTimeoutsOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfig"></a>

```java
public ComprehendEntityRecognizerVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference">ComprehendEntityRecognizerVpcConfigOutputReference</a>

---

##### `dataAccessRoleArnInput`<sup>Optional</sup> <a name="dataAccessRoleArnInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArnInput"></a>

```java
public java.lang.String getDataAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputDataConfigInput`<sup>Optional</sup> <a name="inputDataConfigInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfigInput"></a>

```java
public ComprehendEntityRecognizerInputDataConfig getInputDataConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `modelKmsKeyIdInput`<sup>Optional</sup> <a name="modelKmsKeyIdInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyIdInput"></a>

```java
public java.lang.String getModelKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts">ComprehendEntityRecognizerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionNameInput"></a>

```java
public java.lang.String getVersionNameInput();
```

- *Type:* java.lang.String

---

##### `versionNamePrefixInput`<sup>Optional</sup> <a name="versionNamePrefixInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionNamePrefixInput"></a>

```java
public java.lang.String getVersionNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `volumeKmsKeyIdInput`<sup>Optional</sup> <a name="volumeKmsKeyIdInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyIdInput"></a>

```java
public java.lang.String getVolumeKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfigInput"></a>

```java
public ComprehendEntityRecognizerVpcConfig getVpcConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArn"></a>

```java
public java.lang.String getDataAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `modelKmsKeyId`<sup>Required</sup> <a name="modelKmsKeyId" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyId"></a>

```java
public java.lang.String getModelKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

##### `versionNamePrefix`<sup>Required</sup> <a name="versionNamePrefix" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionNamePrefix"></a>

```java
public java.lang.String getVersionNamePrefix();
```

- *Type:* java.lang.String

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendEntityRecognizerConfig <a name="ComprehendEntityRecognizerConfig" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerConfig;

ComprehendEntityRecognizerConfig.builder()
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
    .dataAccessRoleArn(java.lang.String)
    .inputDataConfig(ComprehendEntityRecognizerInputDataConfig)
    .languageCode(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .modelKmsKeyId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ComprehendEntityRecognizerTimeouts)
//  .versionName(java.lang.String)
//  .versionNamePrefix(java.lang.String)
//  .volumeKmsKeyId(java.lang.String)
//  .vpcConfig(ComprehendEntityRecognizerVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#data_access_role_arn ComprehendEntityRecognizer#data_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#language_code ComprehendEntityRecognizer#language_code}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#name ComprehendEntityRecognizer#name}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#id ComprehendEntityRecognizer#id}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelKmsKeyId">modelKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#model_kms_key_id ComprehendEntityRecognizer#model_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#tags ComprehendEntityRecognizer#tags}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#tags_all ComprehendEntityRecognizer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts">ComprehendEntityRecognizerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.versionName">versionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#version_name ComprehendEntityRecognizer#version_name}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.versionNamePrefix">versionNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#version_name_prefix ComprehendEntityRecognizer#version_name_prefix}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#volume_kms_key_id ComprehendEntityRecognizer#volume_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dataAccessRoleArn"></a>

```java
public java.lang.String getDataAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#data_access_role_arn ComprehendEntityRecognizer#data_access_role_arn}.

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.inputDataConfig"></a>

```java
public ComprehendEntityRecognizerInputDataConfig getInputDataConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#input_data_config ComprehendEntityRecognizer#input_data_config}

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#language_code ComprehendEntityRecognizer#language_code}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#name ComprehendEntityRecognizer#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#id ComprehendEntityRecognizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modelKmsKeyId`<sup>Optional</sup> <a name="modelKmsKeyId" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelKmsKeyId"></a>

```java
public java.lang.String getModelKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#model_kms_key_id ComprehendEntityRecognizer#model_kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#tags ComprehendEntityRecognizer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#tags_all ComprehendEntityRecognizer#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.timeouts"></a>

```java
public ComprehendEntityRecognizerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts">ComprehendEntityRecognizerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#timeouts ComprehendEntityRecognizer#timeouts}

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#version_name ComprehendEntityRecognizer#version_name}.

---

##### `versionNamePrefix`<sup>Optional</sup> <a name="versionNamePrefix" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.versionNamePrefix"></a>

```java
public java.lang.String getVersionNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#version_name_prefix ComprehendEntityRecognizer#version_name_prefix}.

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#volume_kms_key_id ComprehendEntityRecognizer#volume_kms_key_id}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.vpcConfig"></a>

```java
public ComprehendEntityRecognizerVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#vpc_config ComprehendEntityRecognizer#vpc_config}

---

### ComprehendEntityRecognizerInputDataConfig <a name="ComprehendEntityRecognizerInputDataConfig" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfig;

ComprehendEntityRecognizerInputDataConfig.builder()
    .entityTypes(IResolvable)
    .entityTypes(java.util.List<ComprehendEntityRecognizerInputDataConfigEntityTypes>)
//  .annotations(ComprehendEntityRecognizerInputDataConfigAnnotations)
//  .augmentedManifests(IResolvable)
//  .augmentedManifests(java.util.List<ComprehendEntityRecognizerInputDataConfigAugmentedManifests>)
//  .dataFormat(java.lang.String)
//  .documents(ComprehendEntityRecognizerInputDataConfigDocuments)
//  .entityList(ComprehendEntityRecognizerInputDataConfigEntityList)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityTypes">entityTypes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>></code> | entity_types block. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | annotations block. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.augmentedManifests">augmentedManifests</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>></code> | augmented_manifests block. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#data_format ComprehendEntityRecognizer#data_format}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.documents">documents</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a></code> | documents block. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityList">entityList</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityList">ComprehendEntityRecognizerInputDataConfigEntityList</a></code> | entity_list block. |

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityTypes"></a>

```java
public java.lang.Object getEntityTypes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>>

entity_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#entity_types ComprehendEntityRecognizer#entity_types}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.annotations"></a>

```java
public ComprehendEntityRecognizerInputDataConfigAnnotations getAnnotations();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

annotations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#annotations ComprehendEntityRecognizer#annotations}

---

##### `augmentedManifests`<sup>Optional</sup> <a name="augmentedManifests" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.augmentedManifests"></a>

```java
public java.lang.Object getAugmentedManifests();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>>

augmented_manifests block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#augmented_manifests ComprehendEntityRecognizer#augmented_manifests}

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#data_format ComprehendEntityRecognizer#data_format}.

---

##### `documents`<sup>Optional</sup> <a name="documents" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.documents"></a>

```java
public ComprehendEntityRecognizerInputDataConfigDocuments getDocuments();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

documents block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#documents ComprehendEntityRecognizer#documents}

---

##### `entityList`<sup>Optional</sup> <a name="entityList" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityList"></a>

```java
public ComprehendEntityRecognizerInputDataConfigEntityList getEntityList();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityList">ComprehendEntityRecognizerInputDataConfigEntityList</a>

entity_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#entity_list ComprehendEntityRecognizer#entity_list}

---

### ComprehendEntityRecognizerInputDataConfigAnnotations <a name="ComprehendEntityRecognizerInputDataConfigAnnotations" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigAnnotations;

ComprehendEntityRecognizerInputDataConfigAnnotations.builder()
    .s3Uri(java.lang.String)
//  .testS3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.testS3Uri">testS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}. |

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}.

---

##### `testS3Uri`<sup>Optional</sup> <a name="testS3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.testS3Uri"></a>

```java
public java.lang.String getTestS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}.

---

### ComprehendEntityRecognizerInputDataConfigAugmentedManifests <a name="ComprehendEntityRecognizerInputDataConfigAugmentedManifests" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests;

ComprehendEntityRecognizerInputDataConfigAugmentedManifests.builder()
    .attributeNames(java.util.List<java.lang.String>)
    .s3Uri(java.lang.String)
//  .annotationDataS3Uri(java.lang.String)
//  .documentType(java.lang.String)
//  .sourceDocumentsS3Uri(java.lang.String)
//  .split(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.attributeNames">attributeNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#attribute_names ComprehendEntityRecognizer#attribute_names}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.annotationDataS3Uri">annotationDataS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#annotation_data_s3_uri ComprehendEntityRecognizer#annotation_data_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.documentType">documentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#document_type ComprehendEntityRecognizer#document_type}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri">sourceDocumentsS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#source_documents_s3_uri ComprehendEntityRecognizer#source_documents_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.split">split</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#split ComprehendEntityRecognizer#split}. |

---

##### `attributeNames`<sup>Required</sup> <a name="attributeNames" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.attributeNames"></a>

```java
public java.util.List<java.lang.String> getAttributeNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#attribute_names ComprehendEntityRecognizer#attribute_names}.

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}.

---

##### `annotationDataS3Uri`<sup>Optional</sup> <a name="annotationDataS3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.annotationDataS3Uri"></a>

```java
public java.lang.String getAnnotationDataS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#annotation_data_s3_uri ComprehendEntityRecognizer#annotation_data_s3_uri}.

---

##### `documentType`<sup>Optional</sup> <a name="documentType" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.documentType"></a>

```java
public java.lang.String getDocumentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#document_type ComprehendEntityRecognizer#document_type}.

---

##### `sourceDocumentsS3Uri`<sup>Optional</sup> <a name="sourceDocumentsS3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri"></a>

```java
public java.lang.String getSourceDocumentsS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#source_documents_s3_uri ComprehendEntityRecognizer#source_documents_s3_uri}.

---

##### `split`<sup>Optional</sup> <a name="split" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.split"></a>

```java
public java.lang.String getSplit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#split ComprehendEntityRecognizer#split}.

---

### ComprehendEntityRecognizerInputDataConfigDocuments <a name="ComprehendEntityRecognizerInputDataConfigDocuments" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigDocuments;

ComprehendEntityRecognizerInputDataConfigDocuments.builder()
    .s3Uri(java.lang.String)
//  .inputFormat(java.lang.String)
//  .testS3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#input_format ComprehendEntityRecognizer#input_format}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.testS3Uri">testS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}. |

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}.

---

##### `inputFormat`<sup>Optional</sup> <a name="inputFormat" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#input_format ComprehendEntityRecognizer#input_format}.

---

##### `testS3Uri`<sup>Optional</sup> <a name="testS3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.testS3Uri"></a>

```java
public java.lang.String getTestS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}.

---

### ComprehendEntityRecognizerInputDataConfigEntityList <a name="ComprehendEntityRecognizerInputDataConfigEntityList" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigEntityList;

ComprehendEntityRecognizerInputDataConfigEntityList.builder()
    .s3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityList.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}. |

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityList.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}.

---

### ComprehendEntityRecognizerInputDataConfigEntityTypes <a name="ComprehendEntityRecognizerInputDataConfigEntityTypes" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes;

ComprehendEntityRecognizerInputDataConfigEntityTypes.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#type ComprehendEntityRecognizer#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#type ComprehendEntityRecognizer#type}.

---

### ComprehendEntityRecognizerTimeouts <a name="ComprehendEntityRecognizerTimeouts" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerTimeouts;

ComprehendEntityRecognizerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#create ComprehendEntityRecognizer#create}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#delete ComprehendEntityRecognizer#delete}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#update ComprehendEntityRecognizer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#create ComprehendEntityRecognizer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#delete ComprehendEntityRecognizer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#update ComprehendEntityRecognizer#update}.

---

### ComprehendEntityRecognizerVpcConfig <a name="ComprehendEntityRecognizerVpcConfig" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerVpcConfig;

ComprehendEntityRecognizerVpcConfig.builder()
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#security_group_ids ComprehendEntityRecognizer#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#subnets ComprehendEntityRecognizer#subnets}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#security_group_ids ComprehendEntityRecognizer#security_group_ids}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#subnets ComprehendEntityRecognizer#subnets}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference <a name="ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference;

new ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetTestS3Uri">resetTestS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestS3Uri` <a name="resetTestS3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetTestS3Uri"></a>

```java
public void resetTestS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3UriInput">testS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri">testS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `testS3UriInput`<sup>Optional</sup> <a name="testS3UriInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3UriInput"></a>

```java
public java.lang.String getTestS3UriInput();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `testS3Uri`<sup>Required</sup> <a name="testS3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri"></a>

```java
public java.lang.String getTestS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue"></a>

```java
public ComprehendEntityRecognizerInputDataConfigAnnotations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

---


### ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList <a name="ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList;

new ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get"></a>

```java
public ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>>

---


### ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference <a name="ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference;

new ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri">resetAnnotationDataS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetDocumentType">resetDocumentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri">resetSourceDocumentsS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSplit">resetSplit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotationDataS3Uri` <a name="resetAnnotationDataS3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri"></a>

```java
public void resetAnnotationDataS3Uri()
```

##### `resetDocumentType` <a name="resetDocumentType" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetDocumentType"></a>

```java
public void resetDocumentType()
```

##### `resetSourceDocumentsS3Uri` <a name="resetSourceDocumentsS3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri"></a>

```java
public void resetSourceDocumentsS3Uri()
```

##### `resetSplit` <a name="resetSplit" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSplit"></a>

```java
public void resetSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput">annotationDataS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput">attributeNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput">documentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput">sourceDocumentsS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.splitInput">splitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri">annotationDataS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames">attributeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType">documentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri">sourceDocumentsS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split">split</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotationDataS3UriInput`<sup>Optional</sup> <a name="annotationDataS3UriInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput"></a>

```java
public java.lang.String getAnnotationDataS3UriInput();
```

- *Type:* java.lang.String

---

##### `attributeNamesInput`<sup>Optional</sup> <a name="attributeNamesInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput"></a>

```java
public java.util.List<java.lang.String> getAttributeNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `documentTypeInput`<sup>Optional</sup> <a name="documentTypeInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput"></a>

```java
public java.lang.String getDocumentTypeInput();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `sourceDocumentsS3UriInput`<sup>Optional</sup> <a name="sourceDocumentsS3UriInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput"></a>

```java
public java.lang.String getSourceDocumentsS3UriInput();
```

- *Type:* java.lang.String

---

##### `splitInput`<sup>Optional</sup> <a name="splitInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.splitInput"></a>

```java
public java.lang.String getSplitInput();
```

- *Type:* java.lang.String

---

##### `annotationDataS3Uri`<sup>Required</sup> <a name="annotationDataS3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri"></a>

```java
public java.lang.String getAnnotationDataS3Uri();
```

- *Type:* java.lang.String

---

##### `attributeNames`<sup>Required</sup> <a name="attributeNames" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames"></a>

```java
public java.util.List<java.lang.String> getAttributeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `documentType`<sup>Required</sup> <a name="documentType" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType"></a>

```java
public java.lang.String getDocumentType();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `sourceDocumentsS3Uri`<sup>Required</sup> <a name="sourceDocumentsS3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri"></a>

```java
public java.lang.String getSourceDocumentsS3Uri();
```

- *Type:* java.lang.String

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split"></a>

```java
public java.lang.String getSplit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a> OR com.hashicorp.cdktf.IResolvable

---


### ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference <a name="ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference;

new ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetInputFormat">resetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetTestS3Uri">resetTestS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputFormat` <a name="resetInputFormat" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetInputFormat"></a>

```java
public void resetInputFormat()
```

##### `resetTestS3Uri` <a name="resetTestS3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetTestS3Uri"></a>

```java
public void resetTestS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3UriInput">testS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri">testS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormatInput"></a>

```java
public java.lang.String getInputFormatInput();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `testS3UriInput`<sup>Optional</sup> <a name="testS3UriInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3UriInput"></a>

```java
public java.lang.String getTestS3UriInput();
```

- *Type:* java.lang.String

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `testS3Uri`<sup>Required</sup> <a name="testS3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri"></a>

```java
public java.lang.String getTestS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue"></a>

```java
public ComprehendEntityRecognizerInputDataConfigDocuments getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

---


### ComprehendEntityRecognizerInputDataConfigEntityListOutputReference <a name="ComprehendEntityRecognizerInputDataConfigEntityListOutputReference" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference;

new ComprehendEntityRecognizerInputDataConfigEntityListOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityList">ComprehendEntityRecognizerInputDataConfigEntityList</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference.property.internalValue"></a>

```java
public ComprehendEntityRecognizerInputDataConfigEntityList getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityList">ComprehendEntityRecognizerInputDataConfigEntityList</a>

---


### ComprehendEntityRecognizerInputDataConfigEntityTypesList <a name="ComprehendEntityRecognizerInputDataConfigEntityTypesList" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList;

new ComprehendEntityRecognizerInputDataConfigEntityTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.get"></a>

```java
public ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>>

---


### ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference <a name="ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference;

new ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a> OR com.hashicorp.cdktf.IResolvable

---


### ComprehendEntityRecognizerInputDataConfigOutputReference <a name="ComprehendEntityRecognizerInputDataConfigOutputReference" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigOutputReference;

new ComprehendEntityRecognizerInputDataConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAnnotations">putAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAugmentedManifests">putAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments">putDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityList">putEntityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityTypes">putEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAugmentedManifests">resetAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDocuments">resetDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetEntityList">resetEntityList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnnotations` <a name="putAnnotations" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAnnotations"></a>

```java
public void putAnnotations(ComprehendEntityRecognizerInputDataConfigAnnotations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAnnotations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

---

##### `putAugmentedManifests` <a name="putAugmentedManifests" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAugmentedManifests"></a>

```java
public void putAugmentedManifests(IResolvable OR java.util.List<ComprehendEntityRecognizerInputDataConfigAugmentedManifests> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAugmentedManifests.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>>

---

##### `putDocuments` <a name="putDocuments" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments"></a>

```java
public void putDocuments(ComprehendEntityRecognizerInputDataConfigDocuments value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

---

##### `putEntityList` <a name="putEntityList" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityList"></a>

```java
public void putEntityList(ComprehendEntityRecognizerInputDataConfigEntityList value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityList">ComprehendEntityRecognizerInputDataConfigEntityList</a>

---

##### `putEntityTypes` <a name="putEntityTypes" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityTypes"></a>

```java
public void putEntityTypes(IResolvable OR java.util.List<ComprehendEntityRecognizerInputDataConfigEntityTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAugmentedManifests` <a name="resetAugmentedManifests" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAugmentedManifests"></a>

```java
public void resetAugmentedManifests()
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDataFormat"></a>

```java
public void resetDataFormat()
```

##### `resetDocuments` <a name="resetDocuments" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDocuments"></a>

```java
public void resetDocuments()
```

##### `resetEntityList` <a name="resetEntityList" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetEntityList"></a>

```java
public void resetEntityList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests">augmentedManifests</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documents">documents</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList">entityList</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference">ComprehendEntityRecognizerInputDataConfigEntityListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList">ComprehendEntityRecognizerInputDataConfigEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotationsInput">annotationsInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifestsInput">augmentedManifestsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormatInput">dataFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documentsInput">documentsInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityListInput">entityListInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityList">ComprehendEntityRecognizerInputDataConfigEntityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypesInput">entityTypesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations"></a>

```java
public ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference getAnnotations();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a>

---

##### `augmentedManifests`<sup>Required</sup> <a name="augmentedManifests" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests"></a>

```java
public ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList getAugmentedManifests();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a>

---

##### `documents`<sup>Required</sup> <a name="documents" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documents"></a>

```java
public ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference getDocuments();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a>

---

##### `entityList`<sup>Required</sup> <a name="entityList" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList"></a>

```java
public ComprehendEntityRecognizerInputDataConfigEntityListOutputReference getEntityList();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListOutputReference">ComprehendEntityRecognizerInputDataConfigEntityListOutputReference</a>

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes"></a>

```java
public ComprehendEntityRecognizerInputDataConfigEntityTypesList getEntityTypes();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList">ComprehendEntityRecognizerInputDataConfigEntityTypesList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotationsInput"></a>

```java
public ComprehendEntityRecognizerInputDataConfigAnnotations getAnnotationsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

---

##### `augmentedManifestsInput`<sup>Optional</sup> <a name="augmentedManifestsInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifestsInput"></a>

```java
public java.lang.Object getAugmentedManifestsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>>

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormatInput"></a>

```java
public java.lang.String getDataFormatInput();
```

- *Type:* java.lang.String

---

##### `documentsInput`<sup>Optional</sup> <a name="documentsInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documentsInput"></a>

```java
public ComprehendEntityRecognizerInputDataConfigDocuments getDocumentsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

---

##### `entityListInput`<sup>Optional</sup> <a name="entityListInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityListInput"></a>

```java
public ComprehendEntityRecognizerInputDataConfigEntityList getEntityListInput();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityList">ComprehendEntityRecognizerInputDataConfigEntityList</a>

---

##### `entityTypesInput`<sup>Optional</sup> <a name="entityTypesInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypesInput"></a>

```java
public java.lang.Object getEntityTypesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>>

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue"></a>

```java
public ComprehendEntityRecognizerInputDataConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

---


### ComprehendEntityRecognizerTimeoutsOutputReference <a name="ComprehendEntityRecognizerTimeoutsOutputReference" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerTimeoutsOutputReference;

new ComprehendEntityRecognizerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts">ComprehendEntityRecognizerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerTimeouts">ComprehendEntityRecognizerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### ComprehendEntityRecognizerVpcConfigOutputReference <a name="ComprehendEntityRecognizerVpcConfigOutputReference" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.comprehend_entity_recognizer.ComprehendEntityRecognizerVpcConfigOutputReference;

new ComprehendEntityRecognizerVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue"></a>

```java
public ComprehendEntityRecognizerVpcConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

---



