# `elastictranscoderPreset` Submodule <a name="`elastictranscoderPreset` Submodule" id="@cdktf/provider-aws.elastictranscoderPreset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastictranscoderPreset <a name="ElastictranscoderPreset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset aws_elastictranscoder_preset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPreset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container: str,
  audio: ElastictranscoderPresetAudio = None,
  audio_codec_options: ElastictranscoderPresetAudioCodecOptions = None,
  description: str = None,
  id: str = None,
  name: str = None,
  thumbnails: ElastictranscoderPresetThumbnails = None,
  type: str = None,
  video: ElastictranscoderPresetVideo = None,
  video_codec_options: typing.Mapping[str] = None,
  video_watermarks: typing.Union[IResolvable, typing.List[ElastictranscoderPresetVideoWatermarks]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.container">container</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#container ElastictranscoderPreset#container}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.audio">audio</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | audio block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.audioCodecOptions">audio_codec_options</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | audio_codec_options block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#description ElastictranscoderPreset#description}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#name ElastictranscoderPreset#name}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.thumbnails">thumbnails</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | thumbnails block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#type ElastictranscoderPreset#type}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.video">video</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | video block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.videoCodecOptions">video_codec_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.videoWatermarks">video_watermarks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>]]</code> | video_watermarks block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.container"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#container ElastictranscoderPreset#container}.

---

##### `audio`<sup>Optional</sup> <a name="audio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.audio"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

audio block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio ElastictranscoderPreset#audio}

---

##### `audio_codec_options`<sup>Optional</sup> <a name="audio_codec_options" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.audioCodecOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

audio_codec_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_codec_options ElastictranscoderPreset#audio_codec_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#description ElastictranscoderPreset#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#name ElastictranscoderPreset#name}.

---

##### `thumbnails`<sup>Optional</sup> <a name="thumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.thumbnails"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

thumbnails block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#thumbnails ElastictranscoderPreset#thumbnails}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#type ElastictranscoderPreset#type}.

---

##### `video`<sup>Optional</sup> <a name="video" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.video"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

video block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video ElastictranscoderPreset#video}

---

##### `video_codec_options`<sup>Optional</sup> <a name="video_codec_options" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.videoCodecOptions"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}.

---

##### `video_watermarks`<sup>Optional</sup> <a name="video_watermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.videoWatermarks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>]]

video_watermarks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_watermarks ElastictranscoderPreset#video_watermarks}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio">put_audio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions">put_audio_codec_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails">put_thumbnails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo">put_video</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideoWatermarks">put_video_watermarks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudio">reset_audio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudioCodecOptions">reset_audio_codec_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetThumbnails">reset_thumbnails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideo">reset_video</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoCodecOptions">reset_video_codec_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoWatermarks">reset_video_watermarks</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_audio` <a name="put_audio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio"></a>

```python
def put_audio(
  audio_packing_mode: str = None,
  bit_rate: str = None,
  channels: str = None,
  codec: str = None,
  sample_rate: str = None
) -> None
```

###### `audio_packing_mode`<sup>Optional</sup> <a name="audio_packing_mode" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio.parameter.audioPackingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}.

---

###### `bit_rate`<sup>Optional</sup> <a name="bit_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio.parameter.bitRate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}.

---

###### `channels`<sup>Optional</sup> <a name="channels" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio.parameter.channels"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#channels ElastictranscoderPreset#channels}.

---

###### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio.parameter.codec"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}.

---

###### `sample_rate`<sup>Optional</sup> <a name="sample_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio.parameter.sampleRate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sample_rate ElastictranscoderPreset#sample_rate}.

---

##### `put_audio_codec_options` <a name="put_audio_codec_options" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions"></a>

```python
def put_audio_codec_options(
  bit_depth: str = None,
  bit_order: str = None,
  profile: str = None,
  signed: str = None
) -> None
```

###### `bit_depth`<sup>Optional</sup> <a name="bit_depth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions.parameter.bitDepth"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_depth ElastictranscoderPreset#bit_depth}.

---

###### `bit_order`<sup>Optional</sup> <a name="bit_order" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions.parameter.bitOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_order ElastictranscoderPreset#bit_order}.

---

###### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions.parameter.profile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#profile ElastictranscoderPreset#profile}.

---

###### `signed`<sup>Optional</sup> <a name="signed" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions.parameter.signed"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#signed ElastictranscoderPreset#signed}.

---

##### `put_thumbnails` <a name="put_thumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails"></a>

```python
def put_thumbnails(
  aspect_ratio: str = None,
  format: str = None,
  interval: str = None,
  max_height: str = None,
  max_width: str = None,
  padding_policy: str = None,
  resolution: str = None,
  sizing_policy: str = None
) -> None
```

###### `aspect_ratio`<sup>Optional</sup> <a name="aspect_ratio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails.parameter.aspectRatio"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}.

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#format ElastictranscoderPreset#format}.

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails.parameter.interval"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#interval ElastictranscoderPreset#interval}.

---

###### `max_height`<sup>Optional</sup> <a name="max_height" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails.parameter.maxHeight"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

###### `max_width`<sup>Optional</sup> <a name="max_width" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails.parameter.maxWidth"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

###### `padding_policy`<sup>Optional</sup> <a name="padding_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails.parameter.paddingPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}.

---

###### `resolution`<sup>Optional</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails.parameter.resolution"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}.

---

###### `sizing_policy`<sup>Optional</sup> <a name="sizing_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails.parameter.sizingPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

##### `put_video` <a name="put_video" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo"></a>

```python
def put_video(
  aspect_ratio: str = None,
  bit_rate: str = None,
  codec: str = None,
  display_aspect_ratio: str = None,
  fixed_gop: str = None,
  frame_rate: str = None,
  keyframes_max_dist: str = None,
  max_frame_rate: str = None,
  max_height: str = None,
  max_width: str = None,
  padding_policy: str = None,
  resolution: str = None,
  sizing_policy: str = None
) -> None
```

###### `aspect_ratio`<sup>Optional</sup> <a name="aspect_ratio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.aspectRatio"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}.

---

###### `bit_rate`<sup>Optional</sup> <a name="bit_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.bitRate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}.

---

###### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.codec"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}.

---

###### `display_aspect_ratio`<sup>Optional</sup> <a name="display_aspect_ratio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.displayAspectRatio"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}.

---

###### `fixed_gop`<sup>Optional</sup> <a name="fixed_gop" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.fixedGop"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#fixed_gop ElastictranscoderPreset#fixed_gop}.

---

###### `frame_rate`<sup>Optional</sup> <a name="frame_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.frameRate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#frame_rate ElastictranscoderPreset#frame_rate}.

---

###### `keyframes_max_dist`<sup>Optional</sup> <a name="keyframes_max_dist" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.keyframesMaxDist"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}.

---

###### `max_frame_rate`<sup>Optional</sup> <a name="max_frame_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.maxFrameRate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_frame_rate ElastictranscoderPreset#max_frame_rate}.

---

###### `max_height`<sup>Optional</sup> <a name="max_height" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.maxHeight"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

###### `max_width`<sup>Optional</sup> <a name="max_width" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.maxWidth"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

###### `padding_policy`<sup>Optional</sup> <a name="padding_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.paddingPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}.

---

###### `resolution`<sup>Optional</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.resolution"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}.

---

###### `sizing_policy`<sup>Optional</sup> <a name="sizing_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.sizingPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

##### `put_video_watermarks` <a name="put_video_watermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideoWatermarks"></a>

```python
def put_video_watermarks(
  value: typing.Union[IResolvable, typing.List[ElastictranscoderPresetVideoWatermarks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideoWatermarks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>]]

---

##### `reset_audio` <a name="reset_audio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudio"></a>

```python
def reset_audio() -> None
```

##### `reset_audio_codec_options` <a name="reset_audio_codec_options" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudioCodecOptions"></a>

```python
def reset_audio_codec_options() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_thumbnails` <a name="reset_thumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetThumbnails"></a>

```python
def reset_thumbnails() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_video` <a name="reset_video" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideo"></a>

```python
def reset_video() -> None
```

##### `reset_video_codec_options` <a name="reset_video_codec_options" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoCodecOptions"></a>

```python
def reset_video_codec_options() -> None
```

##### `reset_video_watermarks` <a name="reset_video_watermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoWatermarks"></a>

```python
def reset_video_watermarks() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPreset.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPreset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPreset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audio">audio</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference">ElastictranscoderPresetAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptions">audio_codec_options</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference">ElastictranscoderPresetAudioCodecOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnails">thumbnails</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference">ElastictranscoderPresetThumbnailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.video">video</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference">ElastictranscoderPresetVideoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarks">video_watermarks</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList">ElastictranscoderPresetVideoWatermarksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptionsInput">audio_codec_options_input</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioInput">audio_input</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnailsInput">thumbnails_input</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptionsInput">video_codec_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoInput">video_input</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarksInput">video_watermarks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptions">video_codec_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `audio`<sup>Required</sup> <a name="audio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audio"></a>

```python
audio: ElastictranscoderPresetAudioOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference">ElastictranscoderPresetAudioOutputReference</a>

---

##### `audio_codec_options`<sup>Required</sup> <a name="audio_codec_options" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptions"></a>

```python
audio_codec_options: ElastictranscoderPresetAudioCodecOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference">ElastictranscoderPresetAudioCodecOptionsOutputReference</a>

---

##### `thumbnails`<sup>Required</sup> <a name="thumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnails"></a>

```python
thumbnails: ElastictranscoderPresetThumbnailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference">ElastictranscoderPresetThumbnailsOutputReference</a>

---

##### `video`<sup>Required</sup> <a name="video" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.video"></a>

```python
video: ElastictranscoderPresetVideoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference">ElastictranscoderPresetVideoOutputReference</a>

---

##### `video_watermarks`<sup>Required</sup> <a name="video_watermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarks"></a>

```python
video_watermarks: ElastictranscoderPresetVideoWatermarksList
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList">ElastictranscoderPresetVideoWatermarksList</a>

---

##### `audio_codec_options_input`<sup>Optional</sup> <a name="audio_codec_options_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptionsInput"></a>

```python
audio_codec_options_input: ElastictranscoderPresetAudioCodecOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

---

##### `audio_input`<sup>Optional</sup> <a name="audio_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioInput"></a>

```python
audio_input: ElastictranscoderPresetAudio
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `thumbnails_input`<sup>Optional</sup> <a name="thumbnails_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnailsInput"></a>

```python
thumbnails_input: ElastictranscoderPresetThumbnails
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `video_codec_options_input`<sup>Optional</sup> <a name="video_codec_options_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptionsInput"></a>

```python
video_codec_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `video_input`<sup>Optional</sup> <a name="video_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoInput"></a>

```python
video_input: ElastictranscoderPresetVideo
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

---

##### `video_watermarks_input`<sup>Optional</sup> <a name="video_watermarks_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarksInput"></a>

```python
video_watermarks_input: typing.Union[IResolvable, typing.List[ElastictranscoderPresetVideoWatermarks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>]]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `video_codec_options`<sup>Required</sup> <a name="video_codec_options" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptions"></a>

```python
video_codec_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElastictranscoderPresetAudio <a name="ElastictranscoderPresetAudio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPresetAudio(
  audio_packing_mode: str = None,
  bit_rate: str = None,
  channels: str = None,
  codec: str = None,
  sample_rate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.audioPackingMode">audio_packing_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.bitRate">bit_rate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.channels">channels</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#channels ElastictranscoderPreset#channels}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.codec">codec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.sampleRate">sample_rate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sample_rate ElastictranscoderPreset#sample_rate}. |

---

##### `audio_packing_mode`<sup>Optional</sup> <a name="audio_packing_mode" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.audioPackingMode"></a>

```python
audio_packing_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}.

---

##### `bit_rate`<sup>Optional</sup> <a name="bit_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.bitRate"></a>

```python
bit_rate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}.

