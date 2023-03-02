# `elastictranscoderPreset` Submodule <a name="`elastictranscoderPreset` Submodule" id="@cdktf/provider-aws.elastictranscoderPreset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastictranscoderPreset <a name="ElastictranscoderPreset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset aws_elastictranscoder_preset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPreset;

ElastictranscoderPreset.Builder.create(Construct scope, java.lang.String id)
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
    .container(java.lang.String)
//  .audio(ElastictranscoderPresetAudio)
//  .audioCodecOptions(ElastictranscoderPresetAudioCodecOptions)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .thumbnails(ElastictranscoderPresetThumbnails)
//  .type(java.lang.String)
//  .video(ElastictranscoderPresetVideo)
//  .videoCodecOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .videoWatermarks(IResolvable)
//  .videoWatermarks(java.util.List<ElastictranscoderPresetVideoWatermarks>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.container">container</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#container ElastictranscoderPreset#container}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.audio">audio</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | audio block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.audioCodecOptions">audioCodecOptions</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | audio_codec_options block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#description ElastictranscoderPreset#description}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#name ElastictranscoderPreset#name}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.thumbnails">thumbnails</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | thumbnails block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#type ElastictranscoderPreset#type}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.video">video</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | video block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.videoCodecOptions">videoCodecOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.videoWatermarks">videoWatermarks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>></code> | video_watermarks block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.container"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#container ElastictranscoderPreset#container}.

---

##### `audio`<sup>Optional</sup> <a name="audio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.audio"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

audio block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio ElastictranscoderPreset#audio}

---

##### `audioCodecOptions`<sup>Optional</sup> <a name="audioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.audioCodecOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

audio_codec_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_codec_options ElastictranscoderPreset#audio_codec_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#description ElastictranscoderPreset#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#name ElastictranscoderPreset#name}.

---

##### `thumbnails`<sup>Optional</sup> <a name="thumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.thumbnails"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

thumbnails block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#thumbnails ElastictranscoderPreset#thumbnails}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#type ElastictranscoderPreset#type}.

---

##### `video`<sup>Optional</sup> <a name="video" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.video"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

video block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video ElastictranscoderPreset#video}

---

##### `videoCodecOptions`<sup>Optional</sup> <a name="videoCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.videoCodecOptions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}.

---

##### `videoWatermarks`<sup>Optional</sup> <a name="videoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.videoWatermarks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>>

video_watermarks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_watermarks ElastictranscoderPreset#video_watermarks}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio">putAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions">putAudioCodecOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails">putThumbnails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo">putVideo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideoWatermarks">putVideoWatermarks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudio">resetAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudioCodecOptions">resetAudioCodecOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetThumbnails">resetThumbnails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideo">resetVideo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoCodecOptions">resetVideoCodecOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoWatermarks">resetVideoWatermarks</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAudio` <a name="putAudio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio"></a>

