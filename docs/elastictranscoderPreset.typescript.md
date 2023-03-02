# `elastictranscoderPreset` Submodule <a name="`elastictranscoderPreset` Submodule" id="@cdktf/provider-aws.elastictranscoderPreset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastictranscoderPreset <a name="ElastictranscoderPreset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset aws_elastictranscoder_preset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

new elastictranscoderPreset.ElastictranscoderPreset(scope: Construct, id: string, config: ElastictranscoderPresetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig">ElastictranscoderPresetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig">ElastictranscoderPresetConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAudio` <a name="putAudio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio"></a>

```typescript
public putAudio(value: ElastictranscoderPresetAudio): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

---

##### `putAudioCodecOptions` <a name="putAudioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions"></a>

```typescript
public putAudioCodecOptions(value: ElastictranscoderPresetAudioCodecOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putAudioCodecOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

---

##### `putThumbnails` <a name="putThumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails"></a>

```typescript
public putThumbnails(value: ElastictranscoderPresetThumbnails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putThumbnails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

---

##### `putVideo` <a name="putVideo" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo"></a>

```typescript
public putVideo(value: ElastictranscoderPresetVideo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

---

##### `putVideoWatermarks` <a name="putVideoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideoWatermarks"></a>

```typescript
public putVideoWatermarks(value: IResolvable | ElastictranscoderPresetVideoWatermarks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.putVideoWatermarks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>[]

---

##### `resetAudio` <a name="resetAudio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudio"></a>

```typescript
public resetAudio(): void
```

##### `resetAudioCodecOptions` <a name="resetAudioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetAudioCodecOptions"></a>

```typescript
public resetAudioCodecOptions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetName"></a>

```typescript
public resetName(): void
```

##### `resetThumbnails` <a name="resetThumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetThumbnails"></a>

```typescript
public resetThumbnails(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVideo` <a name="resetVideo" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideo"></a>

```typescript
public resetVideo(): void
```

##### `resetVideoCodecOptions` <a name="resetVideoCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoCodecOptions"></a>

```typescript
public resetVideoCodecOptions(): void
```

##### `resetVideoWatermarks` <a name="resetVideoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.resetVideoWatermarks"></a>

```typescript
public resetVideoWatermarks(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isConstruct"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

elastictranscoderPreset.ElastictranscoderPreset.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformElement"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

elastictranscoderPreset.ElastictranscoderPreset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformResource"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

elastictranscoderPreset.ElastictranscoderPreset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audio">audio</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference">ElastictranscoderPresetAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptions">audioCodecOptions</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference">ElastictranscoderPresetAudioCodecOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnails">thumbnails</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference">ElastictranscoderPresetThumbnailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.video">video</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference">ElastictranscoderPresetVideoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarks">videoWatermarks</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList">ElastictranscoderPresetVideoWatermarksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptionsInput">audioCodecOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioInput">audioInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnailsInput">thumbnailsInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptionsInput">videoCodecOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoInput">videoInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarksInput">videoWatermarksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptions">videoCodecOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `audio`<sup>Required</sup> <a name="audio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audio"></a>

```typescript
public readonly audio: ElastictranscoderPresetAudioOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference">ElastictranscoderPresetAudioOutputReference</a>

---

##### `audioCodecOptions`<sup>Required</sup> <a name="audioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptions"></a>

```typescript
public readonly audioCodecOptions: ElastictranscoderPresetAudioCodecOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference">ElastictranscoderPresetAudioCodecOptionsOutputReference</a>

---

##### `thumbnails`<sup>Required</sup> <a name="thumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnails"></a>

```typescript
public readonly thumbnails: ElastictranscoderPresetThumbnailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference">ElastictranscoderPresetThumbnailsOutputReference</a>

---

##### `video`<sup>Required</sup> <a name="video" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.video"></a>

```typescript
public readonly video: ElastictranscoderPresetVideoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference">ElastictranscoderPresetVideoOutputReference</a>

---

##### `videoWatermarks`<sup>Required</sup> <a name="videoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarks"></a>

```typescript
public readonly videoWatermarks: ElastictranscoderPresetVideoWatermarksList;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList">ElastictranscoderPresetVideoWatermarksList</a>

---

##### `audioCodecOptionsInput`<sup>Optional</sup> <a name="audioCodecOptionsInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioCodecOptionsInput"></a>

```typescript
public readonly audioCodecOptionsInput: ElastictranscoderPresetAudioCodecOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

---

##### `audioInput`<sup>Optional</sup> <a name="audioInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.audioInput"></a>

```typescript
public readonly audioInput: ElastictranscoderPresetAudio;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `thumbnailsInput`<sup>Optional</sup> <a name="thumbnailsInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.thumbnailsInput"></a>

```typescript
public readonly thumbnailsInput: ElastictranscoderPresetThumbnails;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `videoCodecOptionsInput`<sup>Optional</sup> <a name="videoCodecOptionsInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptionsInput"></a>

```typescript
public readonly videoCodecOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `videoInput`<sup>Optional</sup> <a name="videoInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoInput"></a>

```typescript
public readonly videoInput: ElastictranscoderPresetVideo;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

---

##### `videoWatermarksInput`<sup>Optional</sup> <a name="videoWatermarksInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoWatermarksInput"></a>

```typescript
public readonly videoWatermarksInput: IResolvable | ElastictranscoderPresetVideoWatermarks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>[]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `videoCodecOptions`<sup>Required</sup> <a name="videoCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.videoCodecOptions"></a>

```typescript
public readonly videoCodecOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPreset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElastictranscoderPresetAudio <a name="ElastictranscoderPresetAudio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.Initializer"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

const elastictranscoderPresetAudio: elastictranscoderPreset.ElastictranscoderPresetAudio = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.audioPackingMode">audioPackingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.bitRate">bitRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.channels">channels</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#channels ElastictranscoderPreset#channels}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.codec">codec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.sampleRate">sampleRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sample_rate ElastictranscoderPreset#sample_rate}. |

---

##### `audioPackingMode`<sup>Optional</sup> <a name="audioPackingMode" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.audioPackingMode"></a>

```typescript
public readonly audioPackingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}.

---

##### `bitRate`<sup>Optional</sup> <a name="bitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.bitRate"></a>

```typescript
public readonly bitRate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}.

---

##### `channels`<sup>Optional</sup> <a name="channels" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.channels"></a>

```typescript
public readonly channels: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#channels ElastictranscoderPreset#channels}.

---

##### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.codec"></a>

```typescript
public readonly codec: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}.

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio.property.sampleRate"></a>

```typescript
public readonly sampleRate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sample_rate ElastictranscoderPreset#sample_rate}.

---

### ElastictranscoderPresetAudioCodecOptions <a name="ElastictranscoderPresetAudioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.Initializer"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

const elastictranscoderPresetAudioCodecOptions: elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitDepth">bitDepth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_depth ElastictranscoderPreset#bit_depth}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitOrder">bitOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_order ElastictranscoderPreset#bit_order}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.profile">profile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#profile ElastictranscoderPreset#profile}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.signed">signed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#signed ElastictranscoderPreset#signed}. |

---

##### `bitDepth`<sup>Optional</sup> <a name="bitDepth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitDepth"></a>

```typescript
public readonly bitDepth: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_depth ElastictranscoderPreset#bit_depth}.

---

##### `bitOrder`<sup>Optional</sup> <a name="bitOrder" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.bitOrder"></a>

```typescript
public readonly bitOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_order ElastictranscoderPreset#bit_order}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#profile ElastictranscoderPreset#profile}.

---

##### `signed`<sup>Optional</sup> <a name="signed" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions.property.signed"></a>

```typescript
public readonly signed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#signed ElastictranscoderPreset#signed}.

---

### ElastictranscoderPresetConfig <a name="ElastictranscoderPresetConfig" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.Initializer"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

const elastictranscoderPresetConfig: elastictranscoderPreset.ElastictranscoderPresetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.container">container</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#container ElastictranscoderPreset#container}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audio">audio</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | audio block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audioCodecOptions">audioCodecOptions</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | audio_codec_options block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#description ElastictranscoderPreset#description}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#name ElastictranscoderPreset#name}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.thumbnails">thumbnails</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | thumbnails block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#type ElastictranscoderPreset#type}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.video">video</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | video block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoCodecOptions">videoCodecOptions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoWatermarks">videoWatermarks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>[]</code> | video_watermarks block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#container ElastictranscoderPreset#container}.

---

##### `audio`<sup>Optional</sup> <a name="audio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audio"></a>

```typescript
public readonly audio: ElastictranscoderPresetAudio;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

audio block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio ElastictranscoderPreset#audio}

---

##### `audioCodecOptions`<sup>Optional</sup> <a name="audioCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.audioCodecOptions"></a>

```typescript
public readonly audioCodecOptions: ElastictranscoderPresetAudioCodecOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

audio_codec_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_codec_options ElastictranscoderPreset#audio_codec_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#description ElastictranscoderPreset#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#name ElastictranscoderPreset#name}.

---

##### `thumbnails`<sup>Optional</sup> <a name="thumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.thumbnails"></a>

```typescript
public readonly thumbnails: ElastictranscoderPresetThumbnails;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

thumbnails block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#thumbnails ElastictranscoderPreset#thumbnails}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#type ElastictranscoderPreset#type}.

---

##### `video`<sup>Optional</sup> <a name="video" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.video"></a>

```typescript
public readonly video: ElastictranscoderPresetVideo;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

video block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video ElastictranscoderPreset#video}

---

##### `videoCodecOptions`<sup>Optional</sup> <a name="videoCodecOptions" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoCodecOptions"></a>

```typescript
public readonly videoCodecOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}.

---

##### `videoWatermarks`<sup>Optional</sup> <a name="videoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetConfig.property.videoWatermarks"></a>

```typescript
public readonly videoWatermarks: IResolvable | ElastictranscoderPresetVideoWatermarks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>[]

video_watermarks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_watermarks ElastictranscoderPreset#video_watermarks}

---

### ElastictranscoderPresetThumbnails <a name="ElastictranscoderPresetThumbnails" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.Initializer"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

const elastictranscoderPresetThumbnails: elastictranscoderPreset.ElastictranscoderPresetThumbnails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.aspectRatio">aspectRatio</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#format ElastictranscoderPreset#format}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.interval">interval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#interval ElastictranscoderPreset#interval}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxHeight">maxHeight</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxWidth">maxWidth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.paddingPolicy">paddingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.resolution">resolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.sizingPolicy">sizingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}. |

---

##### `aspectRatio`<sup>Optional</sup> <a name="aspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.aspectRatio"></a>

```typescript
public readonly aspectRatio: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#format ElastictranscoderPreset#format}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#interval ElastictranscoderPreset#interval}.

---

##### `maxHeight`<sup>Optional</sup> <a name="maxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxHeight"></a>

```typescript
public readonly maxHeight: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

##### `maxWidth`<sup>Optional</sup> <a name="maxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.maxWidth"></a>

```typescript
public readonly maxWidth: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

##### `paddingPolicy`<sup>Optional</sup> <a name="paddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.paddingPolicy"></a>

```typescript
public readonly paddingPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}.

---

##### `resolution`<sup>Optional</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.resolution"></a>

```typescript
public readonly resolution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}.

---

##### `sizingPolicy`<sup>Optional</sup> <a name="sizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails.property.sizingPolicy"></a>

```typescript
public readonly sizingPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

### ElastictranscoderPresetVideo <a name="ElastictranscoderPresetVideo" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.Initializer"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

const elastictranscoderPresetVideo: elastictranscoderPreset.ElastictranscoderPresetVideo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.aspectRatio">aspectRatio</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.bitRate">bitRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.codec">codec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.displayAspectRatio">displayAspectRatio</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.fixedGop">fixedGop</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#fixed_gop ElastictranscoderPreset#fixed_gop}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.frameRate">frameRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#frame_rate ElastictranscoderPreset#frame_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.keyframesMaxDist">keyframesMaxDist</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxFrameRate">maxFrameRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_frame_rate ElastictranscoderPreset#max_frame_rate}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxHeight">maxHeight</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxWidth">maxWidth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.paddingPolicy">paddingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.resolution">resolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.sizingPolicy">sizingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}. |

---

##### `aspectRatio`<sup>Optional</sup> <a name="aspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.aspectRatio"></a>

```typescript
public readonly aspectRatio: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}.

---

##### `bitRate`<sup>Optional</sup> <a name="bitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.bitRate"></a>

```typescript
public readonly bitRate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}.

---

##### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.codec"></a>

```typescript
public readonly codec: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}.

---

##### `displayAspectRatio`<sup>Optional</sup> <a name="displayAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.displayAspectRatio"></a>

```typescript
public readonly displayAspectRatio: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}.