---

##### `channels`<sup>Optional</sup> <a name="channels" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.channels"></a>

```python
channels: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#channels ElastictranscoderPreset#channels}.

---

##### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.codec"></a>

```python
codec: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}.

---

##### `sample_rate`<sup>Optional</sup> <a name="sample_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.sampleRate"></a>

```python
sample_rate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sample_rate ElastictranscoderPreset#sample_rate}.

---

### ElastictranscoderPresetAudioCodecOptions <a name="ElastictranscoderPresetAudioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions(
  bit_depth: str = None,
  bit_order: str = None,
  profile: str = None,
  signed: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitDepth">bit_depth</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_depth ElastictranscoderPreset#bit_depth}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitOrder">bit_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_order ElastictranscoderPreset#bit_order}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.profile">profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#profile ElastictranscoderPreset#profile}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.signed">signed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#signed ElastictranscoderPreset#signed}. |

---

##### `bit_depth`<sup>Optional</sup> <a name="bit_depth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitDepth"></a>

```python
bit_depth: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_depth ElastictranscoderPreset#bit_depth}.

---

##### `bit_order`<sup>Optional</sup> <a name="bit_order" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitOrder"></a>

```python
bit_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_order ElastictranscoderPreset#bit_order}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.profile"></a>

```python
profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#profile ElastictranscoderPreset#profile}.