```java
public void putAudio(ElastictranscoderPresetAudio value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

---

##### `putAudioCodecOptions` <a name="putAudioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions"></a>

```java
public void putAudioCodecOptions(ElastictranscoderPresetAudioCodecOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

---

##### `putThumbnails` <a name="putThumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails"></a>

```java
public void putThumbnails(ElastictranscoderPresetThumbnails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

---

##### `putVideo` <a name="putVideo" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo"></a>

```java
public void putVideo(ElastictranscoderPresetVideo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

---

##### `putVideoWatermarks` <a name="putVideoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideoWatermarks"></a>

```java
public void putVideoWatermarks(IResolvable OR java.util.List<ElastictranscoderPresetVideoWatermarks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideoWatermarks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>>

---

##### `resetAudio` <a name="resetAudio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudio"></a>

```java
public void resetAudio()
```

##### `resetAudioCodecOptions` <a name="resetAudioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudioCodecOptions"></a>

```java
public void resetAudioCodecOptions()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetName"></a>

```java
public void resetName()
```

##### `resetThumbnails` <a name="resetThumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetThumbnails"></a>

```java
public void resetThumbnails()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetType"></a>

```java
public void resetType()
```

##### `resetVideo` <a name="resetVideo" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideo"></a>

```java
public void resetVideo()
```

##### `resetVideoCodecOptions` <a name="resetVideoCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoCodecOptions"></a>

```java
public void resetVideoCodecOptions()
```

##### `resetVideoWatermarks` <a name="resetVideoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoWatermarks"></a>

```java
public void resetVideoWatermarks()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPreset;

ElastictranscoderPreset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPreset;

ElastictranscoderPreset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPreset;

ElastictranscoderPreset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audio">audio</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference">ElastictranscoderPresetAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptions">audioCodecOptions</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference">ElastictranscoderPresetAudioCodecOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnails">thumbnails</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference">ElastictranscoderPresetThumbnailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.video">video</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference">ElastictranscoderPresetVideoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarks">videoWatermarks</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList">ElastictranscoderPresetVideoWatermarksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptionsInput">audioCodecOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioInput">audioInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.containerInput">containerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnailsInput">thumbnailsInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptionsInput">videoCodecOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoInput">videoInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarksInput">videoWatermarksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.container">container</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptions">videoCodecOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `audio`<sup>Required</sup> <a name="audio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audio"></a>

```java
public ElastictranscoderPresetAudioOutputReference getAudio();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference">ElastictranscoderPresetAudioOutputReference</a>

---

##### `audioCodecOptions`<sup>Required</sup> <a name="audioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptions"></a>

```java
public ElastictranscoderPresetAudioCodecOptionsOutputReference getAudioCodecOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference">ElastictranscoderPresetAudioCodecOptionsOutputReference</a>

---

##### `thumbnails`<sup>Required</sup> <a name="thumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnails"></a>

```java
public ElastictranscoderPresetThumbnailsOutputReference getThumbnails();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference">ElastictranscoderPresetThumbnailsOutputReference</a>

---

##### `video`<sup>Required</sup> <a name="video" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.video"></a>

```java
public ElastictranscoderPresetVideoOutputReference getVideo();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference">ElastictranscoderPresetVideoOutputReference</a>

---

##### `videoWatermarks`<sup>Required</sup> <a name="videoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarks"></a>

```java
public ElastictranscoderPresetVideoWatermarksList getVideoWatermarks();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList">ElastictranscoderPresetVideoWatermarksList</a>

---

##### `audioCodecOptionsInput`<sup>Optional</sup> <a name="audioCodecOptionsInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptionsInput"></a>

```java
public ElastictranscoderPresetAudioCodecOptions getAudioCodecOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

---

##### `audioInput`<sup>Optional</sup> <a name="audioInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioInput"></a>

```java
public ElastictranscoderPresetAudio getAudioInput();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.containerInput"></a>

```java
public java.lang.String getContainerInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `thumbnailsInput`<sup>Optional</sup> <a name="thumbnailsInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnailsInput"></a>

```java
public ElastictranscoderPresetThumbnails getThumbnailsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `videoCodecOptionsInput`<sup>Optional</sup> <a name="videoCodecOptionsInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVideoCodecOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `videoInput`<sup>Optional</sup> <a name="videoInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoInput"></a>

```java
public ElastictranscoderPresetVideo getVideoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

---

##### `videoWatermarksInput`<sup>Optional</sup> <a name="videoWatermarksInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarksInput"></a>

```java
public java.lang.Object getVideoWatermarksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `videoCodecOptions`<sup>Required</sup> <a name="videoCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVideoCodecOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElastictranscoderPresetAudio <a name="ElastictranscoderPresetAudio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPresetAudio;

ElastictranscoderPresetAudio.builder()
//  .audioPackingMode(java.lang.String)
//  .bitRate(java.lang.String)
//  .channels(java.lang.String)
//  .codec(java.lang.String)
//  .sampleRate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.audioPackingMode">audioPackingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.bitRate">bitRate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.channels">channels</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#channels ElastictranscoderPreset#channels}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.codec">codec</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.sampleRate">sampleRate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sample_rate ElastictranscoderPreset#sample_rate}. |

---

##### `audioPackingMode`<sup>Optional</sup> <a name="audioPackingMode" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.audioPackingMode"></a>

```java
public java.lang.String getAudioPackingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}.

---

##### `bitRate`<sup>Optional</sup> <a name="bitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.bitRate"></a>

```java
public java.lang.String getBitRate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}.

---

##### `channels`<sup>Optional</sup> <a name="channels" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.channels"></a>

```java
public java.lang.String getChannels();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#channels ElastictranscoderPreset#channels}.

---

##### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.codec"></a>

```java
public java.lang.String getCodec();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}.

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.sampleRate"></a>

```java
public java.lang.String getSampleRate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sample_rate ElastictranscoderPreset#sample_rate}.

---

### ElastictranscoderPresetAudioCodecOptions <a name="ElastictranscoderPresetAudioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPresetAudioCodecOptions;

ElastictranscoderPresetAudioCodecOptions.builder()
//  .bitDepth(java.lang.String)
//  .bitOrder(java.lang.String)
//  .profile(java.lang.String)
//  .signed(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitDepth">bitDepth</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_depth ElastictranscoderPreset#bit_depth}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitOrder">bitOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_order ElastictranscoderPreset#bit_order}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.profile">profile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#profile ElastictranscoderPreset#profile}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.signed">signed</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#signed ElastictranscoderPreset#signed}. |

---

##### `bitDepth`<sup>Optional</sup> <a name="bitDepth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitDepth"></a>

```java
public java.lang.String getBitDepth();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_depth ElastictranscoderPreset#bit_depth}.

---

##### `bitOrder`<sup>Optional</sup> <a name="bitOrder" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitOrder"></a>

```java
public java.lang.String getBitOrder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_order ElastictranscoderPreset#bit_order}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#profile ElastictranscoderPreset#profile}.

---

##### `signed`<sup>Optional</sup> <a name="signed" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.signed"></a>

```java
public java.lang.String getSigned();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#signed ElastictranscoderPreset#signed}.

---

### ElastictranscoderPresetConfig <a name="ElastictranscoderPresetConfig" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPresetConfig;

ElastictranscoderPresetConfig.builder()
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
    .container(java.lang.String)
//  .audio(ElastictranscoderPresetAudio)
//  .audioCodecOptions(ElastictranscoderPresetAudioCodecOptions)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .thumbnails(ElastictranscoderPresetThumbnails)
//  .type(java.lang.String)
//  .video(ElastictranscoderPresetVideo)
//  .videoCodecOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .videoWatermarks(IResolvable)
//  .videoWatermarks(java.util.List<ElastictranscoderPresetVideoWatermarks>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.container">container</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#container ElastictranscoderPreset#container}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audio">audio</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | audio block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audioCodecOptions">audioCodecOptions</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | audio_codec_options block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#description ElastictranscoderPreset#description}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#name ElastictranscoderPreset#name}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.thumbnails">thumbnails</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | thumbnails block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#type ElastictranscoderPreset#type}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.video">video</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | video block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoCodecOptions">videoCodecOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoWatermarks">videoWatermarks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>></code> | video_watermarks block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#container ElastictranscoderPreset#container}.

---

##### `audio`<sup>Optional</sup> <a name="audio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audio"></a>

```java
public ElastictranscoderPresetAudio getAudio();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

audio block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio ElastictranscoderPreset#audio}

---

##### `audioCodecOptions`<sup>Optional</sup> <a name="audioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audioCodecOptions"></a>

```java
public ElastictranscoderPresetAudioCodecOptions getAudioCodecOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

audio_codec_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_codec_options ElastictranscoderPreset#audio_codec_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#description ElastictranscoderPreset#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#name ElastictranscoderPreset#name}.

---

##### `thumbnails`<sup>Optional</sup> <a name="thumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.thumbnails"></a>

```java
public ElastictranscoderPresetThumbnails getThumbnails();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

thumbnails block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#thumbnails ElastictranscoderPreset#thumbnails}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#type ElastictranscoderPreset#type}.

---

##### `video`<sup>Optional</sup> <a name="video" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.video"></a>

```java
public ElastictranscoderPresetVideo getVideo();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

video block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video ElastictranscoderPreset#video}

---

##### `videoCodecOptions`<sup>Optional</sup> <a name="videoCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoCodecOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVideoCodecOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}.

---

##### `videoWatermarks`<sup>Optional</sup> <a name="videoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoWatermarks"></a>

```java
public java.lang.Object getVideoWatermarks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>>

video_watermarks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_watermarks ElastictranscoderPreset#video_watermarks}

---

### ElastictranscoderPresetThumbnails <a name="ElastictranscoderPresetThumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPresetThumbnails;

ElastictranscoderPresetThumbnails.builder()
//  .aspectRatio(java.lang.String)
//  .format(java.lang.String)
//  .interval(java.lang.String)
//  .maxHeight(java.lang.String)
//  .maxWidth(java.lang.String)
//  .paddingPolicy(java.lang.String)
//  .resolution(java.lang.String)
//  .sizingPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.aspectRatio">aspectRatio</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#format ElastictranscoderPreset#format}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.interval">interval</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#interval ElastictranscoderPreset#interval}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxHeight">maxHeight</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxWidth">maxWidth</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.paddingPolicy">paddingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.resolution">resolution</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.sizingPolicy">sizingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}. |

---

##### `aspectRatio`<sup>Optional</sup> <a name="aspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.aspectRatio"></a>

```java
public java.lang.String getAspectRatio();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#format ElastictranscoderPreset#format}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#interval ElastictranscoderPreset#interval}.

---

##### `maxHeight`<sup>Optional</sup> <a name="maxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxHeight"></a>

```java
public java.lang.String getMaxHeight();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

##### `maxWidth`<sup>Optional</sup> <a name="maxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxWidth"></a>

```java
public java.lang.String getMaxWidth();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

##### `paddingPolicy`<sup>Optional</sup> <a name="paddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.paddingPolicy"></a>

```java
public java.lang.String getPaddingPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}.

