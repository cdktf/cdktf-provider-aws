# `transcribeVocabulary` Submodule <a name="`transcribeVocabulary` Submodule" id="@cdktf/provider-aws.transcribeVocabulary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeVocabulary <a name="TranscribeVocabulary" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary aws_transcribe_vocabulary}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_vocabulary.TranscribeVocabulary;

TranscribeVocabulary.Builder.create(Construct scope, java.lang.String id)
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
    .languageCode(java.lang.String)
    .vocabularyName(java.lang.String)
//  .id(java.lang.String)
//  .phrases(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TranscribeVocabularyTimeouts)
//  .vocabularyFileUri(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.vocabularyName">vocabularyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#id TranscribeVocabulary#id}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.phrases">phrases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#tags TranscribeVocabulary#tags}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#tags_all TranscribeVocabulary#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.vocabularyFileUri">vocabularyFileUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.languageCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}.

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.vocabularyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#id TranscribeVocabulary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `phrases`<sup>Optional</sup> <a name="phrases" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.phrases"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#tags TranscribeVocabulary#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#tags_all TranscribeVocabulary#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#timeouts TranscribeVocabulary#timeouts}

---

##### `vocabularyFileUri`<sup>Optional</sup> <a name="vocabularyFileUri" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.vocabularyFileUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetPhrases">resetPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetVocabularyFileUri">resetVocabularyFileUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.putTimeouts"></a>

```java
public void putTimeouts(TranscribeVocabularyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetId"></a>

```java
public void resetId()
```

##### `resetPhrases` <a name="resetPhrases" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetPhrases"></a>

```java
public void resetPhrases()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVocabularyFileUri` <a name="resetVocabularyFileUri" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetVocabularyFileUri"></a>

```java
public void resetVocabularyFileUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_vocabulary.TranscribeVocabulary;

TranscribeVocabulary.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_vocabulary.TranscribeVocabulary;

TranscribeVocabulary.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_vocabulary.TranscribeVocabulary;

TranscribeVocabulary.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.downloadUri">downloadUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference">TranscribeVocabularyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.phrasesInput">phrasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUriInput">vocabularyFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyNameInput">vocabularyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.phrases">phrases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUri">vocabularyFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyName">vocabularyName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `downloadUri`<sup>Required</sup> <a name="downloadUri" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.downloadUri"></a>

```java
public java.lang.String getDownloadUri();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.timeouts"></a>

```java
public TranscribeVocabularyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference">TranscribeVocabularyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `phrasesInput`<sup>Optional</sup> <a name="phrasesInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.phrasesInput"></a>

```java
public java.util.List<java.lang.String> getPhrasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vocabularyFileUriInput`<sup>Optional</sup> <a name="vocabularyFileUriInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUriInput"></a>

```java
public java.lang.String getVocabularyFileUriInput();
```

- *Type:* java.lang.String

---

##### `vocabularyNameInput`<sup>Optional</sup> <a name="vocabularyNameInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyNameInput"></a>

```java
public java.lang.String getVocabularyNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `phrases`<sup>Required</sup> <a name="phrases" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.phrases"></a>

```java
public java.util.List<java.lang.String> getPhrases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vocabularyFileUri`<sup>Required</sup> <a name="vocabularyFileUri" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUri"></a>

```java
public java.lang.String getVocabularyFileUri();
```

- *Type:* java.lang.String

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyName"></a>

```java
public java.lang.String getVocabularyName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeVocabularyConfig <a name="TranscribeVocabularyConfig" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_vocabulary.TranscribeVocabularyConfig;

TranscribeVocabularyConfig.builder()
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
    .languageCode(java.lang.String)
    .vocabularyName(java.lang.String)
//  .id(java.lang.String)
//  .phrases(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TranscribeVocabularyTimeouts)
//  .vocabularyFileUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyName">vocabularyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#id TranscribeVocabulary#id}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.phrases">phrases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#tags TranscribeVocabulary#tags}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#tags_all TranscribeVocabulary#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyFileUri">vocabularyFileUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}.

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyName"></a>

```java
public java.lang.String getVocabularyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#id TranscribeVocabulary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `phrases`<sup>Optional</sup> <a name="phrases" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.phrases"></a>

```java
public java.util.List<java.lang.String> getPhrases();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#tags TranscribeVocabulary#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#tags_all TranscribeVocabulary#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.timeouts"></a>

```java
public TranscribeVocabularyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#timeouts TranscribeVocabulary#timeouts}

---

##### `vocabularyFileUri`<sup>Optional</sup> <a name="vocabularyFileUri" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyFileUri"></a>

```java
public java.lang.String getVocabularyFileUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}.

---

### TranscribeVocabularyTimeouts <a name="TranscribeVocabularyTimeouts" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_vocabulary.TranscribeVocabularyTimeouts;

TranscribeVocabularyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#create TranscribeVocabulary#create}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#delete TranscribeVocabulary#delete}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#update TranscribeVocabulary#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#create TranscribeVocabulary#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#delete TranscribeVocabulary#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary#update TranscribeVocabulary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeVocabularyTimeoutsOutputReference <a name="TranscribeVocabularyTimeoutsOutputReference" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transcribe_vocabulary.TranscribeVocabularyTimeoutsOutputReference;

new TranscribeVocabularyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