---

##### `signed`<sup>Optional</sup> <a name="signed" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.signed"></a>

```python
signed: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#signed ElastictranscoderPreset#signed}.

---

### ElastictranscoderPresetConfig <a name="ElastictranscoderPresetConfig" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPresetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container: str,
  audio: ElastictranscoderPresetAudio = None,
  audio_codec_options: ElastictranscoderPresetAudioCodecOptions = None,
  description: str = None,
  id: str = None,
  name: str = None,
  thumbnails: ElastictranscoderPresetThumbnails = None,
  type: str = None,
  video: ElastictranscoderPresetVideo = None,
  video_codec_options: typing.Mapping[str] = None,
  video_watermarks: typing.Union[IResolvable, typing.List[ElastictranscoderPresetVideoWatermarks]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.container">container</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#container ElastictranscoderPreset#container}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audio">audio</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | audio block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audioCodecOptions">audio_codec_options</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | audio_codec_options block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#description ElastictranscoderPreset#description}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#name ElastictranscoderPreset#name}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.thumbnails">thumbnails</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | thumbnails block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#type ElastictranscoderPreset#type}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.video">video</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | video block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoCodecOptions">video_codec_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoWatermarks">video_watermarks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>]]</code> | video_watermarks block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.container"></a>

```python
container: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#container ElastictranscoderPreset#container}.

---

##### `audio`<sup>Optional</sup> <a name="audio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audio"></a>

```python
audio: ElastictranscoderPresetAudio
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

audio block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio ElastictranscoderPreset#audio}

---

##### `audio_codec_options`<sup>Optional</sup> <a name="audio_codec_options" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audioCodecOptions"></a>

```python
audio_codec_options: ElastictranscoderPresetAudioCodecOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

audio_codec_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_codec_options ElastictranscoderPreset#audio_codec_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#description ElastictranscoderPreset#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#name ElastictranscoderPreset#name}.

---

##### `thumbnails`<sup>Optional</sup> <a name="thumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.thumbnails"></a>

```python
thumbnails: ElastictranscoderPresetThumbnails
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

thumbnails block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#thumbnails ElastictranscoderPreset#thumbnails}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#type ElastictranscoderPreset#type}.

---

##### `video`<sup>Optional</sup> <a name="video" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.video"></a>

```python
video: ElastictranscoderPresetVideo
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