---

##### `resolution`<sup>Optional</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.resolution"></a>

```java
public java.lang.String getResolution();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}.

---

##### `sizingPolicy`<sup>Optional</sup> <a name="sizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.sizingPolicy"></a>

```java
public java.lang.String getSizingPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

### ElastictranscoderPresetVideo <a name="ElastictranscoderPresetVideo" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPresetVideo;

ElastictranscoderPresetVideo.builder()
//  .aspectRatio(java.lang.String)
//  .bitRate(java.lang.String)
//  .codec(java.lang.String)
//  .displayAspectRatio(java.lang.String)
//  .fixedGop(java.lang.String)
//  .frameRate(java.lang.String)
//  .keyframesMaxDist(java.lang.String)
//  .maxFrameRate(java.lang.String)
//  .maxHeight(java.lang.String)
//  .maxWidth(java.lang.String)
//  .paddingPolicy(java.lang.String)
//  .resolution(java.lang.String)
//  .sizingPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.aspectRatio">aspectRatio</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.bitRate">bitRate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.codec">codec</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.displayAspectRatio">displayAspectRatio</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.fixedGop">fixedGop</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#fixed_gop ElastictranscoderPreset#fixed_gop}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.frameRate">frameRate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#frame_rate ElastictranscoderPreset#frame_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.keyframesMaxDist">keyframesMaxDist</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxFrameRate">maxFrameRate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_frame_rate ElastictranscoderPreset#max_frame_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxHeight">maxHeight</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxWidth">maxWidth</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.paddingPolicy">paddingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.resolution">resolution</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.sizingPolicy">sizingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}. |