---

##### `fixedGop`<sup>Optional</sup> <a name="fixedGop" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.fixedGop"></a>

```typescript
public readonly fixedGop: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#fixed_gop ElastictranscoderPreset#fixed_gop}.

---

##### `frameRate`<sup>Optional</sup> <a name="frameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.frameRate"></a>

```typescript
public readonly frameRate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#frame_rate ElastictranscoderPreset#frame_rate}.

---

##### `keyframesMaxDist`<sup>Optional</sup> <a name="keyframesMaxDist" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.keyframesMaxDist"></a>

```typescript
public readonly keyframesMaxDist: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}.

---

##### `maxFrameRate`<sup>Optional</sup> <a name="maxFrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxFrameRate"></a>

```typescript
public readonly maxFrameRate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_frame_rate ElastictranscoderPreset#max_frame_rate}.

---

##### `maxHeight`<sup>Optional</sup> <a name="maxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxHeight"></a>

```typescript
public readonly maxHeight: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

##### `maxWidth`<sup>Optional</sup> <a name="maxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.maxWidth"></a>

```typescript
public readonly maxWidth: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

##### `paddingPolicy`<sup>Optional</sup> <a name="paddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.paddingPolicy"></a>

```typescript
public readonly paddingPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}.

---

##### `resolution`<sup>Optional</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.resolution"></a>

```typescript
public readonly resolution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}.