video block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video ElastictranscoderPreset#video}

---

##### `video_codec_options`<sup>Optional</sup> <a name="video_codec_options" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoCodecOptions"></a>

```python
video_codec_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}.

---

##### `video_watermarks`<sup>Optional</sup> <a name="video_watermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoWatermarks"></a>

```python
video_watermarks: typing.Union[IResolvable, typing.List[ElastictranscoderPresetVideoWatermarks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>]]

video_watermarks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_watermarks ElastictranscoderPreset#video_watermarks}

---

### ElastictranscoderPresetThumbnails <a name="ElastictranscoderPresetThumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPresetThumbnails(
  aspect_ratio: str = None,
  format: str = None,
  interval: str = None,
  max_height: str = None,
  max_width: str = None,
  padding_policy: str = None,
  resolution: str = None,
  sizing_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.aspectRatio">aspect_ratio</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#format ElastictranscoderPreset#format}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.interval">interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#interval ElastictranscoderPreset#interval}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxHeight">max_height</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxWidth">max_width</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.paddingPolicy">padding_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.resolution">resolution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.sizingPolicy">sizing_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}. |

---

##### `aspect_ratio`<sup>Optional</sup> <a name="aspect_ratio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.aspectRatio"></a>

```python
aspect_ratio: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#format ElastictranscoderPreset#format}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.interval"></a>

```python
interval: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#interval ElastictranscoderPreset#interval}.

---

##### `max_height`<sup>Optional</sup> <a name="max_height" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxHeight"></a>

```python
max_height: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

##### `max_width`<sup>Optional</sup> <a name="max_width" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxWidth"></a>

```python
max_width: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

##### `padding_policy`<sup>Optional</sup> <a name="padding_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.paddingPolicy"></a>

```python
padding_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}.

---

##### `resolution`<sup>Optional</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.resolution"></a>

```python
resolution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}.

---

##### `sizing_policy`<sup>Optional</sup> <a name="sizing_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.sizingPolicy"></a>

```python
sizing_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

### ElastictranscoderPresetVideo <a name="ElastictranscoderPresetVideo" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPresetVideo(
  aspect_ratio: str = None,
  bit_rate: str = None,
  codec: str = None,
  display_aspect_ratio: str = None,
  fixed_gop: str = None,
  frame_rate: str = None,
  keyframes_max_dist: str = None,
  max_frame_rate: str = None,
  max_height: str = None,
  max_width: str = None,
  padding_policy: str = None,
  resolution: str = None,
  sizing_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.aspectRatio">aspect_ratio</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.bitRate">bit_rate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.codec">codec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.displayAspectRatio">display_aspect_ratio</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.fixedGop">fixed_gop</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#fixed_gop ElastictranscoderPreset#fixed_gop}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.frameRate">frame_rate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#frame_rate ElastictranscoderPreset#frame_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.keyframesMaxDist">keyframes_max_dist</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxFrameRate">max_frame_rate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_frame_rate ElastictranscoderPreset#max_frame_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxHeight">max_height</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxWidth">max_width</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.paddingPolicy">padding_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.resolution">resolution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.sizingPolicy">sizing_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}. |

---

##### `aspect_ratio`<sup>Optional</sup> <a name="aspect_ratio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.aspectRatio"></a>

```python
aspect_ratio: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}.

---

##### `bit_rate`<sup>Optional</sup> <a name="bit_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.bitRate"></a>

```python
bit_rate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}.

---

##### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.codec"></a>

```python
codec: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}.

---

##### `display_aspect_ratio`<sup>Optional</sup> <a name="display_aspect_ratio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.displayAspectRatio"></a>

```python
display_aspect_ratio: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}.

---

##### `fixed_gop`<sup>Optional</sup> <a name="fixed_gop" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.fixedGop"></a>

```python
fixed_gop: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#fixed_gop ElastictranscoderPreset#fixed_gop}.

---

##### `frame_rate`<sup>Optional</sup> <a name="frame_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.frameRate"></a>

```python
frame_rate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#frame_rate ElastictranscoderPreset#frame_rate}.

---

##### `keyframes_max_dist`<sup>Optional</sup> <a name="keyframes_max_dist" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.keyframesMaxDist"></a>

```python
keyframes_max_dist: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}.

---

##### `max_frame_rate`<sup>Optional</sup> <a name="max_frame_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxFrameRate"></a>

```python
max_frame_rate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_frame_rate ElastictranscoderPreset#max_frame_rate}.

---

##### `max_height`<sup>Optional</sup> <a name="max_height" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxHeight"></a>

```python
max_height: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

##### `max_width`<sup>Optional</sup> <a name="max_width" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxWidth"></a>

```python
max_width: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

##### `padding_policy`<sup>Optional</sup> <a name="padding_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.paddingPolicy"></a>

```python
padding_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}.

---

##### `resolution`<sup>Optional</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.resolution"></a>

```python
resolution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}.

---

##### `sizing_policy`<sup>Optional</sup> <a name="sizing_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.sizingPolicy"></a>

```python
sizing_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