---

##### `aspectRatio`<sup>Optional</sup> <a name="aspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.aspectRatio"></a>

```java
public java.lang.String getAspectRatio();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}.

---

##### `bitRate`<sup>Optional</sup> <a name="bitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.bitRate"></a>

```java
public java.lang.String getBitRate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}.

---

##### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.codec"></a>

```java
public java.lang.String getCodec();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}.

---

##### `displayAspectRatio`<sup>Optional</sup> <a name="displayAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.displayAspectRatio"></a>

```java
public java.lang.String getDisplayAspectRatio();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}.

---

##### `fixedGop`<sup>Optional</sup> <a name="fixedGop" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.fixedGop"></a>

```java
public java.lang.String getFixedGop();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#fixed_gop ElastictranscoderPreset#fixed_gop}.

---

##### `frameRate`<sup>Optional</sup> <a name="frameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.frameRate"></a>

```java
public java.lang.String getFrameRate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#frame_rate ElastictranscoderPreset#frame_rate}.

---

##### `keyframesMaxDist`<sup>Optional</sup> <a name="keyframesMaxDist" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.keyframesMaxDist"></a>

```java
public java.lang.String getKeyframesMaxDist();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}.

---

##### `maxFrameRate`<sup>Optional</sup> <a name="maxFrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxFrameRate"></a>

```java
public java.lang.String getMaxFrameRate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_frame_rate ElastictranscoderPreset#max_frame_rate}.

---

##### `maxHeight`<sup>Optional</sup> <a name="maxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxHeight"></a>

```java
public java.lang.String getMaxHeight();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

##### `maxWidth`<sup>Optional</sup> <a name="maxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxWidth"></a>

```java
public java.lang.String getMaxWidth();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

##### `paddingPolicy`<sup>Optional</sup> <a name="paddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.paddingPolicy"></a>

```java
public java.lang.String getPaddingPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}.

---

##### `resolution`<sup>Optional</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.resolution"></a>

```java
public java.lang.String getResolution();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}.

---

##### `sizingPolicy`<sup>Optional</sup> <a name="sizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.sizingPolicy"></a>

```java
public java.lang.String getSizingPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

### ElastictranscoderPresetVideoWatermarks <a name="ElastictranscoderPresetVideoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPresetVideoWatermarks;

ElastictranscoderPresetVideoWatermarks.builder()
//  .horizontalAlign(java.lang.String)
//  .horizontalOffset(java.lang.String)
//  .id(java.lang.String)
//  .maxHeight(java.lang.String)
//  .maxWidth(java.lang.String)
//  .opacity(java.lang.String)
//  .sizingPolicy(java.lang.String)
//  .target(java.lang.String)
//  .verticalAlign(java.lang.String)
//  .verticalOffset(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalAlign">horizontalAlign</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_align ElastictranscoderPreset#horizontal_align}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalOffset">horizontalOffset</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_offset ElastictranscoderPreset#horizontal_offset}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxHeight">maxHeight</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxWidth">maxWidth</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.opacity">opacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#opacity ElastictranscoderPreset#opacity}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.sizingPolicy">sizingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#target ElastictranscoderPreset#target}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalAlign">verticalAlign</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_align ElastictranscoderPreset#vertical_align}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalOffset">verticalOffset</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_offset ElastictranscoderPreset#vertical_offset}. |

---

##### `horizontalAlign`<sup>Optional</sup> <a name="horizontalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalAlign"></a>

```java
public java.lang.String getHorizontalAlign();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_align ElastictranscoderPreset#horizontal_align}.

---

##### `horizontalOffset`<sup>Optional</sup> <a name="horizontalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalOffset"></a>

```java
public java.lang.String getHorizontalOffset();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_offset ElastictranscoderPreset#horizontal_offset}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxHeight`<sup>Optional</sup> <a name="maxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxHeight"></a>

```java
public java.lang.String getMaxHeight();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

##### `maxWidth`<sup>Optional</sup> <a name="maxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxWidth"></a>

```java
public java.lang.String getMaxWidth();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

##### `opacity`<sup>Optional</sup> <a name="opacity" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.opacity"></a>

```java
public java.lang.String getOpacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#opacity ElastictranscoderPreset#opacity}.

---

##### `sizingPolicy`<sup>Optional</sup> <a name="sizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.sizingPolicy"></a>

```java
public java.lang.String getSizingPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#target ElastictranscoderPreset#target}.

---

##### `verticalAlign`<sup>Optional</sup> <a name="verticalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalAlign"></a>

```java
public java.lang.String getVerticalAlign();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_align ElastictranscoderPreset#vertical_align}.

---

##### `verticalOffset`<sup>Optional</sup> <a name="verticalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalOffset"></a>

```java
public java.lang.String getVerticalOffset();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_offset ElastictranscoderPreset#vertical_offset}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastictranscoderPresetAudioCodecOptionsOutputReference <a name="ElastictranscoderPresetAudioCodecOptionsOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPresetAudioCodecOptionsOutputReference;

new ElastictranscoderPresetAudioCodecOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitDepth">resetBitDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitOrder">resetBitOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetSigned">resetSigned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBitDepth` <a name="resetBitDepth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitDepth"></a>