---

##### `sizingPolicy`<sup>Optional</sup> <a name="sizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo.property.sizingPolicy"></a>

```typescript
public readonly sizingPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

### ElastictranscoderPresetVideoWatermarks <a name="ElastictranscoderPresetVideoWatermarks" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.Initializer"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

const elastictranscoderPresetVideoWatermarks: elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalAlign">horizontalAlign</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_align ElastictranscoderPreset#horizontal_align}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalOffset">horizontalOffset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_offset ElastictranscoderPreset#horizontal_offset}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxHeight">maxHeight</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxWidth">maxWidth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.opacity">opacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#opacity ElastictranscoderPreset#opacity}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.sizingPolicy">sizingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#target ElastictranscoderPreset#target}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalAlign">verticalAlign</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_align ElastictranscoderPreset#vertical_align}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalOffset">verticalOffset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_offset ElastictranscoderPreset#vertical_offset}. |

---

##### `horizontalAlign`<sup>Optional</sup> <a name="horizontalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalAlign"></a>

```typescript
public readonly horizontalAlign: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_align ElastictranscoderPreset#horizontal_align}.

---

##### `horizontalOffset`<sup>Optional</sup> <a name="horizontalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.horizontalOffset"></a>

```typescript
public readonly horizontalOffset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_offset ElastictranscoderPreset#horizontal_offset}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxHeight`<sup>Optional</sup> <a name="maxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxHeight"></a>