### ElastictranscoderPresetVideoWatermarks <a name="ElastictranscoderPresetVideoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks(
  horizontal_align: str = None,
  horizontal_offset: str = None,
  id: str = None,
  max_height: str = None,
  max_width: str = None,
  opacity: str = None,
  sizing_policy: str = None,
  target: str = None,
  vertical_align: str = None,
  vertical_offset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalAlign">horizontal_align</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_align ElastictranscoderPreset#horizontal_align}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalOffset">horizontal_offset</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_offset ElastictranscoderPreset#horizontal_offset}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxHeight">max_height</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxWidth">max_width</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.opacity">opacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#opacity ElastictranscoderPreset#opacity}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.sizingPolicy">sizing_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#target ElastictranscoderPreset#target}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalAlign">vertical_align</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_align ElastictranscoderPreset#vertical_align}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalOffset">vertical_offset</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_offset ElastictranscoderPreset#vertical_offset}. |

---

##### `horizontal_align`<sup>Optional</sup> <a name="horizontal_align" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalAlign"></a>

```python
horizontal_align: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_align ElastictranscoderPreset#horizontal_align}.

---

##### `horizontal_offset`<sup>Optional</sup> <a name="horizontal_offset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalOffset"></a>

```python
horizontal_offset: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_offset ElastictranscoderPreset#horizontal_offset}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_height`<sup>Optional</sup> <a name="max_height" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxHeight"></a>

```python
max_height: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

##### `max_width`<sup>Optional</sup> <a name="max_width" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxWidth"></a>

```python
max_width: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

##### `opacity`<sup>Optional</sup> <a name="opacity" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.opacity"></a>

```python
opacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#opacity ElastictranscoderPreset#opacity}.

---

##### `sizing_policy`<sup>Optional</sup> <a name="sizing_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.sizingPolicy"></a>

```python
sizing_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#target ElastictranscoderPreset#target}.

---

##### `vertical_align`<sup>Optional</sup> <a name="vertical_align" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalAlign"></a>

```python
vertical_align: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_align ElastictranscoderPreset#vertical_align}.

---

##### `vertical_offset`<sup>Optional</sup> <a name="vertical_offset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalOffset"></a>

```python
vertical_offset: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_offset ElastictranscoderPreset#vertical_offset}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastictranscoderPresetAudioCodecOptionsOutputReference <a name="ElastictranscoderPresetAudioCodecOptionsOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitDepth">reset_bit_depth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitOrder">reset_bit_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetSigned">reset_signed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bit_depth` <a name="reset_bit_depth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitDepth"></a>

```python
def reset_bit_depth() -> None
```

##### `reset_bit_order` <a name="reset_bit_order" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitOrder"></a>

```python
def reset_bit_order() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_signed` <a name="reset_signed" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetSigned"></a>

```python
def reset_signed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepthInput">bit_depth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrderInput">bit_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signedInput">signed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepth">bit_depth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrder">bit_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signed">signed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bit_depth_input`<sup>Optional</sup> <a name="bit_depth_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepthInput"></a>

```python
bit_depth_input: str
```

- *Type:* str

---

##### `bit_order_input`<sup>Optional</sup> <a name="bit_order_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrderInput"></a>

```python
bit_order_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `signed_input`<sup>Optional</sup> <a name="signed_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signedInput"></a>

```python
signed_input: str
```

- *Type:* str

---

##### `bit_depth`<sup>Required</sup> <a name="bit_depth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepth"></a>

```python
bit_depth: str
```

- *Type:* str

---

##### `bit_order`<sup>Required</sup> <a name="bit_order" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrder"></a>

```python
bit_order: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `signed`<sup>Required</sup> <a name="signed" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signed"></a>

```python
signed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ElastictranscoderPresetAudioCodecOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

---


### ElastictranscoderPresetAudioOutputReference <a name="ElastictranscoderPresetAudioOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetAudioPackingMode">reset_audio_packing_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetBitRate">reset_bit_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetChannels">reset_channels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetCodec">reset_codec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetSampleRate">reset_sample_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audio_packing_mode` <a name="reset_audio_packing_mode" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetAudioPackingMode"></a>

```python
def reset_audio_packing_mode() -> None
```

##### `reset_bit_rate` <a name="reset_bit_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetBitRate"></a>

```python
def reset_bit_rate() -> None
```

##### `reset_channels` <a name="reset_channels" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetChannels"></a>

```python
def reset_channels() -> None
```

##### `reset_codec` <a name="reset_codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetCodec"></a>

```python
def reset_codec() -> None
```

##### `reset_sample_rate` <a name="reset_sample_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetSampleRate"></a>

```python
def reset_sample_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingModeInput">audio_packing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRateInput">bit_rate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channelsInput">channels_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codecInput">codec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRateInput">sample_rate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingMode">audio_packing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRate">bit_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channels">channels</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codec">codec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRate">sample_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_packing_mode_input`<sup>Optional</sup> <a name="audio_packing_mode_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingModeInput"></a>

```python
audio_packing_mode_input: str
```

- *Type:* str

---

##### `bit_rate_input`<sup>Optional</sup> <a name="bit_rate_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRateInput"></a>

```python
bit_rate_input: str
```

- *Type:* str

---

##### `channels_input`<sup>Optional</sup> <a name="channels_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channelsInput"></a>

```python
channels_input: str
```

- *Type:* str

---

##### `codec_input`<sup>Optional</sup> <a name="codec_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codecInput"></a>