```java
public void resetBitDepth()
```

##### `resetBitOrder` <a name="resetBitOrder" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitOrder"></a>

```java
public void resetBitOrder()
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetProfile"></a>

```java
public void resetProfile()
```

##### `resetSigned` <a name="resetSigned" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetSigned"></a>

```java
public void resetSigned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepthInput">bitDepthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrderInput">bitOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signedInput">signedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepth">bitDepth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrder">bitOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signed">signed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bitDepthInput`<sup>Optional</sup> <a name="bitDepthInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepthInput"></a>

```java
public java.lang.String getBitDepthInput();
```

- *Type:* java.lang.String

---

##### `bitOrderInput`<sup>Optional</sup> <a name="bitOrderInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrderInput"></a>

```java
public java.lang.String getBitOrderInput();
```

- *Type:* java.lang.String

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `signedInput`<sup>Optional</sup> <a name="signedInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signedInput"></a>

```java
public java.lang.String getSignedInput();
```

- *Type:* java.lang.String

---

##### `bitDepth`<sup>Required</sup> <a name="bitDepth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepth"></a>

```java
public java.lang.String getBitDepth();
```

- *Type:* java.lang.String

---

##### `bitOrder`<sup>Required</sup> <a name="bitOrder" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrder"></a>

```java
public java.lang.String getBitOrder();
```

- *Type:* java.lang.String

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `signed`<sup>Required</sup> <a name="signed" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signed"></a>

```java
public java.lang.String getSigned();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.internalValue"></a>

```java
public ElastictranscoderPresetAudioCodecOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

---


### ElastictranscoderPresetAudioOutputReference <a name="ElastictranscoderPresetAudioOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPresetAudioOutputReference;

new ElastictranscoderPresetAudioOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetAudioPackingMode">resetAudioPackingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetBitRate">resetBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetChannels">resetChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetCodec">resetCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudioPackingMode` <a name="resetAudioPackingMode" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetAudioPackingMode"></a>

```java
public void resetAudioPackingMode()
```

##### `resetBitRate` <a name="resetBitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetBitRate"></a>

```java
public void resetBitRate()
```

##### `resetChannels` <a name="resetChannels" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetChannels"></a>

```java
public void resetChannels()
```

##### `resetCodec` <a name="resetCodec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetCodec"></a>

```java
public void resetCodec()
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetSampleRate"></a>

```java
public void resetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingModeInput">audioPackingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRateInput">bitRateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channelsInput">channelsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codecInput">codecInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingMode">audioPackingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRate">bitRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channels">channels</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codec">codec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRate">sampleRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audioPackingModeInput`<sup>Optional</sup> <a name="audioPackingModeInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingModeInput"></a>

```java
public java.lang.String getAudioPackingModeInput();
```

- *Type:* java.lang.String

---

##### `bitRateInput`<sup>Optional</sup> <a name="bitRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRateInput"></a>

```java
public java.lang.String getBitRateInput();
```

- *Type:* java.lang.String

---

##### `channelsInput`<sup>Optional</sup> <a name="channelsInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channelsInput"></a>

```java
public java.lang.String getChannelsInput();
```

- *Type:* java.lang.String

---

##### `codecInput`<sup>Optional</sup> <a name="codecInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codecInput"></a>

```java
public java.lang.String getCodecInput();
```

- *Type:* java.lang.String

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRateInput"></a>

```java
public java.lang.String getSampleRateInput();
```

- *Type:* java.lang.String

---

##### `audioPackingMode`<sup>Required</sup> <a name="audioPackingMode" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingMode"></a>

```java
public java.lang.String getAudioPackingMode();
```

- *Type:* java.lang.String

---

##### `bitRate`<sup>Required</sup> <a name="bitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRate"></a>

```java
public java.lang.String getBitRate();
```

- *Type:* java.lang.String

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channels"></a>

```java
public java.lang.String getChannels();
```

- *Type:* java.lang.String

---

##### `codec`<sup>Required</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codec"></a>

```java
public java.lang.String getCodec();
```

- *Type:* java.lang.String

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRate"></a>

```java
public java.lang.String getSampleRate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.internalValue"></a>

```java
public ElastictranscoderPresetAudio getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

---


### ElastictranscoderPresetThumbnailsOutputReference <a name="ElastictranscoderPresetThumbnailsOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPresetThumbnailsOutputReference;

new ElastictranscoderPresetThumbnailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetAspectRatio">resetAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxHeight">resetMaxHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxWidth">resetMaxWidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetPaddingPolicy">resetPaddingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetResolution">resetResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetSizingPolicy">resetSizingPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAspectRatio` <a name="resetAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetAspectRatio"></a>

```java
public void resetAspectRatio()
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetMaxHeight` <a name="resetMaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxHeight"></a>

```java
public void resetMaxHeight()
```

##### `resetMaxWidth` <a name="resetMaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxWidth"></a>

```java
public void resetMaxWidth()
```

##### `resetPaddingPolicy` <a name="resetPaddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetPaddingPolicy"></a>

```java
public void resetPaddingPolicy()
```

##### `resetResolution` <a name="resetResolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetResolution"></a>

```java
public void resetResolution()
```

##### `resetSizingPolicy` <a name="resetSizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetSizingPolicy"></a>

```java
public void resetSizingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatioInput">aspectRatioInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeightInput">maxHeightInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidthInput">maxWidthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicyInput">paddingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolutionInput">resolutionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicyInput">sizingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatio">aspectRatio</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.interval">interval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeight">maxHeight</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidth">maxWidth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicy">paddingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolution">resolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicy">sizingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aspectRatioInput`<sup>Optional</sup> <a name="aspectRatioInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatioInput"></a>