```typescript
public readonly maxHeight: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}.

---

##### `maxWidth`<sup>Optional</sup> <a name="maxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.maxWidth"></a>

```typescript
public readonly maxWidth: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}.

---

##### `opacity`<sup>Optional</sup> <a name="opacity" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.opacity"></a>

```typescript
public readonly opacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#opacity ElastictranscoderPreset#opacity}.

---

##### `sizingPolicy`<sup>Optional</sup> <a name="sizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.sizingPolicy"></a>

```typescript
public readonly sizingPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#target ElastictranscoderPreset#target}.

---

##### `verticalAlign`<sup>Optional</sup> <a name="verticalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalAlign"></a>

```typescript
public readonly verticalAlign: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_align ElastictranscoderPreset#vertical_align}.

---

##### `verticalOffset`<sup>Optional</sup> <a name="verticalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks.property.verticalOffset"></a>

```typescript
public readonly verticalOffset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_offset ElastictranscoderPreset#vertical_offset}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastictranscoderPresetAudioCodecOptionsOutputReference <a name="ElastictranscoderPresetAudioCodecOptionsOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

new elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBitDepth` <a name="resetBitDepth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitDepth"></a>

```typescript
public resetBitDepth(): void
```

##### `resetBitOrder` <a name="resetBitOrder" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetBitOrder"></a>

```typescript
public resetBitOrder(): void
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetSigned` <a name="resetSigned" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.resetSigned"></a>

```typescript
public resetSigned(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepthInput">bitDepthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrderInput">bitOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signedInput">signedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepth">bitDepth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrder">bitOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signed">signed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bitDepthInput`<sup>Optional</sup> <a name="bitDepthInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepthInput"></a>

```typescript
public readonly bitDepthInput: string;
```

- *Type:* string

---

##### `bitOrderInput`<sup>Optional</sup> <a name="bitOrderInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrderInput"></a>

```typescript
public readonly bitOrderInput: string;
```

- *Type:* string

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `signedInput`<sup>Optional</sup> <a name="signedInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signedInput"></a>

```typescript
public readonly signedInput: string;
```

- *Type:* string

---

##### `bitDepth`<sup>Required</sup> <a name="bitDepth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitDepth"></a>

```typescript
public readonly bitDepth: string;
```

- *Type:* string

---

##### `bitOrder`<sup>Required</sup> <a name="bitOrder" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.bitOrder"></a>

```typescript
public readonly bitOrder: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `signed`<sup>Required</sup> <a name="signed" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.signed"></a>

```typescript
public readonly signed: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastictranscoderPresetAudioCodecOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioCodecOptions">ElastictranscoderPresetAudioCodecOptions</a>

---


### ElastictranscoderPresetAudioOutputReference <a name="ElastictranscoderPresetAudioOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

new elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudioPackingMode` <a name="resetAudioPackingMode" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetAudioPackingMode"></a>

```typescript
public resetAudioPackingMode(): void
```

##### `resetBitRate` <a name="resetBitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetBitRate"></a>

```typescript
public resetBitRate(): void
```

##### `resetChannels` <a name="resetChannels" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetChannels"></a>

```typescript
public resetChannels(): void
```

##### `resetCodec` <a name="resetCodec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetCodec"></a>

```typescript
public resetCodec(): void
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.resetSampleRate"></a>

```typescript
public resetSampleRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingModeInput">audioPackingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRateInput">bitRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channelsInput">channelsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codecInput">codecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingMode">audioPackingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRate">bitRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channels">channels</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codec">codec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRate">sampleRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioPackingModeInput`<sup>Optional</sup> <a name="audioPackingModeInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingModeInput"></a>

```typescript
public readonly audioPackingModeInput: string;
```

- *Type:* string

---

##### `bitRateInput`<sup>Optional</sup> <a name="bitRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRateInput"></a>

```typescript
public readonly bitRateInput: string;
```

- *Type:* string

---

##### `channelsInput`<sup>Optional</sup> <a name="channelsInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channelsInput"></a>

```typescript
public readonly channelsInput: string;
```

- *Type:* string

---

##### `codecInput`<sup>Optional</sup> <a name="codecInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codecInput"></a>

```typescript
public readonly codecInput: string;
```

- *Type:* string

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRateInput"></a>

```typescript
public readonly sampleRateInput: string;
```

- *Type:* string

---

##### `audioPackingMode`<sup>Required</sup> <a name="audioPackingMode" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.audioPackingMode"></a>

```typescript
public readonly audioPackingMode: string;
```

- *Type:* string

---

##### `bitRate`<sup>Required</sup> <a name="bitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.bitRate"></a>

```typescript
public readonly bitRate: string;
```

- *Type:* string

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.channels"></a>

```typescript
public readonly channels: string;
```

- *Type:* string

---

##### `codec`<sup>Required</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.codec"></a>

```typescript
public readonly codec: string;
```

- *Type:* string

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.sampleRate"></a>

```typescript
public readonly sampleRate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudioOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastictranscoderPresetAudio;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetAudio">ElastictranscoderPresetAudio</a>

---


### ElastictranscoderPresetThumbnailsOutputReference <a name="ElastictranscoderPresetThumbnailsOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

new elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAspectRatio` <a name="resetAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetAspectRatio"></a>

```typescript
public resetAspectRatio(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetMaxHeight` <a name="resetMaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxHeight"></a>

```typescript
public resetMaxHeight(): void
```

##### `resetMaxWidth` <a name="resetMaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetMaxWidth"></a>

```typescript
public resetMaxWidth(): void
```

##### `resetPaddingPolicy` <a name="resetPaddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetPaddingPolicy"></a>

```typescript
public resetPaddingPolicy(): void
```

##### `resetResolution` <a name="resetResolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetResolution"></a>

```typescript
public resetResolution(): void
```

##### `resetSizingPolicy` <a name="resetSizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.resetSizingPolicy"></a>

```typescript
public resetSizingPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatioInput">aspectRatioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeightInput">maxHeightInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidthInput">maxWidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicyInput">paddingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolutionInput">resolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicyInput">sizingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatio">aspectRatio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeight">maxHeight</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidth">maxWidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicy">paddingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolution">resolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicy">sizingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aspectRatioInput`<sup>Optional</sup> <a name="aspectRatioInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatioInput"></a>

```typescript
public readonly aspectRatioInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `maxHeightInput`<sup>Optional</sup> <a name="maxHeightInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeightInput"></a>

```typescript
public readonly maxHeightInput: string;
```

- *Type:* string

---

##### `maxWidthInput`<sup>Optional</sup> <a name="maxWidthInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidthInput"></a>

```typescript
public readonly maxWidthInput: string;
```

- *Type:* string

---

##### `paddingPolicyInput`<sup>Optional</sup> <a name="paddingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicyInput"></a>

```typescript
public readonly paddingPolicyInput: string;
```

- *Type:* string

---

##### `resolutionInput`<sup>Optional</sup> <a name="resolutionInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolutionInput"></a>

```typescript
public readonly resolutionInput: string;
```

- *Type:* string

---

##### `sizingPolicyInput`<sup>Optional</sup> <a name="sizingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicyInput"></a>

```typescript
public readonly sizingPolicyInput: string;
```

- *Type:* string

---

##### `aspectRatio`<sup>Required</sup> <a name="aspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.aspectRatio"></a>

```typescript
public readonly aspectRatio: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `maxHeight`<sup>Required</sup> <a name="maxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxHeight"></a>

```typescript
public readonly maxHeight: string;
```

- *Type:* string

---

##### `maxWidth`<sup>Required</sup> <a name="maxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.maxWidth"></a>

```typescript
public readonly maxWidth: string;
```

- *Type:* string

---

##### `paddingPolicy`<sup>Required</sup> <a name="paddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.paddingPolicy"></a>

```typescript
public readonly paddingPolicy: string;
```

- *Type:* string

---

##### `resolution`<sup>Required</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.resolution"></a>

```typescript
public readonly resolution: string;
```

- *Type:* string

---

##### `sizingPolicy`<sup>Required</sup> <a name="sizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.sizingPolicy"></a>

```typescript
public readonly sizingPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastictranscoderPresetThumbnails;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetThumbnails">ElastictranscoderPresetThumbnails</a>

---


### ElastictranscoderPresetVideoOutputReference <a name="ElastictranscoderPresetVideoOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

new elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAspectRatio` <a name="resetAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetAspectRatio"></a>

```typescript
public resetAspectRatio(): void
```

##### `resetBitRate` <a name="resetBitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetBitRate"></a>

```typescript
public resetBitRate(): void
```

##### `resetCodec` <a name="resetCodec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetCodec"></a>

```typescript
public resetCodec(): void
```

##### `resetDisplayAspectRatio` <a name="resetDisplayAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetDisplayAspectRatio"></a>

```typescript
public resetDisplayAspectRatio(): void
```

##### `resetFixedGop` <a name="resetFixedGop" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFixedGop"></a>

```typescript
public resetFixedGop(): void
```

##### `resetFrameRate` <a name="resetFrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetFrameRate"></a>

```typescript
public resetFrameRate(): void
```

##### `resetKeyframesMaxDist` <a name="resetKeyframesMaxDist" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetKeyframesMaxDist"></a>

```typescript
public resetKeyframesMaxDist(): void
```

##### `resetMaxFrameRate` <a name="resetMaxFrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxFrameRate"></a>

```typescript
public resetMaxFrameRate(): void
```

##### `resetMaxHeight` <a name="resetMaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxHeight"></a>

```typescript
public resetMaxHeight(): void
```

##### `resetMaxWidth` <a name="resetMaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetMaxWidth"></a>

```typescript
public resetMaxWidth(): void
```

##### `resetPaddingPolicy` <a name="resetPaddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetPaddingPolicy"></a>

```typescript
public resetPaddingPolicy(): void
```

##### `resetResolution` <a name="resetResolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetResolution"></a>

```typescript
public resetResolution(): void
```

##### `resetSizingPolicy` <a name="resetSizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.resetSizingPolicy"></a>

```typescript
public resetSizingPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatioInput">aspectRatioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRateInput">bitRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codecInput">codecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatioInput">displayAspectRatioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGopInput">fixedGopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRateInput">frameRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDistInput">keyframesMaxDistInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRateInput">maxFrameRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeightInput">maxHeightInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidthInput">maxWidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicyInput">paddingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolutionInput">resolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicyInput">sizingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatio">aspectRatio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRate">bitRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codec">codec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatio">displayAspectRatio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGop">fixedGop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRate">frameRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDist">keyframesMaxDist</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRate">maxFrameRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeight">maxHeight</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidth">maxWidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicy">paddingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolution">resolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicy">sizingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aspectRatioInput`<sup>Optional</sup> <a name="aspectRatioInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatioInput"></a>

```typescript
public readonly aspectRatioInput: string;
```

- *Type:* string

---

##### `bitRateInput`<sup>Optional</sup> <a name="bitRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRateInput"></a>

```typescript
public readonly bitRateInput: string;
```

- *Type:* string

---

##### `codecInput`<sup>Optional</sup> <a name="codecInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codecInput"></a>

```typescript
public readonly codecInput: string;
```

- *Type:* string

---

##### `displayAspectRatioInput`<sup>Optional</sup> <a name="displayAspectRatioInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatioInput"></a>

```typescript
public readonly displayAspectRatioInput: string;
```

- *Type:* string

---

##### `fixedGopInput`<sup>Optional</sup> <a name="fixedGopInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGopInput"></a>

```typescript
public readonly fixedGopInput: string;
```

- *Type:* string

---

##### `frameRateInput`<sup>Optional</sup> <a name="frameRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRateInput"></a>

```typescript
public readonly frameRateInput: string;
```

- *Type:* string

---

##### `keyframesMaxDistInput`<sup>Optional</sup> <a name="keyframesMaxDistInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDistInput"></a>

```typescript
public readonly keyframesMaxDistInput: string;
```

- *Type:* string

---

##### `maxFrameRateInput`<sup>Optional</sup> <a name="maxFrameRateInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRateInput"></a>

```typescript
public readonly maxFrameRateInput: string;
```

- *Type:* string

---

##### `maxHeightInput`<sup>Optional</sup> <a name="maxHeightInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeightInput"></a>

```typescript
public readonly maxHeightInput: string;
```

- *Type:* string

---

##### `maxWidthInput`<sup>Optional</sup> <a name="maxWidthInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidthInput"></a>

```typescript
public readonly maxWidthInput: string;
```

- *Type:* string

---

##### `paddingPolicyInput`<sup>Optional</sup> <a name="paddingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicyInput"></a>

```typescript
public readonly paddingPolicyInput: string;
```

- *Type:* string

---

##### `resolutionInput`<sup>Optional</sup> <a name="resolutionInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolutionInput"></a>

```typescript
public readonly resolutionInput: string;
```

- *Type:* string

---

##### `sizingPolicyInput`<sup>Optional</sup> <a name="sizingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicyInput"></a>

```typescript
public readonly sizingPolicyInput: string;
```

- *Type:* string

---

##### `aspectRatio`<sup>Required</sup> <a name="aspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.aspectRatio"></a>

```typescript
public readonly aspectRatio: string;
```

- *Type:* string

---

##### `bitRate`<sup>Required</sup> <a name="bitRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.bitRate"></a>

```typescript
public readonly bitRate: string;
```

- *Type:* string

---

##### `codec`<sup>Required</sup> <a name="codec" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.codec"></a>

```typescript
public readonly codec: string;
```

- *Type:* string

---

##### `displayAspectRatio`<sup>Required</sup> <a name="displayAspectRatio" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.displayAspectRatio"></a>

```typescript
public readonly displayAspectRatio: string;
```

- *Type:* string

---

##### `fixedGop`<sup>Required</sup> <a name="fixedGop" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.fixedGop"></a>

```typescript
public readonly fixedGop: string;
```

- *Type:* string

---

##### `frameRate`<sup>Required</sup> <a name="frameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.frameRate"></a>

```typescript
public readonly frameRate: string;
```

- *Type:* string

---

##### `keyframesMaxDist`<sup>Required</sup> <a name="keyframesMaxDist" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.keyframesMaxDist"></a>

```typescript
public readonly keyframesMaxDist: string;
```

- *Type:* string

---

##### `maxFrameRate`<sup>Required</sup> <a name="maxFrameRate" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxFrameRate"></a>

```typescript
public readonly maxFrameRate: string;
```

- *Type:* string

---

##### `maxHeight`<sup>Required</sup> <a name="maxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxHeight"></a>

```typescript
public readonly maxHeight: string;
```

- *Type:* string

---

##### `maxWidth`<sup>Required</sup> <a name="maxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.maxWidth"></a>

```typescript
public readonly maxWidth: string;
```

- *Type:* string

---

##### `paddingPolicy`<sup>Required</sup> <a name="paddingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.paddingPolicy"></a>

```typescript
public readonly paddingPolicy: string;
```

- *Type:* string

---

##### `resolution`<sup>Required</sup> <a name="resolution" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.resolution"></a>

```typescript
public readonly resolution: string;
```

- *Type:* string

---

##### `sizingPolicy`<sup>Required</sup> <a name="sizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.sizingPolicy"></a>

```typescript
public readonly sizingPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastictranscoderPresetVideo;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideo">ElastictranscoderPresetVideo</a>

---


### ElastictranscoderPresetVideoWatermarksList <a name="ElastictranscoderPresetVideoWatermarksList" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

new elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.get"></a>

```typescript
public get(index: number): ElastictranscoderPresetVideoWatermarksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastictranscoderPresetVideoWatermarks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a>[]

---


### ElastictranscoderPresetVideoWatermarksOutputReference <a name="ElastictranscoderPresetVideoWatermarksOutputReference" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer"></a>

```typescript
import { elastictranscoderPreset } from '@cdktf/provider-aws'

new elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHorizontalAlign` <a name="resetHorizontalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalAlign"></a>

```typescript
public resetHorizontalAlign(): void
```

##### `resetHorizontalOffset` <a name="resetHorizontalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetHorizontalOffset"></a>

```typescript
public resetHorizontalOffset(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxHeight` <a name="resetMaxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxHeight"></a>

```typescript
public resetMaxHeight(): void
```

##### `resetMaxWidth` <a name="resetMaxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetMaxWidth"></a>

```typescript
public resetMaxWidth(): void
```

##### `resetOpacity` <a name="resetOpacity" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetOpacity"></a>

```typescript
public resetOpacity(): void
```

##### `resetSizingPolicy` <a name="resetSizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetSizingPolicy"></a>

```typescript
public resetSizingPolicy(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetVerticalAlign` <a name="resetVerticalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalAlign"></a>

```typescript
public resetVerticalAlign(): void
```

##### `resetVerticalOffset` <a name="resetVerticalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.resetVerticalOffset"></a>

```typescript
public resetVerticalOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlignInput">horizontalAlignInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffsetInput">horizontalOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeightInput">maxHeightInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidthInput">maxWidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacityInput">opacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicyInput">sizingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlignInput">verticalAlignInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffsetInput">verticalOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlign">horizontalAlign</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffset">horizontalOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeight">maxHeight</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidth">maxWidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacity">opacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicy">sizingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlign">verticalAlign</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffset">verticalOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `horizontalAlignInput`<sup>Optional</sup> <a name="horizontalAlignInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlignInput"></a>

```typescript
public readonly horizontalAlignInput: string;
```

- *Type:* string

---

##### `horizontalOffsetInput`<sup>Optional</sup> <a name="horizontalOffsetInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffsetInput"></a>

```typescript
public readonly horizontalOffsetInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxHeightInput`<sup>Optional</sup> <a name="maxHeightInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeightInput"></a>

```typescript
public readonly maxHeightInput: string;
```

- *Type:* string

---

##### `maxWidthInput`<sup>Optional</sup> <a name="maxWidthInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidthInput"></a>

```typescript
public readonly maxWidthInput: string;
```

- *Type:* string

---

##### `opacityInput`<sup>Optional</sup> <a name="opacityInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacityInput"></a>

```typescript
public readonly opacityInput: string;
```

- *Type:* string

---

##### `sizingPolicyInput`<sup>Optional</sup> <a name="sizingPolicyInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicyInput"></a>

```typescript
public readonly sizingPolicyInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `verticalAlignInput`<sup>Optional</sup> <a name="verticalAlignInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlignInput"></a>

```typescript
public readonly verticalAlignInput: string;
```

- *Type:* string

---

##### `verticalOffsetInput`<sup>Optional</sup> <a name="verticalOffsetInput" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffsetInput"></a>

```typescript
public readonly verticalOffsetInput: string;
```

- *Type:* string

---

##### `horizontalAlign`<sup>Required</sup> <a name="horizontalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalAlign"></a>

```typescript
public readonly horizontalAlign: string;
```

- *Type:* string

---

##### `horizontalOffset`<sup>Required</sup> <a name="horizontalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.horizontalOffset"></a>

```typescript
public readonly horizontalOffset: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxHeight`<sup>Required</sup> <a name="maxHeight" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxHeight"></a>

```typescript
public readonly maxHeight: string;
```

- *Type:* string

---

##### `maxWidth`<sup>Required</sup> <a name="maxWidth" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.maxWidth"></a>

```typescript
public readonly maxWidth: string;
```

- *Type:* string

---

##### `opacity`<sup>Required</sup> <a name="opacity" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.opacity"></a>

```typescript
public readonly opacity: string;
```

- *Type:* string

---

##### `sizingPolicy`<sup>Required</sup> <a name="sizingPolicy" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.sizingPolicy"></a>

```typescript
public readonly sizingPolicy: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `verticalAlign`<sup>Required</sup> <a name="verticalAlign" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalAlign"></a>

```typescript
public readonly verticalAlign: string;
```

- *Type:* string

---

##### `verticalOffset`<sup>Required</sup> <a name="verticalOffset" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.verticalOffset"></a>

```typescript
public readonly verticalOffset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastictranscoderPresetVideoWatermarks | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPreset.ElastictranscoderPresetVideoWatermarks">ElastictranscoderPresetVideoWatermarks</a> | cdktf.IResolvable

---



