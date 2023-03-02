# `transcribeLanguageModel` Submodule <a name="`transcribeLanguageModel` Submodule" id="@cdktf/provider-aws.transcribeLanguageModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeLanguageModel <a name="TranscribeLanguageModel" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model aws_transcribe_language_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_language_model.TranscribeLanguageModel;

TranscribeLanguageModel.Builder.create(Construct scope, java.lang.String id)
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
    .baseModelName(java.lang.String)
    .inputDataConfig(TranscribeLanguageModelInputDataConfig)
    .languageCode(java.lang.String)
    .modelName(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TranscribeLanguageModelTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.baseModelName">baseModelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#language_code TranscribeLanguageModel#language_code}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.modelName">modelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#model_name TranscribeLanguageModel#model_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#id TranscribeLanguageModel#id}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags TranscribeLanguageModel#tags}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baseModelName`<sup>Required</sup> <a name="baseModelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.baseModelName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}.

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.inputDataConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#input_data_config TranscribeLanguageModel#input_data_config}

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.languageCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#language_code TranscribeLanguageModel#language_code}.

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.modelName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#model_name TranscribeLanguageModel#model_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#id TranscribeLanguageModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags TranscribeLanguageModel#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#timeouts TranscribeLanguageModel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig">putInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putInputDataConfig` <a name="putInputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig"></a>

```java
public void putInputDataConfig(TranscribeLanguageModelInputDataConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putTimeouts"></a>

```java
public void putTimeouts(TranscribeLanguageModelTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_language_model.TranscribeLanguageModel;

TranscribeLanguageModel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_language_model.TranscribeLanguageModel;

TranscribeLanguageModel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_language_model.TranscribeLanguageModel;

TranscribeLanguageModel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference">TranscribeLanguageModelInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference">TranscribeLanguageModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelNameInput">baseModelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfigInput">inputDataConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelNameInput">modelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelName">baseModelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelName">modelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfig"></a>

```java
public TranscribeLanguageModelInputDataConfigOutputReference getInputDataConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference">TranscribeLanguageModelInputDataConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeouts"></a>

```java
public TranscribeLanguageModelTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference">TranscribeLanguageModelTimeoutsOutputReference</a>

---

##### `baseModelNameInput`<sup>Optional</sup> <a name="baseModelNameInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelNameInput"></a>

```java
public java.lang.String getBaseModelNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputDataConfigInput`<sup>Optional</sup> <a name="inputDataConfigInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfigInput"></a>

```java
public TranscribeLanguageModelInputDataConfig getInputDataConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelNameInput"></a>

```java
public java.lang.String getModelNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `baseModelName`<sup>Required</sup> <a name="baseModelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelName"></a>

```java
public java.lang.String getBaseModelName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeLanguageModelConfig <a name="TranscribeLanguageModelConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_language_model.TranscribeLanguageModelConfig;

TranscribeLanguageModelConfig.builder()
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
    .baseModelName(java.lang.String)
    .inputDataConfig(TranscribeLanguageModelInputDataConfig)
    .languageCode(java.lang.String)
    .modelName(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TranscribeLanguageModelTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.baseModelName">baseModelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#language_code TranscribeLanguageModel#language_code}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.modelName">modelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#model_name TranscribeLanguageModel#model_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#id TranscribeLanguageModel#id}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags TranscribeLanguageModel#tags}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baseModelName`<sup>Required</sup> <a name="baseModelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.baseModelName"></a>

```java
public java.lang.String getBaseModelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}.

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.inputDataConfig"></a>

```java
public TranscribeLanguageModelInputDataConfig getInputDataConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#input_data_config TranscribeLanguageModel#input_data_config}

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#language_code TranscribeLanguageModel#language_code}.

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#model_name TranscribeLanguageModel#model_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#id TranscribeLanguageModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags TranscribeLanguageModel#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.timeouts"></a>

```java
public TranscribeLanguageModelTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#timeouts TranscribeLanguageModel#timeouts}

---

### TranscribeLanguageModelInputDataConfig <a name="TranscribeLanguageModelInputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_language_model.TranscribeLanguageModelInputDataConfig;

TranscribeLanguageModelInputDataConfig.builder()
    .dataAccessRoleArn(java.lang.String)
    .s3Uri(java.lang.String)
//  .tuningDataS3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#data_access_role_arn TranscribeLanguageModel#data_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#s3_uri TranscribeLanguageModel#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.tuningDataS3Uri">tuningDataS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tuning_data_s3_uri TranscribeLanguageModel#tuning_data_s3_uri}. |

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.dataAccessRoleArn"></a>

```java
public java.lang.String getDataAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#data_access_role_arn TranscribeLanguageModel#data_access_role_arn}.

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#s3_uri TranscribeLanguageModel#s3_uri}.

---

##### `tuningDataS3Uri`<sup>Optional</sup> <a name="tuningDataS3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.tuningDataS3Uri"></a>

```java
public java.lang.String getTuningDataS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tuning_data_s3_uri TranscribeLanguageModel#tuning_data_s3_uri}.

---

### TranscribeLanguageModelTimeouts <a name="TranscribeLanguageModelTimeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_language_model.TranscribeLanguageModelTimeouts;

TranscribeLanguageModelTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#create TranscribeLanguageModel#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#create TranscribeLanguageModel#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeLanguageModelInputDataConfigOutputReference <a name="TranscribeLanguageModelInputDataConfigOutputReference" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_language_model.TranscribeLanguageModelInputDataConfigOutputReference;

new TranscribeLanguageModelInputDataConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resetTuningDataS3Uri">resetTuningDataS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTuningDataS3Uri` <a name="resetTuningDataS3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resetTuningDataS3Uri"></a>

```java
public void resetTuningDataS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArnInput">dataAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3UriInput">tuningDataS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3Uri">tuningDataS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataAccessRoleArnInput`<sup>Optional</sup> <a name="dataAccessRoleArnInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArnInput"></a>

```java
public java.lang.String getDataAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `tuningDataS3UriInput`<sup>Optional</sup> <a name="tuningDataS3UriInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3UriInput"></a>

```java
public java.lang.String getTuningDataS3UriInput();
```

- *Type:* java.lang.String

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArn"></a>

```java
public java.lang.String getDataAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `tuningDataS3Uri`<sup>Required</sup> <a name="tuningDataS3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3Uri"></a>

```java
public java.lang.String getTuningDataS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.internalValue"></a>

```java
public TranscribeLanguageModelInputDataConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

---


### TranscribeLanguageModelTimeoutsOutputReference <a name="TranscribeLanguageModelTimeoutsOutputReference" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_language_model.TranscribeLanguageModelTimeoutsOutputReference;

new TranscribeLanguageModelTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