```java
public java.lang.String getAspectRatioInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.intervalInput"></a>

```java
public java.lang.String getIntervalInput();
```

- *Type:* java.lang.String

---

##### `maxHeightInput`<sup>Optional</sup> <a name="maxHeightInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeightInput"></a>

```java
public java.lang.String getMaxHeightInput();
```

- *Type:* java.lang.String

---

##### `maxWidthInput`<sup>Optional</sup> <a name="maxWidthInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidthInput"></a>

```java
public java.lang.String getMaxWidthInput();
```

- *Type:* java.lang.String

---

##### `paddingPolicyInput`<sup>Optional</sup> <a name="paddingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicyInput"></a>

```java
public java.lang.String getPaddingPolicyInput();
```

- *Type:* java.lang.String

---

##### `resolutionInput`<sup>Optional</sup> <a name="resolutionInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolutionInput"></a>

```java
public java.lang.String getResolutionInput();
```

- *Type:* java.lang.String

---

##### `sizingPolicyInput`<sup>Optional</sup> <a name="sizingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicyInput"></a>

```java
public java.lang.String getSizingPolicyInput();
```

- *Type:* java.lang.String

---

##### `aspectRatio`<sup>Required</sup> <a name="aspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatio"></a>

```java
public java.lang.String getAspectRatio();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

---

##### `maxHeight`<sup>Required</sup> <a name="maxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeight"></a>

```java
public java.lang.String getMaxHeight();
```

- *Type:* java.lang.String

---

##### `maxWidth`<sup>Required</sup> <a name="maxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidth"></a>

```java
public java.lang.String getMaxWidth();
```

- *Type:* java.lang.String

---

##### `paddingPolicy`<sup>Required</sup> <a name="paddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicy"></a>

```java
public java.lang.String getPaddingPolicy();
```

- *Type:* java.lang.String

---

##### `resolution`<sup>Required</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolution"></a>

```java
public java.lang.String getResolution();
```

- *Type:* java.lang.String

---

##### `sizingPolicy`<sup>Required</sup> <a name="sizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicy"></a>

```java
public java.lang.String getSizingPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.internalValue"></a>

```java
public ElastictranscoderPresetThumbnails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

---


### ElastictranscoderPresetVideoOutputReference <a name="ElastictranscoderPresetVideoOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPresetVideoOutputReference;

new ElastictranscoderPresetVideoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetAspectRatio">resetAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetBitRate">resetBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetCodec">resetCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetDisplayAspectRatio">resetDisplayAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFixedGop">resetFixedGop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFrameRate">resetFrameRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetKeyframesMaxDist">resetKeyframesMaxDist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxFrameRate">resetMaxFrameRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxHeight">resetMaxHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxWidth">resetMaxWidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetPaddingPolicy">resetPaddingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetResolution">resetResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetSizingPolicy">resetSizingPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAspectRatio` <a name="resetAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetAspectRatio"></a>

```java
public void resetAspectRatio()
```

##### `resetBitRate` <a name="resetBitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetBitRate"></a>

```java
public void resetBitRate()
```

##### `resetCodec` <a name="resetCodec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetCodec"></a>

```java
public void resetCodec()
```

##### `resetDisplayAspectRatio` <a name="resetDisplayAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetDisplayAspectRatio"></a>

```java
public void resetDisplayAspectRatio()
```

##### `resetFixedGop` <a name="resetFixedGop" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFixedGop"></a>

```java
public void resetFixedGop()
```

##### `resetFrameRate` <a name="resetFrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFrameRate"></a>

```java
public void resetFrameRate()
```

##### `resetKeyframesMaxDist` <a name="resetKeyframesMaxDist" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetKeyframesMaxDist"></a>

```java
public void resetKeyframesMaxDist()
```

##### `resetMaxFrameRate` <a name="resetMaxFrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxFrameRate"></a>

```java
public void resetMaxFrameRate()
```

##### `resetMaxHeight` <a name="resetMaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxHeight"></a>

```java
public void resetMaxHeight()
```

##### `resetMaxWidth` <a name="resetMaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxWidth"></a>

```java
public void resetMaxWidth()
```

##### `resetPaddingPolicy` <a name="resetPaddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetPaddingPolicy"></a>

```java
public void resetPaddingPolicy()
```

##### `resetResolution` <a name="resetResolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetResolution"></a>

```java
public void resetResolution()
```

##### `resetSizingPolicy` <a name="resetSizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetSizingPolicy"></a>

