# `elastictranscoderPreset` Submodule <a name="`elastictranscoderPreset` Submodule" id="@cdktf/provider-aws.elastictranscoderPreset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastictranscoderPreset <a name="ElastictranscoderPreset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset aws_elastictranscoder_preset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPreset(Construct Scope, string Id, ElastictranscoderPresetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig">ElastictranscoderPresetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig">ElastictranscoderPresetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio">PutAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions">PutAudioCodecOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails">PutThumbnails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo">PutVideo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideoWatermarks">PutVideoWatermarks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudio">ResetAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudioCodecOptions">ResetAudioCodecOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetThumbnails">ResetThumbnails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideo">ResetVideo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoCodecOptions">ResetVideoCodecOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoWatermarks">ResetVideoWatermarks</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAudio` <a name="PutAudio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio"></a>

```csharp
private void PutAudio(ElastictranscoderPresetAudio Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

---

##### `PutAudioCodecOptions` <a name="PutAudioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions"></a>

```csharp
private void PutAudioCodecOptions(ElastictranscoderPresetAudioCodecOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

---

##### `PutThumbnails` <a name="PutThumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails"></a>

```csharp
private void PutThumbnails(ElastictranscoderPresetThumbnails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

---

##### `PutVideo` <a name="PutVideo" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo"></a>

```csharp
private void PutVideo(ElastictranscoderPresetVideo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

---

##### `PutVideoWatermarks` <a name="PutVideoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideoWatermarks"></a>

```csharp
private void PutVideoWatermarks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideoWatermarks.parameter.value"></a>

- *Type:* object

---

##### `ResetAudio` <a name="ResetAudio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudio"></a>

```csharp
private void ResetAudio()
```

##### `ResetAudioCodecOptions` <a name="ResetAudioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudioCodecOptions"></a>

```csharp
private void ResetAudioCodecOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetThumbnails` <a name="ResetThumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetThumbnails"></a>

```csharp
private void ResetThumbnails()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVideo` <a name="ResetVideo" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideo"></a>

```csharp
private void ResetVideo()
```

##### `ResetVideoCodecOptions` <a name="ResetVideoCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoCodecOptions"></a>

```csharp
private void ResetVideoCodecOptions()
```

##### `ResetVideoWatermarks` <a name="ResetVideoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoWatermarks"></a>

```csharp
private void ResetVideoWatermarks()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElastictranscoderPreset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElastictranscoderPreset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElastictranscoderPreset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audio">Audio</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference">ElastictranscoderPresetAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptions">AudioCodecOptions</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference">ElastictranscoderPresetAudioCodecOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnails">Thumbnails</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference">ElastictranscoderPresetThumbnailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.video">Video</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference">ElastictranscoderPresetVideoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarks">VideoWatermarks</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList">ElastictranscoderPresetVideoWatermarksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptionsInput">AudioCodecOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioInput">AudioInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnailsInput">ThumbnailsInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptionsInput">VideoCodecOptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoInput">VideoInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarksInput">VideoWatermarksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptions">VideoCodecOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Audio`<sup>Required</sup> <a name="Audio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audio"></a>

```csharp
public ElastictranscoderPresetAudioOutputReference Audio { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference">ElastictranscoderPresetAudioOutputReference</a>

---

##### `AudioCodecOptions`<sup>Required</sup> <a name="AudioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptions"></a>

```csharp
public ElastictranscoderPresetAudioCodecOptionsOutputReference AudioCodecOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference">ElastictranscoderPresetAudioCodecOptionsOutputReference</a>

---

##### `Thumbnails`<sup>Required</sup> <a name="Thumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnails"></a>

```csharp
public ElastictranscoderPresetThumbnailsOutputReference Thumbnails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference">ElastictranscoderPresetThumbnailsOutputReference</a>

---

##### `Video`<sup>Required</sup> <a name="Video" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.video"></a>

```csharp
public ElastictranscoderPresetVideoOutputReference Video { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference">ElastictranscoderPresetVideoOutputReference</a>

---

##### `VideoWatermarks`<sup>Required</sup> <a name="VideoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarks"></a>

```csharp
public ElastictranscoderPresetVideoWatermarksList VideoWatermarks { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList">ElastictranscoderPresetVideoWatermarksList</a>

---

##### `AudioCodecOptionsInput`<sup>Optional</sup> <a name="AudioCodecOptionsInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptionsInput"></a>

```csharp
public ElastictranscoderPresetAudioCodecOptions AudioCodecOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

---

##### `AudioInput`<sup>Optional</sup> <a name="AudioInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioInput"></a>

```csharp
public ElastictranscoderPresetAudio AudioInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ThumbnailsInput`<sup>Optional</sup> <a name="ThumbnailsInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnailsInput"></a>

```csharp
public ElastictranscoderPresetThumbnails ThumbnailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VideoCodecOptionsInput`<sup>Optional</sup> <a name="VideoCodecOptionsInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VideoCodecOptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VideoInput`<sup>Optional</sup> <a name="VideoInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoInput"></a>

```csharp
public ElastictranscoderPresetVideo VideoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

---

##### `VideoWatermarksInput`<sup>Optional</sup> <a name="VideoWatermarksInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarksInput"></a>

```csharp
public object VideoWatermarksInput { get; }
```

- *Type:* object

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VideoCodecOptions`<sup>Required</sup> <a name="VideoCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VideoCodecOptions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElastictranscoderPresetAudio <a name="ElastictranscoderPresetAudio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPresetAudio {
    string AudioPackingMode = null,
    string BitRate = null,
    string Channels = null,
    string Codec = null,
    string SampleRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.audioPackingMode">AudioPackingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.bitRate">BitRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.channels">Channels</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#channels ElastictranscoderPreset#channels}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.codec">Codec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.sampleRate">SampleRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sample_rate ElastictranscoderPreset#sample_rate}. |

---

##### `AudioPackingMode`<sup>Optional</sup> <a name="AudioPackingMode" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.audioPackingMode"></a>

```csharp
public string AudioPackingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}.

---

##### `BitRate`<sup>Optional</sup> <a name="BitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.bitRate"></a>

```csharp
public string BitRate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}.

---

##### `Channels`<sup>Optional</sup> <a name="Channels" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.channels"></a>

```csharp
public string Channels { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#channels ElastictranscoderPreset#channels}.

---

##### `Codec`<sup>Optional</sup> <a name="Codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.codec"></a>

```csharp
public string Codec { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}.

---

##### `SampleRate`<sup>Optional</sup> <a name="SampleRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.sampleRate"></a>

```csharp
public string SampleRate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sample_rate ElastictranscoderPreset#sample_rate}.

---

### ElastictranscoderPresetAudioCodecOptions <a name="ElastictranscoderPresetAudioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPresetAudioCodecOptions {
    string BitDepth = null,
    string BitOrder = null,
    string Profile = null,
    string Signed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitDepth">BitDepth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_depth ElastictranscoderPreset#bit_depth}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitOrder">BitOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_order ElastictranscoderPreset#bit_order}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.profile">Profile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#profile ElastictranscoderPreset#profile}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.signed">Signed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#signed ElastictranscoderPreset#signed}. |

---

##### `BitDepth`<sup>Optional</sup> <a name="BitDepth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitDepth"></a>

```csharp
public string BitDepth { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_depth ElastictranscoderPreset#bit_depth}.

---

##### `BitOrder`<sup>Optional</sup> <a name="BitOrder" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitOrder"></a>

```csharp
public string BitOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_order ElastictranscoderPreset#bit_order}.

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#profile ElastictranscoderPreset#profile}.

---

##### `Signed`<sup>Optional</sup> <a name="Signed" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.signed"></a>

```csharp
public string Signed { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#signed ElastictranscoderPreset#signed}.

---

### ElastictranscoderPresetConfig <a name="ElastictranscoderPresetConfig" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPresetConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Container,
    ElastictranscoderPresetAudio Audio = null,
    ElastictranscoderPresetAudioCodecOptions AudioCodecOptions = null,
    string Description = null,
    string Id = null,
    string Name = null,
    ElastictranscoderPresetThumbnails Thumbnails = null,
    string Type = null,
    ElastictranscoderPresetVideo Video = null,
    System.Collections.Generic.IDictionary<string, string> VideoCodecOptions = null,
    object VideoWatermarks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.container">Container</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#container ElastictranscoderPreset#container}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audio">Audio</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | audio block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audioCodecOptions">AudioCodecOptions</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | audio_codec_options block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#description ElastictranscoderPreset#description}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#name ElastictranscoderPreset#name}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.thumbnails">Thumbnails</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | thumbnails block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#type ElastictranscoderPreset#type}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.video">Video</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | video block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoCodecOptions">VideoCodecOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoWatermarks">VideoWatermarks</a></code> | <code>object</code> | video_watermarks block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#container ElastictranscoderPreset#container}.

---

##### `Audio`<sup>Optional</sup> <a name="Audio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audio"></a>

```csharp
public ElastictranscoderPresetAudio Audio { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

audio block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio ElastictranscoderPreset#audio}

---

##### `AudioCodecOptions`<sup>Optional</sup> <a name="AudioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audioCodecOptions"></a>

```csharp
public ElastictranscoderPresetAudioCodecOptions AudioCodecOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

audio_codec_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_codec_options ElastictranscoderPreset#audio_codec_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#description ElastictranscoderPreset#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#name ElastictranscoderPreset#name}.

---

##### `Thumbnails`<sup>Optional</sup> <a name="Thumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.thumbnails"></a>

```csharp
public ElastictranscoderPresetThumbnails Thumbnails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

thumbnails block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#thumbnails ElastictranscoderPreset#thumbnails}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#type ElastictranscoderPreset#type}.

---

##### `Video`<sup>Optional</sup> <a name="Video" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.video"></a>

```csharp
public ElastictranscoderPresetVideo Video { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

video block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video ElastictranscoderPreset#video}

---

##### `VideoCodecOptions`<sup>Optional</sup> <a name="VideoCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoCodecOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VideoCodecOptions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}.

---

##### `VideoWatermarks`<sup>Optional</sup> <a name="VideoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoWatermarks"></a>

```csharp
public object VideoWatermarks { get; set; }
```

- *Type:* object

video_watermarks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_watermarks ElastictranscoderPreset#video_watermarks}

---

### ElastictranscoderPresetThumbnails <a name="ElastictranscoderPresetThumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPresetThumbnails {
    string AspectRatio = null,
    string Format = null,
    string Interval = null,
    string MaxHeight = null,
    string MaxWidth = null,
    string PaddingPolicy = null,
    string Resolution = null,
    string SizingPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.aspectRatio">AspectRatio</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#format ElastictranscoderPreset#format}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.interval">Interval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#interval ElastictranscoderPreset#interval}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxHeight">MaxHeight</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxWidth">MaxWidth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.paddingPolicy">PaddingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.resolution">Resolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.sizingPolicy">SizingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}. |

---

##### `AspectRatio`<sup>Optional</sup> <a name="AspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.aspectRatio"></a>

```csharp
public string AspectRatio { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#format ElastictranscoderPreset#format}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.interval"></a>

```csharp
public string Interval { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#interval ElastictranscoderPreset#interval}.

---

##### `MaxHeight`<sup>Optional</sup> <a name="MaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxHeight"></a>

```csharp
public string MaxHeight { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

##### `MaxWidth`<sup>Optional</sup> <a name="MaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxWidth"></a>

```csharp
public string MaxWidth { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

##### `PaddingPolicy`<sup>Optional</sup> <a name="PaddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.paddingPolicy"></a>

```csharp
public string PaddingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}.

---

##### `Resolution`<sup>Optional</sup> <a name="Resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.resolution"></a>

```csharp
public string Resolution { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}.

---

##### `SizingPolicy`<sup>Optional</sup> <a name="SizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.sizingPolicy"></a>

```csharp
public string SizingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

### ElastictranscoderPresetVideo <a name="ElastictranscoderPresetVideo" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPresetVideo {
    string AspectRatio = null,
    string BitRate = null,
    string Codec = null,
    string DisplayAspectRatio = null,
    string FixedGop = null,
    string FrameRate = null,
    string KeyframesMaxDist = null,
    string MaxFrameRate = null,
    string MaxHeight = null,
    string MaxWidth = null,
    string PaddingPolicy = null,
    string Resolution = null,
    string SizingPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.aspectRatio">AspectRatio</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.bitRate">BitRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.codec">Codec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.displayAspectRatio">DisplayAspectRatio</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.fixedGop">FixedGop</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#fixed_gop ElastictranscoderPreset#fixed_gop}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.frameRate">FrameRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#frame_rate ElastictranscoderPreset#frame_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.keyframesMaxDist">KeyframesMaxDist</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxFrameRate">MaxFrameRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_frame_rate ElastictranscoderPreset#max_frame_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxHeight">MaxHeight</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxWidth">MaxWidth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.paddingPolicy">PaddingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.resolution">Resolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.sizingPolicy">SizingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}. |

---

##### `AspectRatio`<sup>Optional</sup> <a name="AspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.aspectRatio"></a>

```csharp
public string AspectRatio { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}.

---

##### `BitRate`<sup>Optional</sup> <a name="BitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.bitRate"></a>

```csharp
public string BitRate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}.

---

##### `Codec`<sup>Optional</sup> <a name="Codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.codec"></a>

```csharp
public string Codec { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}.

---

##### `DisplayAspectRatio`<sup>Optional</sup> <a name="DisplayAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.displayAspectRatio"></a>

```csharp
public string DisplayAspectRatio { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}.

---

##### `FixedGop`<sup>Optional</sup> <a name="FixedGop" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.fixedGop"></a>

```csharp
public string FixedGop { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#fixed_gop ElastictranscoderPreset#fixed_gop}.

---

##### `FrameRate`<sup>Optional</sup> <a name="FrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.frameRate"></a>

```csharp
public string FrameRate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#frame_rate ElastictranscoderPreset#frame_rate}.

---

##### `KeyframesMaxDist`<sup>Optional</sup> <a name="KeyframesMaxDist" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.keyframesMaxDist"></a>

```csharp
public string KeyframesMaxDist { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}.

---

##### `MaxFrameRate`<sup>Optional</sup> <a name="MaxFrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxFrameRate"></a>

```csharp
public string MaxFrameRate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_frame_rate ElastictranscoderPreset#max_frame_rate}.

---

##### `MaxHeight`<sup>Optional</sup> <a name="MaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxHeight"></a>

```csharp
public string MaxHeight { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

##### `MaxWidth`<sup>Optional</sup> <a name="MaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxWidth"></a>

```csharp
public string MaxWidth { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

##### `PaddingPolicy`<sup>Optional</sup> <a name="PaddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.paddingPolicy"></a>

```csharp
public string PaddingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}.

---

##### `Resolution`<sup>Optional</sup> <a name="Resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.resolution"></a>

```csharp
public string Resolution { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}.

---

##### `SizingPolicy`<sup>Optional</sup> <a name="SizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.sizingPolicy"></a>

```csharp
public string SizingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

### ElastictranscoderPresetVideoWatermarks <a name="ElastictranscoderPresetVideoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPresetVideoWatermarks {
    string HorizontalAlign = null,
    string HorizontalOffset = null,
    string Id = null,
    string MaxHeight = null,
    string MaxWidth = null,
    string Opacity = null,
    string SizingPolicy = null,
    string Target = null,
    string VerticalAlign = null,
    string VerticalOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalAlign">HorizontalAlign</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_align ElastictranscoderPreset#horizontal_align}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalOffset">HorizontalOffset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_offset ElastictranscoderPreset#horizontal_offset}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxHeight">MaxHeight</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxWidth">MaxWidth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.opacity">Opacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#opacity ElastictranscoderPreset#opacity}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.sizingPolicy">SizingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#target ElastictranscoderPreset#target}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalAlign">VerticalAlign</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_align ElastictranscoderPreset#vertical_align}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalOffset">VerticalOffset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_offset ElastictranscoderPreset#vertical_offset}. |

---

##### `HorizontalAlign`<sup>Optional</sup> <a name="HorizontalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalAlign"></a>

```csharp
public string HorizontalAlign { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_align ElastictranscoderPreset#horizontal_align}.

---

##### `HorizontalOffset`<sup>Optional</sup> <a name="HorizontalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalOffset"></a>

```csharp
public string HorizontalOffset { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_offset ElastictranscoderPreset#horizontal_offset}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxHeight`<sup>Optional</sup> <a name="MaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxHeight"></a>

```csharp
public string MaxHeight { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

##### `MaxWidth`<sup>Optional</sup> <a name="MaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxWidth"></a>

```csharp
public string MaxWidth { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

##### `Opacity`<sup>Optional</sup> <a name="Opacity" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.opacity"></a>

```csharp
public string Opacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#opacity ElastictranscoderPreset#opacity}.

---

##### `SizingPolicy`<sup>Optional</sup> <a name="SizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.sizingPolicy"></a>

```csharp
public string SizingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#target ElastictranscoderPreset#target}.

---

##### `VerticalAlign`<sup>Optional</sup> <a name="VerticalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalAlign"></a>

```csharp
public string VerticalAlign { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_align ElastictranscoderPreset#vertical_align}.

---

##### `VerticalOffset`<sup>Optional</sup> <a name="VerticalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalOffset"></a>

```csharp
public string VerticalOffset { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_offset ElastictranscoderPreset#vertical_offset}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastictranscoderPresetAudioCodecOptionsOutputReference <a name="ElastictranscoderPresetAudioCodecOptionsOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPresetAudioCodecOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitDepth">ResetBitDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitOrder">ResetBitOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetSigned">ResetSigned</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBitDepth` <a name="ResetBitDepth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitDepth"></a>

```csharp
private void ResetBitDepth()
```

##### `ResetBitOrder` <a name="ResetBitOrder" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitOrder"></a>

```csharp
private void ResetBitOrder()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetProfile"></a>

```csharp
private void ResetProfile()
```

##### `ResetSigned` <a name="ResetSigned" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetSigned"></a>

```csharp
private void ResetSigned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepthInput">BitDepthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrderInput">BitOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signedInput">SignedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepth">BitDepth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrder">BitOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signed">Signed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BitDepthInput`<sup>Optional</sup> <a name="BitDepthInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepthInput"></a>

```csharp
public string BitDepthInput { get; }
```

- *Type:* string

---

##### `BitOrderInput`<sup>Optional</sup> <a name="BitOrderInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrderInput"></a>

```csharp
public string BitOrderInput { get; }
```

- *Type:* string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `SignedInput`<sup>Optional</sup> <a name="SignedInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signedInput"></a>

```csharp
public string SignedInput { get; }
```

- *Type:* string

---

##### `BitDepth`<sup>Required</sup> <a name="BitDepth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepth"></a>

```csharp
public string BitDepth { get; }
```

- *Type:* string

---

##### `BitOrder`<sup>Required</sup> <a name="BitOrder" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrder"></a>

```csharp
public string BitOrder { get; }
```

- *Type:* string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `Signed`<sup>Required</sup> <a name="Signed" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signed"></a>

```csharp
public string Signed { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.internalValue"></a>

```csharp
public ElastictranscoderPresetAudioCodecOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

---


### ElastictranscoderPresetAudioOutputReference <a name="ElastictranscoderPresetAudioOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPresetAudioOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetAudioPackingMode">ResetAudioPackingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetBitRate">ResetBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetChannels">ResetChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetCodec">ResetCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetSampleRate">ResetSampleRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudioPackingMode` <a name="ResetAudioPackingMode" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetAudioPackingMode"></a>

```csharp
private void ResetAudioPackingMode()
```

##### `ResetBitRate` <a name="ResetBitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetBitRate"></a>

```csharp
private void ResetBitRate()
```

##### `ResetChannels` <a name="ResetChannels" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetChannels"></a>

```csharp
private void ResetChannels()
```

##### `ResetCodec` <a name="ResetCodec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetCodec"></a>

```csharp
private void ResetCodec()
```

##### `ResetSampleRate` <a name="ResetSampleRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetSampleRate"></a>

```csharp
private void ResetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingModeInput">AudioPackingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRateInput">BitRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channelsInput">ChannelsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codecInput">CodecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRateInput">SampleRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingMode">AudioPackingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRate">BitRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channels">Channels</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codec">Codec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRate">SampleRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioPackingModeInput`<sup>Optional</sup> <a name="AudioPackingModeInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingModeInput"></a>

```csharp
public string AudioPackingModeInput { get; }
```

- *Type:* string

---

##### `BitRateInput`<sup>Optional</sup> <a name="BitRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRateInput"></a>

```csharp
public string BitRateInput { get; }
```

- *Type:* string

---

##### `ChannelsInput`<sup>Optional</sup> <a name="ChannelsInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channelsInput"></a>

```csharp
public string ChannelsInput { get; }
```

- *Type:* string

---

##### `CodecInput`<sup>Optional</sup> <a name="CodecInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codecInput"></a>

```csharp
public string CodecInput { get; }
```

- *Type:* string

---

##### `SampleRateInput`<sup>Optional</sup> <a name="SampleRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRateInput"></a>

```csharp
public string SampleRateInput { get; }
```

- *Type:* string

---

##### `AudioPackingMode`<sup>Required</sup> <a name="AudioPackingMode" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingMode"></a>

```csharp
public string AudioPackingMode { get; }
```

- *Type:* string

---

##### `BitRate`<sup>Required</sup> <a name="BitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRate"></a>

```csharp
public string BitRate { get; }
```

- *Type:* string

---

##### `Channels`<sup>Required</sup> <a name="Channels" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channels"></a>

```csharp
public string Channels { get; }
```

- *Type:* string

---

##### `Codec`<sup>Required</sup> <a name="Codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codec"></a>

```csharp
public string Codec { get; }
```

- *Type:* string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRate"></a>

```csharp
public string SampleRate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.internalValue"></a>

```csharp
public ElastictranscoderPresetAudio InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

---


### ElastictranscoderPresetThumbnailsOutputReference <a name="ElastictranscoderPresetThumbnailsOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPresetThumbnailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetAspectRatio">ResetAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxHeight">ResetMaxHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxWidth">ResetMaxWidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetPaddingPolicy">ResetPaddingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetResolution">ResetResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetSizingPolicy">ResetSizingPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAspectRatio` <a name="ResetAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetAspectRatio"></a>

```csharp
private void ResetAspectRatio()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetMaxHeight` <a name="ResetMaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxHeight"></a>

```csharp
private void ResetMaxHeight()
```

##### `ResetMaxWidth` <a name="ResetMaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxWidth"></a>

```csharp
private void ResetMaxWidth()
```

##### `ResetPaddingPolicy` <a name="ResetPaddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetPaddingPolicy"></a>

```csharp
private void ResetPaddingPolicy()
```

##### `ResetResolution` <a name="ResetResolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetResolution"></a>

```csharp
private void ResetResolution()
```

##### `ResetSizingPolicy` <a name="ResetSizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetSizingPolicy"></a>

```csharp
private void ResetSizingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatioInput">AspectRatioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.intervalInput">IntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeightInput">MaxHeightInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidthInput">MaxWidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicyInput">PaddingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolutionInput">ResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicyInput">SizingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatio">AspectRatio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.interval">Interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeight">MaxHeight</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidth">MaxWidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicy">PaddingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolution">Resolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicy">SizingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AspectRatioInput`<sup>Optional</sup> <a name="AspectRatioInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatioInput"></a>

```csharp
public string AspectRatioInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.intervalInput"></a>

```csharp
public string IntervalInput { get; }
```

- *Type:* string

---

##### `MaxHeightInput`<sup>Optional</sup> <a name="MaxHeightInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeightInput"></a>

```csharp
public string MaxHeightInput { get; }
```

- *Type:* string

---

##### `MaxWidthInput`<sup>Optional</sup> <a name="MaxWidthInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidthInput"></a>

```csharp
public string MaxWidthInput { get; }
```

- *Type:* string

---

##### `PaddingPolicyInput`<sup>Optional</sup> <a name="PaddingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicyInput"></a>

```csharp
public string PaddingPolicyInput { get; }
```

- *Type:* string

---

##### `ResolutionInput`<sup>Optional</sup> <a name="ResolutionInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolutionInput"></a>

```csharp
public string ResolutionInput { get; }
```

- *Type:* string

---

##### `SizingPolicyInput`<sup>Optional</sup> <a name="SizingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicyInput"></a>

```csharp
public string SizingPolicyInput { get; }
```

- *Type:* string

---

##### `AspectRatio`<sup>Required</sup> <a name="AspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatio"></a>

```csharp
public string AspectRatio { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.interval"></a>

```csharp
public string Interval { get; }
```

- *Type:* string

---

##### `MaxHeight`<sup>Required</sup> <a name="MaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeight"></a>

```csharp
public string MaxHeight { get; }
```

- *Type:* string

---

##### `MaxWidth`<sup>Required</sup> <a name="MaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidth"></a>

```csharp
public string MaxWidth { get; }
```

- *Type:* string

---

##### `PaddingPolicy`<sup>Required</sup> <a name="PaddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicy"></a>

```csharp
public string PaddingPolicy { get; }
```

- *Type:* string

---

##### `Resolution`<sup>Required</sup> <a name="Resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolution"></a>

```csharp
public string Resolution { get; }
```

- *Type:* string

---

##### `SizingPolicy`<sup>Required</sup> <a name="SizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicy"></a>

```csharp
public string SizingPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.internalValue"></a>

```csharp
public ElastictranscoderPresetThumbnails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

---


### ElastictranscoderPresetVideoOutputReference <a name="ElastictranscoderPresetVideoOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPresetVideoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetAspectRatio">ResetAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetBitRate">ResetBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetCodec">ResetCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetDisplayAspectRatio">ResetDisplayAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFixedGop">ResetFixedGop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFrameRate">ResetFrameRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetKeyframesMaxDist">ResetKeyframesMaxDist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxFrameRate">ResetMaxFrameRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxHeight">ResetMaxHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxWidth">ResetMaxWidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetPaddingPolicy">ResetPaddingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetResolution">ResetResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetSizingPolicy">ResetSizingPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAspectRatio` <a name="ResetAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetAspectRatio"></a>

```csharp
private void ResetAspectRatio()
```

##### `ResetBitRate` <a name="ResetBitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetBitRate"></a>

```csharp
private void ResetBitRate()
```

##### `ResetCodec` <a name="ResetCodec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetCodec"></a>

```csharp
private void ResetCodec()
```

##### `ResetDisplayAspectRatio` <a name="ResetDisplayAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetDisplayAspectRatio"></a>

```csharp
private void ResetDisplayAspectRatio()
```

##### `ResetFixedGop` <a name="ResetFixedGop" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFixedGop"></a>

```csharp
private void ResetFixedGop()
```

##### `ResetFrameRate` <a name="ResetFrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFrameRate"></a>

```csharp
private void ResetFrameRate()
```

##### `ResetKeyframesMaxDist` <a name="ResetKeyframesMaxDist" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetKeyframesMaxDist"></a>

```csharp
private void ResetKeyframesMaxDist()
```

##### `ResetMaxFrameRate` <a name="ResetMaxFrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxFrameRate"></a>

```csharp
private void ResetMaxFrameRate()
```

##### `ResetMaxHeight` <a name="ResetMaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxHeight"></a>

```csharp
private void ResetMaxHeight()
```

##### `ResetMaxWidth` <a name="ResetMaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxWidth"></a>

```csharp
private void ResetMaxWidth()
```

##### `ResetPaddingPolicy` <a name="ResetPaddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetPaddingPolicy"></a>

```csharp
private void ResetPaddingPolicy()
```

##### `ResetResolution` <a name="ResetResolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetResolution"></a>

```csharp
private void ResetResolution()
```

##### `ResetSizingPolicy` <a name="ResetSizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetSizingPolicy"></a>

```csharp
private void ResetSizingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatioInput">AspectRatioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRateInput">BitRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codecInput">CodecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatioInput">DisplayAspectRatioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGopInput">FixedGopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRateInput">FrameRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDistInput">KeyframesMaxDistInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRateInput">MaxFrameRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeightInput">MaxHeightInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidthInput">MaxWidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicyInput">PaddingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolutionInput">ResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicyInput">SizingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatio">AspectRatio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRate">BitRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codec">Codec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatio">DisplayAspectRatio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGop">FixedGop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRate">FrameRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDist">KeyframesMaxDist</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRate">MaxFrameRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeight">MaxHeight</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidth">MaxWidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicy">PaddingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolution">Resolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicy">SizingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AspectRatioInput`<sup>Optional</sup> <a name="AspectRatioInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatioInput"></a>

```csharp
public string AspectRatioInput { get; }
```

- *Type:* string

---

##### `BitRateInput`<sup>Optional</sup> <a name="BitRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRateInput"></a>

```csharp
public string BitRateInput { get; }
```

- *Type:* string

---

##### `CodecInput`<sup>Optional</sup> <a name="CodecInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codecInput"></a>

```csharp
public string CodecInput { get; }
```

- *Type:* string

---

##### `DisplayAspectRatioInput`<sup>Optional</sup> <a name="DisplayAspectRatioInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatioInput"></a>

```csharp
public string DisplayAspectRatioInput { get; }
```

- *Type:* string

---

##### `FixedGopInput`<sup>Optional</sup> <a name="FixedGopInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGopInput"></a>

```csharp
public string FixedGopInput { get; }
```

- *Type:* string

---

##### `FrameRateInput`<sup>Optional</sup> <a name="FrameRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRateInput"></a>

```csharp
public string FrameRateInput { get; }
```

- *Type:* string

---

##### `KeyframesMaxDistInput`<sup>Optional</sup> <a name="KeyframesMaxDistInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDistInput"></a>

```csharp
public string KeyframesMaxDistInput { get; }
```

- *Type:* string

---

##### `MaxFrameRateInput`<sup>Optional</sup> <a name="MaxFrameRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRateInput"></a>

```csharp
public string MaxFrameRateInput { get; }
```

- *Type:* string

---

##### `MaxHeightInput`<sup>Optional</sup> <a name="MaxHeightInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeightInput"></a>

```csharp
public string MaxHeightInput { get; }
```

- *Type:* string

---

##### `MaxWidthInput`<sup>Optional</sup> <a name="MaxWidthInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidthInput"></a>

```csharp
public string MaxWidthInput { get; }
```

- *Type:* string

---

##### `PaddingPolicyInput`<sup>Optional</sup> <a name="PaddingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicyInput"></a>

```csharp
public string PaddingPolicyInput { get; }
```

- *Type:* string

---

##### `ResolutionInput`<sup>Optional</sup> <a name="ResolutionInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolutionInput"></a>

```csharp
public string ResolutionInput { get; }
```

- *Type:* string

---

##### `SizingPolicyInput`<sup>Optional</sup> <a name="SizingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicyInput"></a>

```csharp
public string SizingPolicyInput { get; }
```

- *Type:* string

---

##### `AspectRatio`<sup>Required</sup> <a name="AspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatio"></a>

```csharp
public string AspectRatio { get; }
```

- *Type:* string

---

##### `BitRate`<sup>Required</sup> <a name="BitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRate"></a>

```csharp
public string BitRate { get; }
```

- *Type:* string

---

##### `Codec`<sup>Required</sup> <a name="Codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codec"></a>

```csharp
public string Codec { get; }
```

- *Type:* string

---

##### `DisplayAspectRatio`<sup>Required</sup> <a name="DisplayAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatio"></a>

```csharp
public string DisplayAspectRatio { get; }
```

- *Type:* string

---

##### `FixedGop`<sup>Required</sup> <a name="FixedGop" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGop"></a>

```csharp
public string FixedGop { get; }
```

- *Type:* string

---

##### `FrameRate`<sup>Required</sup> <a name="FrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRate"></a>

```csharp
public string FrameRate { get; }
```

- *Type:* string

---

##### `KeyframesMaxDist`<sup>Required</sup> <a name="KeyframesMaxDist" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDist"></a>

```csharp
public string KeyframesMaxDist { get; }
```

- *Type:* string

---

##### `MaxFrameRate`<sup>Required</sup> <a name="MaxFrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRate"></a>

```csharp
public string MaxFrameRate { get; }
```

- *Type:* string

---

##### `MaxHeight`<sup>Required</sup> <a name="MaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeight"></a>

```csharp
public string MaxHeight { get; }
```

- *Type:* string

---

##### `MaxWidth`<sup>Required</sup> <a name="MaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidth"></a>

```csharp
public string MaxWidth { get; }
```

- *Type:* string

---

##### `PaddingPolicy`<sup>Required</sup> <a name="PaddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicy"></a>

```csharp
public string PaddingPolicy { get; }
```

- *Type:* string

---

##### `Resolution`<sup>Required</sup> <a name="Resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolution"></a>

```csharp
public string Resolution { get; }
```

- *Type:* string

---

##### `SizingPolicy`<sup>Required</sup> <a name="SizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicy"></a>

```csharp
public string SizingPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.internalValue"></a>

```csharp
public ElastictranscoderPresetVideo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

---


### ElastictranscoderPresetVideoWatermarksList <a name="ElastictranscoderPresetVideoWatermarksList" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPresetVideoWatermarksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.get"></a>

```csharp
private ElastictranscoderPresetVideoWatermarksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastictranscoderPresetVideoWatermarksOutputReference <a name="ElastictranscoderPresetVideoWatermarksOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPresetVideoWatermarksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalAlign">ResetHorizontalAlign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalOffset">ResetHorizontalOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxHeight">ResetMaxHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxWidth">ResetMaxWidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetOpacity">ResetOpacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetSizingPolicy">ResetSizingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalAlign">ResetVerticalAlign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalOffset">ResetVerticalOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHorizontalAlign` <a name="ResetHorizontalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalAlign"></a>

```csharp
private void ResetHorizontalAlign()
```

##### `ResetHorizontalOffset` <a name="ResetHorizontalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalOffset"></a>

```csharp
private void ResetHorizontalOffset()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxHeight` <a name="ResetMaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxHeight"></a>

```csharp
private void ResetMaxHeight()
```

##### `ResetMaxWidth` <a name="ResetMaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxWidth"></a>

```csharp
private void ResetMaxWidth()
```

##### `ResetOpacity` <a name="ResetOpacity" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetOpacity"></a>

```csharp
private void ResetOpacity()
```

##### `ResetSizingPolicy` <a name="ResetSizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetSizingPolicy"></a>

```csharp
private void ResetSizingPolicy()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetVerticalAlign` <a name="ResetVerticalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalAlign"></a>

```csharp
private void ResetVerticalAlign()
```

##### `ResetVerticalOffset` <a name="ResetVerticalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalOffset"></a>

```csharp
private void ResetVerticalOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlignInput">HorizontalAlignInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffsetInput">HorizontalOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeightInput">MaxHeightInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidthInput">MaxWidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacityInput">OpacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicyInput">SizingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlignInput">VerticalAlignInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffsetInput">VerticalOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlign">HorizontalAlign</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffset">HorizontalOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeight">MaxHeight</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidth">MaxWidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacity">Opacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicy">SizingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlign">VerticalAlign</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffset">VerticalOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HorizontalAlignInput`<sup>Optional</sup> <a name="HorizontalAlignInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlignInput"></a>

```csharp
public string HorizontalAlignInput { get; }
```

- *Type:* string

---

##### `HorizontalOffsetInput`<sup>Optional</sup> <a name="HorizontalOffsetInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffsetInput"></a>

```csharp
public string HorizontalOffsetInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxHeightInput`<sup>Optional</sup> <a name="MaxHeightInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeightInput"></a>

```csharp
public string MaxHeightInput { get; }
```

- *Type:* string

---

##### `MaxWidthInput`<sup>Optional</sup> <a name="MaxWidthInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidthInput"></a>

```csharp
public string MaxWidthInput { get; }
```

- *Type:* string

---

##### `OpacityInput`<sup>Optional</sup> <a name="OpacityInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacityInput"></a>

```csharp
public string OpacityInput { get; }
```

- *Type:* string

---

##### `SizingPolicyInput`<sup>Optional</sup> <a name="SizingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicyInput"></a>

```csharp
public string SizingPolicyInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `VerticalAlignInput`<sup>Optional</sup> <a name="VerticalAlignInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlignInput"></a>

```csharp
public string VerticalAlignInput { get; }
```

- *Type:* string

---

##### `VerticalOffsetInput`<sup>Optional</sup> <a name="VerticalOffsetInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffsetInput"></a>

```csharp
public string VerticalOffsetInput { get; }
```

- *Type:* string

---

##### `HorizontalAlign`<sup>Required</sup> <a name="HorizontalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlign"></a>

```csharp
public string HorizontalAlign { get; }
```

- *Type:* string

---

##### `HorizontalOffset`<sup>Required</sup> <a name="HorizontalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffset"></a>

```csharp
public string HorizontalOffset { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxHeight`<sup>Required</sup> <a name="MaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeight"></a>

```csharp
public string MaxHeight { get; }
```

- *Type:* string

---

##### `MaxWidth`<sup>Required</sup> <a name="MaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidth"></a>

```csharp
public string MaxWidth { get; }
```

- *Type:* string

---

##### `Opacity`<sup>Required</sup> <a name="Opacity" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacity"></a>

```csharp
public string Opacity { get; }
```

- *Type:* string

---

##### `SizingPolicy`<sup>Required</sup> <a name="SizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicy"></a>

```csharp
public string SizingPolicy { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `VerticalAlign`<sup>Required</sup> <a name="VerticalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlign"></a>

```csharp
public string VerticalAlign { get; }
```

- *Type:* string

---

##### `VerticalOffset`<sup>Required</sup> <a name="VerticalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffset"></a>

```csharp
public string VerticalOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