```python
codec_input: str
```

- *Type:* str

---

##### `sample_rate_input`<sup>Optional</sup> <a name="sample_rate_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRateInput"></a>

```python
sample_rate_input: str
```

- *Type:* str

---

##### `audio_packing_mode`<sup>Required</sup> <a name="audio_packing_mode" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingMode"></a>

```python
audio_packing_mode: str
```

- *Type:* str

---

##### `bit_rate`<sup>Required</sup> <a name="bit_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRate"></a>

```python
bit_rate: str
```

- *Type:* str

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channels"></a>

```python
channels: str
```

- *Type:* str

---

##### `codec`<sup>Required</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codec"></a>

```python
codec: str
```

- *Type:* str

---

##### `sample_rate`<sup>Required</sup> <a name="sample_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRate"></a>

```python
sample_rate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.internalValue"></a>

```python
internal_value: ElastictranscoderPresetAudio
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

---


### ElastictranscoderPresetThumbnailsOutputReference <a name="ElastictranscoderPresetThumbnailsOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetAspectRatio">reset_aspect_ratio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxHeight">reset_max_height</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxWidth">reset_max_width</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetPaddingPolicy">reset_padding_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetResolution">reset_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetSizingPolicy">reset_sizing_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aspect_ratio` <a name="reset_aspect_ratio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetAspectRatio"></a>

```python
def reset_aspect_ratio() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_max_height` <a name="reset_max_height" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxHeight"></a>

```python
def reset_max_height() -> None
```

##### `reset_max_width` <a name="reset_max_width" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxWidth"></a>

```python
def reset_max_width() -> None
```

##### `reset_padding_policy` <a name="reset_padding_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetPaddingPolicy"></a>

```python
def reset_padding_policy() -> None
```

##### `reset_resolution` <a name="reset_resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetResolution"></a>

```python
def reset_resolution() -> None
```

##### `reset_sizing_policy` <a name="reset_sizing_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetSizingPolicy"></a>

```python
def reset_sizing_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatioInput">aspect_ratio_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeightInput">max_height_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidthInput">max_width_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicyInput">padding_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolutionInput">resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicyInput">sizing_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatio">aspect_ratio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeight">max_height</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidth">max_width</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicy">padding_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolution">resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicy">sizing_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aspect_ratio_input`<sup>Optional</sup> <a name="aspect_ratio_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatioInput"></a>

```python
aspect_ratio_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `max_height_input`<sup>Optional</sup> <a name="max_height_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeightInput"></a>

```python
max_height_input: str
```

- *Type:* str

---

##### `max_width_input`<sup>Optional</sup> <a name="max_width_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidthInput"></a>

```python
max_width_input: str
```

- *Type:* str

---

##### `padding_policy_input`<sup>Optional</sup> <a name="padding_policy_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicyInput"></a>

```python
padding_policy_input: str
```

- *Type:* str

---

##### `resolution_input`<sup>Optional</sup> <a name="resolution_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolutionInput"></a>

```python
resolution_input: str
```

- *Type:* str

---

##### `sizing_policy_input`<sup>Optional</sup> <a name="sizing_policy_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicyInput"></a>

```python
sizing_policy_input: str
```

- *Type:* str

---

##### `aspect_ratio`<sup>Required</sup> <a name="aspect_ratio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatio"></a>

```python
aspect_ratio: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `max_height`<sup>Required</sup> <a name="max_height" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeight"></a>

```python
max_height: str
```

- *Type:* str

---

##### `max_width`<sup>Required</sup> <a name="max_width" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidth"></a>

```python
max_width: str
```

- *Type:* str

---

##### `padding_policy`<sup>Required</sup> <a name="padding_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicy"></a>

```python
padding_policy: str
```

- *Type:* str

---

##### `resolution`<sup>Required</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolution"></a>

```python
resolution: str
```

- *Type:* str

---

##### `sizing_policy`<sup>Required</sup> <a name="sizing_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicy"></a>

```python
sizing_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.internalValue"></a>

```python
internal_value: ElastictranscoderPresetThumbnails
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

---


### ElastictranscoderPresetVideoOutputReference <a name="ElastictranscoderPresetVideoOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetAspectRatio">reset_aspect_ratio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetBitRate">reset_bit_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetCodec">reset_codec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetDisplayAspectRatio">reset_display_aspect_ratio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFixedGop">reset_fixed_gop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFrameRate">reset_frame_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetKeyframesMaxDist">reset_keyframes_max_dist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxFrameRate">reset_max_frame_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxHeight">reset_max_height</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxWidth">reset_max_width</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetPaddingPolicy">reset_padding_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetResolution">reset_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetSizingPolicy">reset_sizing_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aspect_ratio` <a name="reset_aspect_ratio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetAspectRatio"></a>

```python
def reset_aspect_ratio() -> None
```

##### `reset_bit_rate` <a name="reset_bit_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetBitRate"></a>

```python
def reset_bit_rate() -> None
```

##### `reset_codec` <a name="reset_codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetCodec"></a>

```python
def reset_codec() -> None
```

##### `reset_display_aspect_ratio` <a name="reset_display_aspect_ratio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetDisplayAspectRatio"></a>

```python
def reset_display_aspect_ratio() -> None
```