```java
public void resetSizingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatioInput">aspectRatioInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRateInput">bitRateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codecInput">codecInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatioInput">displayAspectRatioInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGopInput">fixedGopInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRateInput">frameRateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDistInput">keyframesMaxDistInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRateInput">maxFrameRateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeightInput">maxHeightInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidthInput">maxWidthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicyInput">paddingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolutionInput">resolutionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicyInput">sizingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatio">aspectRatio</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRate">bitRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codec">codec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatio">displayAspectRatio</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGop">fixedGop</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRate">frameRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDist">keyframesMaxDist</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRate">maxFrameRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeight">maxHeight</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidth">maxWidth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicy">paddingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolution">resolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicy">sizingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aspectRatioInput`<sup>Optional</sup> <a name="aspectRatioInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatioInput"></a>

```java
public java.lang.String getAspectRatioInput();
```

- *Type:* java.lang.String

---

##### `bitRateInput`<sup>Optional</sup> <a name="bitRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRateInput"></a>

```java
public java.lang.String getBitRateInput();
```

- *Type:* java.lang.String

---

##### `codecInput`<sup>Optional</sup> <a name="codecInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codecInput"></a>

```java
public java.lang.String getCodecInput();
```

- *Type:* java.lang.String

---

##### `displayAspectRatioInput`<sup>Optional</sup> <a name="displayAspectRatioInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatioInput"></a>

```java
public java.lang.String getDisplayAspectRatioInput();
```

- *Type:* java.lang.String

---

##### `fixedGopInput`<sup>Optional</sup> <a name="fixedGopInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGopInput"></a>

```java
public java.lang.String getFixedGopInput();
```

- *Type:* java.lang.String

---

##### `frameRateInput`<sup>Optional</sup> <a name="frameRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRateInput"></a>

```java
public java.lang.String getFrameRateInput();
```

- *Type:* java.lang.String

---

##### `keyframesMaxDistInput`<sup>Optional</sup> <a name="keyframesMaxDistInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDistInput"></a>

```java
public java.lang.String getKeyframesMaxDistInput();
```

- *Type:* java.lang.String

---

##### `maxFrameRateInput`<sup>Optional</sup> <a name="maxFrameRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRateInput"></a>

```java
public java.lang.String getMaxFrameRateInput();
```

- *Type:* java.lang.String

---

##### `maxHeightInput`<sup>Optional</sup> <a name="maxHeightInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeightInput"></a>

```java
public java.lang.String getMaxHeightInput();
```

- *Type:* java.lang.String

---

##### `maxWidthInput`<sup>Optional</sup> <a name="maxWidthInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidthInput"></a>

```java
public java.lang.String getMaxWidthInput();
```

- *Type:* java.lang.String

---

##### `paddingPolicyInput`<sup>Optional</sup> <a name="paddingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicyInput"></a>

```java
public java.lang.String getPaddingPolicyInput();
```

- *Type:* java.lang.String

---

##### `resolutionInput`<sup>Optional</sup> <a name="resolutionInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolutionInput"></a>

```java
public java.lang.String getResolutionInput();
```

- *Type:* java.lang.String

---

##### `sizingPolicyInput`<sup>Optional</sup> <a name="sizingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicyInput"></a>

```java
public java.lang.String getSizingPolicyInput();
```

- *Type:* java.lang.String

---

##### `aspectRatio`<sup>Required</sup> <a name="aspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatio"></a>

```java
public java.lang.String getAspectRatio();
```

- *Type:* java.lang.String

---

##### `bitRate`<sup>Required</sup> <a name="bitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRate"></a>

```java
public java.lang.String getBitRate();
```

- *Type:* java.lang.String

---

##### `codec`<sup>Required</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codec"></a>

```java
public java.lang.String getCodec();
```

- *Type:* java.lang.String

---

##### `displayAspectRatio`<sup>Required</sup> <a name="displayAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatio"></a>

```java
public java.lang.String getDisplayAspectRatio();
```

- *Type:* java.lang.String

---

##### `fixedGop`<sup>Required</sup> <a name="fixedGop" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGop"></a>

```java
public java.lang.String getFixedGop();
```

- *Type:* java.lang.String

---

##### `frameRate`<sup>Required</sup> <a name="frameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRate"></a>

```java
public java.lang.String getFrameRate();
```

- *Type:* java.lang.String

---

##### `keyframesMaxDist`<sup>Required</sup> <a name="keyframesMaxDist" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDist"></a>

```java
public java.lang.String getKeyframesMaxDist();
```

- *Type:* java.lang.String

---

##### `maxFrameRate`<sup>Required</sup> <a name="maxFrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRate"></a>

```java
public java.lang.String getMaxFrameRate();
```

- *Type:* java.lang.String

---

##### `maxHeight`<sup>Required</sup> <a name="maxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeight"></a>

```java
public java.lang.String getMaxHeight();
```

- *Type:* java.lang.String

---

##### `maxWidth`<sup>Required</sup> <a name="maxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidth"></a>

```java
public java.lang.String getMaxWidth();
```

- *Type:* java.lang.String

---

##### `paddingPolicy`<sup>Required</sup> <a name="paddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicy"></a>

```java
public java.lang.String getPaddingPolicy();
```

- *Type:* java.lang.String

---

##### `resolution`<sup>Required</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolution"></a>

```java
public java.lang.String getResolution();
```

- *Type:* java.lang.String

---

##### `sizingPolicy`<sup>Required</sup> <a name="sizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicy"></a>

```java
public java.lang.String getSizingPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.internalValue"></a>

```java
public ElastictranscoderPresetVideo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

---


### ElastictranscoderPresetVideoWatermarksList <a name="ElastictranscoderPresetVideoWatermarksList" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPresetVideoWatermarksList;

new ElastictranscoderPresetVideoWatermarksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.get"></a>

```java
public ElastictranscoderPresetVideoWatermarksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>>

---


### ElastictranscoderPresetVideoWatermarksOutputReference <a name="ElastictranscoderPresetVideoWatermarksOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastictranscoder_preset.ElastictranscoderPresetVideoWatermarksOutputReference;

new ElastictranscoderPresetVideoWatermarksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalAlign">resetHorizontalAlign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalOffset">resetHorizontalOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxHeight">resetMaxHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxWidth">resetMaxWidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetOpacity">resetOpacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetSizingPolicy">resetSizingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalAlign">resetVerticalAlign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalOffset">resetVerticalOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHorizontalAlign` <a name="resetHorizontalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalAlign"></a>

```java
public void resetHorizontalAlign()
```

##### `resetHorizontalOffset` <a name="resetHorizontalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalOffset"></a>

```java
public void resetHorizontalOffset()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetMaxHeight` <a name="resetMaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxHeight"></a>

```java
public void resetMaxHeight()
```

##### `resetMaxWidth` <a name="resetMaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxWidth"></a>

```java
public void resetMaxWidth()
```

##### `resetOpacity` <a name="resetOpacity" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetOpacity"></a>

```java
public void resetOpacity()
```

##### `resetSizingPolicy` <a name="resetSizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetSizingPolicy"></a>

```java
public void resetSizingPolicy()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetVerticalAlign` <a name="resetVerticalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalAlign"></a>

```java
public void resetVerticalAlign()
```

##### `resetVerticalOffset` <a name="resetVerticalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalOffset"></a>

```java
public void resetVerticalOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlignInput">horizontalAlignInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffsetInput">horizontalOffsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeightInput">maxHeightInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidthInput">maxWidthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacityInput">opacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicyInput">sizingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlignInput">verticalAlignInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffsetInput">verticalOffsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlign">horizontalAlign</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffset">horizontalOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeight">maxHeight</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidth">maxWidth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacity">opacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicy">sizingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlign">verticalAlign</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffset">verticalOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `horizontalAlignInput`<sup>Optional</sup> <a name="horizontalAlignInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlignInput"></a>

```java
public java.lang.String getHorizontalAlignInput();
```

- *Type:* java.lang.String

---

##### `horizontalOffsetInput`<sup>Optional</sup> <a name="horizontalOffsetInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffsetInput"></a>

```java
public java.lang.String getHorizontalOffsetInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxHeightInput`<sup>Optional</sup> <a name="maxHeightInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeightInput"></a>

```java
public java.lang.String getMaxHeightInput();
```

- *Type:* java.lang.String

---

##### `maxWidthInput`<sup>Optional</sup> <a name="maxWidthInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidthInput"></a>

```java
public java.lang.String getMaxWidthInput();
```

- *Type:* java.lang.String

---

##### `opacityInput`<sup>Optional</sup> <a name="opacityInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacityInput"></a>

```java
public java.lang.String getOpacityInput();
```

- *Type:* java.lang.String

---

##### `sizingPolicyInput`<sup>Optional</sup> <a name="sizingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicyInput"></a>

```java
public java.lang.String getSizingPolicyInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `verticalAlignInput`<sup>Optional</sup> <a name="verticalAlignInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlignInput"></a>

```java
public java.lang.String getVerticalAlignInput();
```

- *Type:* java.lang.String

---

##### `verticalOffsetInput`<sup>Optional</sup> <a name="verticalOffsetInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffsetInput"></a>

```java
public java.lang.String getVerticalOffsetInput();
```

- *Type:* java.lang.String

---

##### `horizontalAlign`<sup>Required</sup> <a name="horizontalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlign"></a>

```java
public java.lang.String getHorizontalAlign();
```

- *Type:* java.lang.String

---

##### `horizontalOffset`<sup>Required</sup> <a name="horizontalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffset"></a>

```java
public java.lang.String getHorizontalOffset();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxHeight`<sup>Required</sup> <a name="maxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeight"></a>

```java
public java.lang.String getMaxHeight();
```

- *Type:* java.lang.String

---

##### `maxWidth`<sup>Required</sup> <a name="maxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidth"></a>

```java
public java.lang.String getMaxWidth();
```

- *Type:* java.lang.String

---

##### `opacity`<sup>Required</sup> <a name="opacity" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacity"></a>

```java
public java.lang.String getOpacity();
```

- *Type:* java.lang.String

---

##### `sizingPolicy`<sup>Required</sup> <a name="sizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicy"></a>

```java
public java.lang.String getSizingPolicy();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `verticalAlign`<sup>Required</sup> <a name="verticalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlign"></a>

```java
public java.lang.String getVerticalAlign();
```

- *Type:* java.lang.String

---

##### `verticalOffset`<sup>Required</sup> <a name="verticalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffset"></a>

```java
public java.lang.String getVerticalOffset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a> OR com.hashicorp.cdktf.IResolvable

---