##### `reset_fixed_gop` <a name="reset_fixed_gop" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFixedGop"></a>

```python
def reset_fixed_gop() -> None
```

##### `reset_frame_rate` <a name="reset_frame_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFrameRate"></a>

```python
def reset_frame_rate() -> None
```

##### `reset_keyframes_max_dist` <a name="reset_keyframes_max_dist" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetKeyframesMaxDist"></a>

```python
def reset_keyframes_max_dist() -> None
```

##### `reset_max_frame_rate` <a name="reset_max_frame_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxFrameRate"></a>

```python
def reset_max_frame_rate() -> None
```

##### `reset_max_height` <a name="reset_max_height" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxHeight"></a>

```python
def reset_max_height() -> None
```

##### `reset_max_width` <a name="reset_max_width" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxWidth"></a>

```python
def reset_max_width() -> None
```

##### `reset_padding_policy` <a name="reset_padding_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetPaddingPolicy"></a>

```python
def reset_padding_policy() -> None
```

##### `reset_resolution` <a name="reset_resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetResolution"></a>

```python
def reset_resolution() -> None
```

##### `reset_sizing_policy` <a name="reset_sizing_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetSizingPolicy"></a>

```python
def reset_sizing_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatioInput">aspect_ratio_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRateInput">bit_rate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codecInput">codec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatioInput">display_aspect_ratio_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGopInput">fixed_gop_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRateInput">frame_rate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDistInput">keyframes_max_dist_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRateInput">max_frame_rate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeightInput">max_height_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidthInput">max_width_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicyInput">padding_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolutionInput">resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicyInput">sizing_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatio">aspect_ratio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRate">bit_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codec">codec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatio">display_aspect_ratio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGop">fixed_gop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRate">frame_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDist">keyframes_max_dist</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRate">max_frame_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeight">max_height</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidth">max_width</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicy">padding_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolution">resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicy">sizing_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aspect_ratio_input`<sup>Optional</sup> <a name="aspect_ratio_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatioInput"></a>

```python
aspect_ratio_input: str
```

- *Type:* str

---

##### `bit_rate_input`<sup>Optional</sup> <a name="bit_rate_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRateInput"></a>

```python
bit_rate_input: str
```

- *Type:* str

---

##### `codec_input`<sup>Optional</sup> <a name="codec_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codecInput"></a>

```python
codec_input: str
```

- *Type:* str

---

##### `display_aspect_ratio_input`<sup>Optional</sup> <a name="display_aspect_ratio_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatioInput"></a>

```python
display_aspect_ratio_input: str
```

- *Type:* str

---

##### `fixed_gop_input`<sup>Optional</sup> <a name="fixed_gop_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGopInput"></a>

```python
fixed_gop_input: str
```

- *Type:* str

---

##### `frame_rate_input`<sup>Optional</sup> <a name="frame_rate_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRateInput"></a>

```python
frame_rate_input: str
```

- *Type:* str

---

##### `keyframes_max_dist_input`<sup>Optional</sup> <a name="keyframes_max_dist_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDistInput"></a>

```python
keyframes_max_dist_input: str
```

- *Type:* str

---

##### `max_frame_rate_input`<sup>Optional</sup> <a name="max_frame_rate_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRateInput"></a>

```python
max_frame_rate_input: str
```

- *Type:* str

---

##### `max_height_input`<sup>Optional</sup> <a name="max_height_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeightInput"></a>

```python
max_height_input: str
```

- *Type:* str

---

##### `max_width_input`<sup>Optional</sup> <a name="max_width_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidthInput"></a>

```python
max_width_input: str
```

- *Type:* str

---

##### `padding_policy_input`<sup>Optional</sup> <a name="padding_policy_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicyInput"></a>

```python
padding_policy_input: str
```

- *Type:* str

---

##### `resolution_input`<sup>Optional</sup> <a name="resolution_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolutionInput"></a>

```python
resolution_input: str
```

- *Type:* str

---

##### `sizing_policy_input`<sup>Optional</sup> <a name="sizing_policy_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicyInput"></a>

```python
sizing_policy_input: str
```

- *Type:* str

---

##### `aspect_ratio`<sup>Required</sup> <a name="aspect_ratio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatio"></a>

```python
aspect_ratio: str
```

- *Type:* str

---

##### `bit_rate`<sup>Required</sup> <a name="bit_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRate"></a>

```python
bit_rate: str
```

- *Type:* str

---

##### `codec`<sup>Required</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codec"></a>

```python
codec: str
```

- *Type:* str

---

##### `display_aspect_ratio`<sup>Required</sup> <a name="display_aspect_ratio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatio"></a>

```python
display_aspect_ratio: str
```

- *Type:* str

---

##### `fixed_gop`<sup>Required</sup> <a name="fixed_gop" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGop"></a>

```python
fixed_gop: str
```

- *Type:* str

---

##### `frame_rate`<sup>Required</sup> <a name="frame_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRate"></a>

```python
frame_rate: str
```

- *Type:* str

---

##### `keyframes_max_dist`<sup>Required</sup> <a name="keyframes_max_dist" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDist"></a>

```python
keyframes_max_dist: str
```

- *Type:* str

---

##### `max_frame_rate`<sup>Required</sup> <a name="max_frame_rate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRate"></a>

```python
max_frame_rate: str
```

- *Type:* str

---

##### `max_height`<sup>Required</sup> <a name="max_height" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeight"></a>

```python
max_height: str
```

- *Type:* str

---

##### `max_width`<sup>Required</sup> <a name="max_width" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidth"></a>

```python
max_width: str
```

- *Type:* str

---

##### `padding_policy`<sup>Required</sup> <a name="padding_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicy"></a>

```python
padding_policy: str
```

- *Type:* str

---

##### `resolution`<sup>Required</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolution"></a>

```python
resolution: str
```

- *Type:* str

---

##### `sizing_policy`<sup>Required</sup> <a name="sizing_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicy"></a>

```python
sizing_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.internalValue"></a>

```python
internal_value: ElastictranscoderPresetVideo
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

---


### ElastictranscoderPresetVideoWatermarksList <a name="ElastictranscoderPresetVideoWatermarksList" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastictranscoderPresetVideoWatermarksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastictranscoderPresetVideoWatermarks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>]]

---


### ElastictranscoderPresetVideoWatermarksOutputReference <a name="ElastictranscoderPresetVideoWatermarksOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastictranscoder_preset

elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalAlign">reset_horizontal_align</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalOffset">reset_horizontal_offset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxHeight">reset_max_height</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxWidth">reset_max_width</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetOpacity">reset_opacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetSizingPolicy">reset_sizing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalAlign">reset_vertical_align</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalOffset">reset_vertical_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_horizontal_align` <a name="reset_horizontal_align" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalAlign"></a>

```python
def reset_horizontal_align() -> None
```

##### `reset_horizontal_offset` <a name="reset_horizontal_offset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalOffset"></a>

```python
def reset_horizontal_offset() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_height` <a name="reset_max_height" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxHeight"></a>

```python
def reset_max_height() -> None
```

##### `reset_max_width` <a name="reset_max_width" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxWidth"></a>

```python
def reset_max_width() -> None
```

##### `reset_opacity` <a name="reset_opacity" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetOpacity"></a>

```python
def reset_opacity() -> None
```

##### `reset_sizing_policy` <a name="reset_sizing_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetSizingPolicy"></a>

```python
def reset_sizing_policy() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_vertical_align` <a name="reset_vertical_align" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalAlign"></a>

```python
def reset_vertical_align() -> None
```

##### `reset_vertical_offset` <a name="reset_vertical_offset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalOffset"></a>

```python
def reset_vertical_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlignInput">horizontal_align_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffsetInput">horizontal_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeightInput">max_height_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidthInput">max_width_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacityInput">opacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicyInput">sizing_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlignInput">vertical_align_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffsetInput">vertical_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlign">horizontal_align</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffset">horizontal_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeight">max_height</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidth">max_width</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacity">opacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicy">sizing_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlign">vertical_align</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffset">vertical_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `horizontal_align_input`<sup>Optional</sup> <a name="horizontal_align_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlignInput"></a>

```python
horizontal_align_input: str
```

- *Type:* str

---

##### `horizontal_offset_input`<sup>Optional</sup> <a name="horizontal_offset_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffsetInput"></a>

```python
horizontal_offset_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_height_input`<sup>Optional</sup> <a name="max_height_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeightInput"></a>

```python
max_height_input: str
```

- *Type:* str

---

##### `max_width_input`<sup>Optional</sup> <a name="max_width_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidthInput"></a>

```python
max_width_input: str
```

- *Type:* str

---

##### `opacity_input`<sup>Optional</sup> <a name="opacity_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacityInput"></a>

```python
opacity_input: str
```

- *Type:* str

---

##### `sizing_policy_input`<sup>Optional</sup> <a name="sizing_policy_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicyInput"></a>

```python
sizing_policy_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `vertical_align_input`<sup>Optional</sup> <a name="vertical_align_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlignInput"></a>

```python
vertical_align_input: str
```

- *Type:* str

---

##### `vertical_offset_input`<sup>Optional</sup> <a name="vertical_offset_input" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffsetInput"></a>

```python
vertical_offset_input: str
```

- *Type:* str

---

##### `horizontal_align`<sup>Required</sup> <a name="horizontal_align" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlign"></a>

```python
horizontal_align: str
```

- *Type:* str

---

##### `horizontal_offset`<sup>Required</sup> <a name="horizontal_offset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffset"></a>

```python
horizontal_offset: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_height`<sup>Required</sup> <a name="max_height" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeight"></a>

```python
max_height: str
```

- *Type:* str

---

##### `max_width`<sup>Required</sup> <a name="max_width" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidth"></a>

```python
max_width: str
```

- *Type:* str

---

##### `opacity`<sup>Required</sup> <a name="opacity" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacity"></a>

```python
opacity: str
```

- *Type:* str

---

##### `sizing_policy`<sup>Required</sup> <a name="sizing_policy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicy"></a>

```python
sizing_policy: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `vertical_align`<sup>Required</sup> <a name="vertical_align" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlign"></a>

```python
vertical_align: str
```

- *Type:* str

---

##### `vertical_offset`<sup>Required</sup> <a name="vertical_offset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffset"></a>

```python
vertical_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ElastictranscoderPresetVideoWatermarks, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>, cdktf.IResolvable]

---



