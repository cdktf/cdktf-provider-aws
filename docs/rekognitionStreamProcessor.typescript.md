# `rekognitionStreamProcessor` Submodule <a name="`rekognitionStreamProcessor` Submodule" id="@cdktf/provider-aws.rekognitionStreamProcessor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RekognitionStreamProcessor <a name="RekognitionStreamProcessor" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor aws_rekognition_stream_processor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessor(scope: Construct, id: string, config: RekognitionStreamProcessorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig">RekognitionStreamProcessorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig">RekognitionStreamProcessorConfig</a>

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
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetRegionsOfInterest">resetRegionsOfInterest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSharingPreference` <a name="putDataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putDataSharingPreference"></a>

```typescript
public putDataSharingPreference(value: IResolvable | RekognitionStreamProcessorDataSharingPreference[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putDataSharingPreference.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>[]

---

##### `putInput` <a name="putInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putInput"></a>

```typescript
public putInput(value: IResolvable | RekognitionStreamProcessorInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putInput.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>[]

---

##### `putNotificationChannel` <a name="putNotificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putNotificationChannel"></a>

```typescript
public putNotificationChannel(value: IResolvable | RekognitionStreamProcessorNotificationChannel[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putNotificationChannel.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>[]

---

##### `putOutput` <a name="putOutput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putOutput"></a>

```typescript
public putOutput(value: IResolvable | RekognitionStreamProcessorOutput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putOutput.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>[]

---

##### `putRegionsOfInterest` <a name="putRegionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putRegionsOfInterest"></a>

```typescript
public putRegionsOfInterest(value: IResolvable | RekognitionStreamProcessorRegionsOfInterest[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putRegionsOfInterest.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>[]

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putSettings"></a>

```typescript
public putSettings(value: IResolvable | RekognitionStreamProcessorSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putTimeouts"></a>

```typescript
public putTimeouts(value: RekognitionStreamProcessorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>

---

##### `resetDataSharingPreference` <a name="resetDataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetDataSharingPreference"></a>

```typescript
public resetDataSharingPreference(): void
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetNotificationChannel` <a name="resetNotificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetNotificationChannel"></a>

```typescript
public resetNotificationChannel(): void
```

##### `resetOutput` <a name="resetOutput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOutput"></a>

```typescript
public resetOutput(): void
```

##### `resetRegionsOfInterest` <a name="resetRegionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetRegionsOfInterest"></a>

```typescript
public resetRegionsOfInterest(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
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

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

rekognitionStreamProcessor.RekognitionStreamProcessor.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformElement"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformResource"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RekognitionStreamProcessor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RekognitionStreamProcessor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RekognitionStreamProcessor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RekognitionStreamProcessor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreference">dataSharingPreference</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList">RekognitionStreamProcessorDataSharingPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.input">input</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList">RekognitionStreamProcessorInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannel">notificationChannel</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList">RekognitionStreamProcessorNotificationChannelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.output">output</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList">RekognitionStreamProcessorOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterest">regionsOfInterest</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList">RekognitionStreamProcessorRegionsOfInterestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList">RekognitionStreamProcessorSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.streamProcessorArn">streamProcessorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference">RekognitionStreamProcessorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreferenceInput">dataSharingPreferenceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.inputInput">inputInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannelInput">notificationChannelInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.outputInput">outputInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterestInput">regionsOfInterestInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settingsInput">settingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSharingPreference`<sup>Required</sup> <a name="dataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreference"></a>

```typescript
public readonly dataSharingPreference: RekognitionStreamProcessorDataSharingPreferenceList;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList">RekognitionStreamProcessorDataSharingPreferenceList</a>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.input"></a>

```typescript
public readonly input: RekognitionStreamProcessorInputList;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList">RekognitionStreamProcessorInputList</a>

---

##### `notificationChannel`<sup>Required</sup> <a name="notificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannel"></a>

```typescript
public readonly notificationChannel: RekognitionStreamProcessorNotificationChannelList;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList">RekognitionStreamProcessorNotificationChannelList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.output"></a>

```typescript
public readonly output: RekognitionStreamProcessorOutputList;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList">RekognitionStreamProcessorOutputList</a>

---

##### `regionsOfInterest`<sup>Required</sup> <a name="regionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterest"></a>

```typescript
public readonly regionsOfInterest: RekognitionStreamProcessorRegionsOfInterestList;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList">RekognitionStreamProcessorRegionsOfInterestList</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settings"></a>

```typescript
public readonly settings: RekognitionStreamProcessorSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList">RekognitionStreamProcessorSettingsList</a>

---

##### `streamProcessorArn`<sup>Required</sup> <a name="streamProcessorArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.streamProcessorArn"></a>

```typescript
public readonly streamProcessorArn: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeouts"></a>

```typescript
public readonly timeouts: RekognitionStreamProcessorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference">RekognitionStreamProcessorTimeoutsOutputReference</a>

---

##### `dataSharingPreferenceInput`<sup>Optional</sup> <a name="dataSharingPreferenceInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreferenceInput"></a>

```typescript
public readonly dataSharingPreferenceInput: IResolvable | RekognitionStreamProcessorDataSharingPreference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>[]

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.inputInput"></a>

```typescript
public readonly inputInput: IResolvable | RekognitionStreamProcessorInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>[]

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationChannelInput`<sup>Optional</sup> <a name="notificationChannelInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannelInput"></a>

```typescript
public readonly notificationChannelInput: IResolvable | RekognitionStreamProcessorNotificationChannel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>[]

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.outputInput"></a>

```typescript
public readonly outputInput: IResolvable | RekognitionStreamProcessorOutput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>[]

---

##### `regionsOfInterestInput`<sup>Optional</sup> <a name="regionsOfInterestInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterestInput"></a>

```typescript
public readonly regionsOfInterestInput: IResolvable | RekognitionStreamProcessorRegionsOfInterest[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | RekognitionStreamProcessorSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RekognitionStreamProcessorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RekognitionStreamProcessorConfig <a name="RekognitionStreamProcessorConfig" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorConfig: rekognitionStreamProcessor.RekognitionStreamProcessorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.name">name</a></code> | <code>string</code> | An identifier you assign to the stream processor. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dataSharingPreference">dataSharingPreference</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>[]</code> | data_sharing_preference block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.input">input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>[]</code> | input block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The identifier for your AWS Key Management Service key (AWS KMS key). |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.notificationChannel">notificationChannel</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>[]</code> | notification_channel block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.output">output</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>[]</code> | output block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.regionsOfInterest">regionsOfInterest</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>[]</code> | regions_of_interest block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.settings">settings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>[]</code> | settings block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

An identifier you assign to the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#name RekognitionStreamProcessor#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#role_arn RekognitionStreamProcessor#role_arn}

---

##### `dataSharingPreference`<sup>Optional</sup> <a name="dataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dataSharingPreference"></a>

```typescript
public readonly dataSharingPreference: IResolvable | RekognitionStreamProcessorDataSharingPreference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>[]

data_sharing_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#data_sharing_preference RekognitionStreamProcessor#data_sharing_preference}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.input"></a>

```typescript
public readonly input: IResolvable | RekognitionStreamProcessorInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#input RekognitionStreamProcessor#input}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The identifier for your AWS Key Management Service key (AWS KMS key).

You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#kms_key_id RekognitionStreamProcessor#kms_key_id}

---

##### `notificationChannel`<sup>Optional</sup> <a name="notificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.notificationChannel"></a>

```typescript
public readonly notificationChannel: IResolvable | RekognitionStreamProcessorNotificationChannel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>[]

notification_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#notification_channel RekognitionStreamProcessor#notification_channel}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.output"></a>

```typescript
public readonly output: IResolvable | RekognitionStreamProcessorOutput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>[]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#output RekognitionStreamProcessor#output}

---

##### `regionsOfInterest`<sup>Optional</sup> <a name="regionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.regionsOfInterest"></a>

```typescript
public readonly regionsOfInterest: IResolvable | RekognitionStreamProcessorRegionsOfInterest[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>[]

regions_of_interest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#regions_of_interest RekognitionStreamProcessor#regions_of_interest}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.settings"></a>

```typescript
public readonly settings: IResolvable | RekognitionStreamProcessorSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>[]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#settings RekognitionStreamProcessor#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RekognitionStreamProcessorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#timeouts RekognitionStreamProcessor#timeouts}

---

### RekognitionStreamProcessorDataSharingPreference <a name="RekognitionStreamProcessorDataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorDataSharingPreference: rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference.property.optIn">optIn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do you want to share data with Rekognition to improve model performance. |

---

##### `optIn`<sup>Required</sup> <a name="optIn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference.property.optIn"></a>

```typescript
public readonly optIn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do you want to share data with Rekognition to improve model performance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#opt_in RekognitionStreamProcessor#opt_in}

---

### RekognitionStreamProcessorInput <a name="RekognitionStreamProcessorInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorInput: rekognitionStreamProcessor.RekognitionStreamProcessorInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput.property.kinesisVideoStream">kinesisVideoStream</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>[]</code> | kinesis_video_stream block. |

---

##### `kinesisVideoStream`<sup>Optional</sup> <a name="kinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput.property.kinesisVideoStream"></a>

```typescript
public readonly kinesisVideoStream: IResolvable | RekognitionStreamProcessorInputKinesisVideoStream[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>[]

kinesis_video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#kinesis_video_stream RekognitionStreamProcessor#kinesis_video_stream}

---

### RekognitionStreamProcessorInputKinesisVideoStream <a name="RekognitionStreamProcessorInputKinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorInputKinesisVideoStream: rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream.property.arn">arn</a></code> | <code>string</code> | ARN of the Kinesis video stream stream that streams the source video. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

ARN of the Kinesis video stream stream that streams the source video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#arn RekognitionStreamProcessor#arn}

---

### RekognitionStreamProcessorNotificationChannel <a name="RekognitionStreamProcessorNotificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorNotificationChannel: rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status. |

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#sns_topic_arn RekognitionStreamProcessor#sns_topic_arn}

---

### RekognitionStreamProcessorOutput <a name="RekognitionStreamProcessorOutput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorOutput: rekognitionStreamProcessor.RekognitionStreamProcessorOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.kinesisDataStream">kinesisDataStream</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>[]</code> | kinesis_data_stream block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.s3Destination">s3Destination</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>[]</code> | s3_destination block. |

---

##### `kinesisDataStream`<sup>Optional</sup> <a name="kinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.kinesisDataStream"></a>

```typescript
public readonly kinesisDataStream: IResolvable | RekognitionStreamProcessorOutputKinesisDataStream[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>[]

kinesis_data_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#kinesis_data_stream RekognitionStreamProcessor#kinesis_data_stream}

---

##### `s3Destination`<sup>Optional</sup> <a name="s3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.s3Destination"></a>

```typescript
public readonly s3Destination: IResolvable | RekognitionStreamProcessorOutputS3Destination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>[]

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#s3_destination RekognitionStreamProcessor#s3_destination}

---

### RekognitionStreamProcessorOutputKinesisDataStream <a name="RekognitionStreamProcessorOutputKinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorOutputKinesisDataStream: rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream.property.arn">arn</a></code> | <code>string</code> | ARN of the output Amazon Kinesis Data Streams stream. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

ARN of the output Amazon Kinesis Data Streams stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#arn RekognitionStreamProcessor#arn}

---

### RekognitionStreamProcessorOutputS3Destination <a name="RekognitionStreamProcessorOutputS3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorOutputS3Destination: rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.bucket">bucket</a></code> | <code>string</code> | The name of the Amazon S3 bucket you want to associate with the streaming video project. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | The prefix value of the location within the bucket that you want the information to be published to. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the Amazon S3 bucket you want to associate with the streaming video project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#bucket RekognitionStreamProcessor#bucket}

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

The prefix value of the location within the bucket that you want the information to be published to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#key_prefix RekognitionStreamProcessor#key_prefix}

---

### RekognitionStreamProcessorRegionsOfInterest <a name="RekognitionStreamProcessorRegionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorRegionsOfInterest: rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.boundingBox">boundingBox</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a></code> | bounding_box block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.polygon">polygon</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>[]</code> | polygon block. |

---

##### `boundingBox`<sup>Optional</sup> <a name="boundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.boundingBox"></a>

```typescript
public readonly boundingBox: RekognitionStreamProcessorRegionsOfInterestBoundingBox;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>

bounding_box block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#bounding_box RekognitionStreamProcessor#bounding_box}

---

##### `polygon`<sup>Optional</sup> <a name="polygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.polygon"></a>

```typescript
public readonly polygon: IResolvable | RekognitionStreamProcessorRegionsOfInterestPolygon[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>[]

polygon block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#polygon RekognitionStreamProcessor#polygon}

---

### RekognitionStreamProcessorRegionsOfInterestBoundingBox <a name="RekognitionStreamProcessorRegionsOfInterestBoundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorRegionsOfInterestBoundingBox: rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.height">height</a></code> | <code>number</code> | Height of the bounding box as a ratio of the overall image height. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.left">left</a></code> | <code>number</code> | Left coordinate of the bounding box as a ratio of overall image width. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.top">top</a></code> | <code>number</code> | Top coordinate of the bounding box as a ratio of overall image height. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.width">width</a></code> | <code>number</code> | Width of the bounding box as a ratio of the overall image width. |

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Height of the bounding box as a ratio of the overall image height.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#height RekognitionStreamProcessor#height}

---

##### `left`<sup>Optional</sup> <a name="left" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.left"></a>

```typescript
public readonly left: number;
```

- *Type:* number

Left coordinate of the bounding box as a ratio of overall image width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#left RekognitionStreamProcessor#left}

---

##### `top`<sup>Optional</sup> <a name="top" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.top"></a>

```typescript
public readonly top: number;
```

- *Type:* number

Top coordinate of the bounding box as a ratio of overall image height.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#top RekognitionStreamProcessor#top}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Width of the bounding box as a ratio of the overall image width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#width RekognitionStreamProcessor#width}

---

### RekognitionStreamProcessorRegionsOfInterestPolygon <a name="RekognitionStreamProcessorRegionsOfInterestPolygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorRegionsOfInterestPolygon: rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.x">x</a></code> | <code>number</code> | The value of the X coordinate for a point on a Polygon. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.y">y</a></code> | <code>number</code> | The value of the Y coordinate for a point on a Polygon. |

---

##### `x`<sup>Optional</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.x"></a>

```typescript
public readonly x: number;
```

- *Type:* number

The value of the X coordinate for a point on a Polygon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#x RekognitionStreamProcessor#x}

---

##### `y`<sup>Optional</sup> <a name="y" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.y"></a>

```typescript
public readonly y: number;
```

- *Type:* number

The value of the Y coordinate for a point on a Polygon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#y RekognitionStreamProcessor#y}

---

### RekognitionStreamProcessorSettings <a name="RekognitionStreamProcessorSettings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorSettings: rekognitionStreamProcessor.RekognitionStreamProcessorSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.connectedHome">connectedHome</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>[]</code> | connected_home block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.faceSearch">faceSearch</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>[]</code> | face_search block. |

---

##### `connectedHome`<sup>Optional</sup> <a name="connectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.connectedHome"></a>

```typescript
public readonly connectedHome: IResolvable | RekognitionStreamProcessorSettingsConnectedHome[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>[]

connected_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#connected_home RekognitionStreamProcessor#connected_home}

---

##### `faceSearch`<sup>Optional</sup> <a name="faceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.faceSearch"></a>

```typescript
public readonly faceSearch: IResolvable | RekognitionStreamProcessorSettingsFaceSearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>[]

face_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#face_search RekognitionStreamProcessor#face_search}

---

### RekognitionStreamProcessorSettingsConnectedHome <a name="RekognitionStreamProcessorSettingsConnectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorSettingsConnectedHome: rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.labels">labels</a></code> | <code>string[]</code> | Specifies what you want to detect in the video, such as people, packages, or pets. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.minConfidence">minConfidence</a></code> | <code>number</code> | The minimum confidence required to label an object in the video. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Specifies what you want to detect in the video, such as people, packages, or pets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#labels RekognitionStreamProcessor#labels}

---

##### `minConfidence`<sup>Optional</sup> <a name="minConfidence" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.minConfidence"></a>

```typescript
public readonly minConfidence: number;
```

- *Type:* number

The minimum confidence required to label an object in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#min_confidence RekognitionStreamProcessor#min_confidence}

---

### RekognitionStreamProcessorSettingsFaceSearch <a name="RekognitionStreamProcessorSettingsFaceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorSettingsFaceSearch: rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.collectionId">collectionId</a></code> | <code>string</code> | The ID of a collection that contains faces that you want to search for. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.faceMatchThreshold">faceMatchThreshold</a></code> | <code>number</code> | Minimum face match confidence score that must be met to return a result for a recognized face. |

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The ID of a collection that contains faces that you want to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#collection_id RekognitionStreamProcessor#collection_id}

---

##### `faceMatchThreshold`<sup>Optional</sup> <a name="faceMatchThreshold" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.faceMatchThreshold"></a>

```typescript
public readonly faceMatchThreshold: number;
```

- *Type:* number

Minimum face match confidence score that must be met to return a result for a recognized face.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#face_match_threshold RekognitionStreamProcessor#face_match_threshold}

---

### RekognitionStreamProcessorTimeouts <a name="RekognitionStreamProcessorTimeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

const rekognitionStreamProcessorTimeouts: rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#create RekognitionStreamProcessor#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#delete RekognitionStreamProcessor#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/rekognition_stream_processor#update RekognitionStreamProcessor#update}

---

## Classes <a name="Classes" id="Classes"></a>

### RekognitionStreamProcessorDataSharingPreferenceList <a name="RekognitionStreamProcessorDataSharingPreferenceList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.get"></a>

```typescript
public get(index: number): RekognitionStreamProcessorDataSharingPreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorDataSharingPreference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>[]

---


### RekognitionStreamProcessorDataSharingPreferenceOutputReference <a name="RekognitionStreamProcessorDataSharingPreferenceOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optInInput">optInInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optIn">optIn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optInInput`<sup>Optional</sup> <a name="optInInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optInInput"></a>

```typescript
public readonly optInInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `optIn`<sup>Required</sup> <a name="optIn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optIn"></a>

```typescript
public readonly optIn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorDataSharingPreference;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference">RekognitionStreamProcessorDataSharingPreference</a>

---


### RekognitionStreamProcessorInputKinesisVideoStreamList <a name="RekognitionStreamProcessorInputKinesisVideoStreamList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.get"></a>

```typescript
public get(index: number): RekognitionStreamProcessorInputKinesisVideoStreamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorInputKinesisVideoStream[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>[]

---


### RekognitionStreamProcessorInputKinesisVideoStreamOutputReference <a name="RekognitionStreamProcessorInputKinesisVideoStreamOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorInputKinesisVideoStream;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>

---


### RekognitionStreamProcessorInputList <a name="RekognitionStreamProcessorInputList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.get"></a>

```typescript
public get(index: number): RekognitionStreamProcessorInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>[]

---


### RekognitionStreamProcessorInputOutputReference <a name="RekognitionStreamProcessorInputOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesisVideoStream` <a name="putKinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.putKinesisVideoStream"></a>

```typescript
public putKinesisVideoStream(value: IResolvable | RekognitionStreamProcessorInputKinesisVideoStream[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.putKinesisVideoStream.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>[]

---

##### `resetKinesisVideoStream` <a name="resetKinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resetKinesisVideoStream"></a>

```typescript
public resetKinesisVideoStream(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStream">kinesisVideoStream</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList">RekognitionStreamProcessorInputKinesisVideoStreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStreamInput">kinesisVideoStreamInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kinesisVideoStream`<sup>Required</sup> <a name="kinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStream"></a>

```typescript
public readonly kinesisVideoStream: RekognitionStreamProcessorInputKinesisVideoStreamList;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList">RekognitionStreamProcessorInputKinesisVideoStreamList</a>

---

##### `kinesisVideoStreamInput`<sup>Optional</sup> <a name="kinesisVideoStreamInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStreamInput"></a>

```typescript
public readonly kinesisVideoStreamInput: IResolvable | RekognitionStreamProcessorInputKinesisVideoStream[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream">RekognitionStreamProcessorInputKinesisVideoStream</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorInput;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput">RekognitionStreamProcessorInput</a>

---


### RekognitionStreamProcessorNotificationChannelList <a name="RekognitionStreamProcessorNotificationChannelList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.get"></a>

```typescript
public get(index: number): RekognitionStreamProcessorNotificationChannelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorNotificationChannel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>[]

---


### RekognitionStreamProcessorNotificationChannelOutputReference <a name="RekognitionStreamProcessorNotificationChannelOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resetSnsTopicArn"></a>

```typescript
public resetSnsTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorNotificationChannel;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel">RekognitionStreamProcessorNotificationChannel</a>

---


### RekognitionStreamProcessorOutputKinesisDataStreamList <a name="RekognitionStreamProcessorOutputKinesisDataStreamList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.get"></a>

```typescript
public get(index: number): RekognitionStreamProcessorOutputKinesisDataStreamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorOutputKinesisDataStream[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>[]

---


### RekognitionStreamProcessorOutputKinesisDataStreamOutputReference <a name="RekognitionStreamProcessorOutputKinesisDataStreamOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorOutputKinesisDataStream;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>

---


### RekognitionStreamProcessorOutputList <a name="RekognitionStreamProcessorOutputList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.get"></a>

```typescript
public get(index: number): RekognitionStreamProcessorOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorOutput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>[]

---


### RekognitionStreamProcessorOutputOutputReference <a name="RekognitionStreamProcessorOutputOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesisDataStream` <a name="putKinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putKinesisDataStream"></a>

```typescript
public putKinesisDataStream(value: IResolvable | RekognitionStreamProcessorOutputKinesisDataStream[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putKinesisDataStream.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>[]

---

##### `putS3Destination` <a name="putS3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putS3Destination"></a>

```typescript
public putS3Destination(value: IResolvable | RekognitionStreamProcessorOutputS3Destination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putS3Destination.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>[]

---

##### `resetKinesisDataStream` <a name="resetKinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetKinesisDataStream"></a>

```typescript
public resetKinesisDataStream(): void
```

##### `resetS3Destination` <a name="resetS3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetS3Destination"></a>

```typescript
public resetS3Destination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStream">kinesisDataStream</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList">RekognitionStreamProcessorOutputKinesisDataStreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList">RekognitionStreamProcessorOutputS3DestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStreamInput">kinesisDataStreamInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3DestinationInput">s3DestinationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kinesisDataStream`<sup>Required</sup> <a name="kinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStream"></a>

```typescript
public readonly kinesisDataStream: RekognitionStreamProcessorOutputKinesisDataStreamList;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList">RekognitionStreamProcessorOutputKinesisDataStreamList</a>

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3Destination"></a>

```typescript
public readonly s3Destination: RekognitionStreamProcessorOutputS3DestinationList;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList">RekognitionStreamProcessorOutputS3DestinationList</a>

---

##### `kinesisDataStreamInput`<sup>Optional</sup> <a name="kinesisDataStreamInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStreamInput"></a>

```typescript
public readonly kinesisDataStreamInput: IResolvable | RekognitionStreamProcessorOutputKinesisDataStream[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream">RekognitionStreamProcessorOutputKinesisDataStream</a>[]

---

##### `s3DestinationInput`<sup>Optional</sup> <a name="s3DestinationInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3DestinationInput"></a>

```typescript
public readonly s3DestinationInput: IResolvable | RekognitionStreamProcessorOutputS3Destination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorOutput;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput">RekognitionStreamProcessorOutput</a>

---


### RekognitionStreamProcessorOutputS3DestinationList <a name="RekognitionStreamProcessorOutputS3DestinationList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.get"></a>

```typescript
public get(index: number): RekognitionStreamProcessorOutputS3DestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorOutputS3Destination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>[]

---


### RekognitionStreamProcessorOutputS3DestinationOutputReference <a name="RekognitionStreamProcessorOutputS3DestinationOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetKeyPrefix"></a>

```typescript
public resetKeyPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefixInput"></a>

```typescript
public readonly keyPrefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorOutputS3Destination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination">RekognitionStreamProcessorOutputS3Destination</a>

---


### RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference <a name="RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetLeft` <a name="resetLeft" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetLeft"></a>

```typescript
public resetLeft(): void
```

##### `resetTop` <a name="resetTop" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetTop"></a>

```typescript
public resetTop(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.leftInput">leftInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.topInput">topInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.left">left</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.top">top</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `leftInput`<sup>Optional</sup> <a name="leftInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.leftInput"></a>

```typescript
public readonly leftInput: number;
```

- *Type:* number

---

##### `topInput`<sup>Optional</sup> <a name="topInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.topInput"></a>

```typescript
public readonly topInput: number;
```

- *Type:* number

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.left"></a>

```typescript
public readonly left: number;
```

- *Type:* number

---

##### `top`<sup>Required</sup> <a name="top" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.top"></a>

```typescript
public readonly top: number;
```

- *Type:* number

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorRegionsOfInterestBoundingBox;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>

---


### RekognitionStreamProcessorRegionsOfInterestList <a name="RekognitionStreamProcessorRegionsOfInterestList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.get"></a>

```typescript
public get(index: number): RekognitionStreamProcessorRegionsOfInterestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorRegionsOfInterest[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>[]

---


### RekognitionStreamProcessorRegionsOfInterestOutputReference <a name="RekognitionStreamProcessorRegionsOfInterestOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBoundingBox` <a name="putBoundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox"></a>

```typescript
public putBoundingBox(value: RekognitionStreamProcessorRegionsOfInterestBoundingBox): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>

---

##### `putPolygon` <a name="putPolygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putPolygon"></a>

```typescript
public putPolygon(value: IResolvable | RekognitionStreamProcessorRegionsOfInterestPolygon[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putPolygon.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>[]

---

##### `resetBoundingBox` <a name="resetBoundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetBoundingBox"></a>

```typescript
public resetBoundingBox(): void
```

##### `resetPolygon` <a name="resetPolygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetPolygon"></a>

```typescript
public resetPolygon(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBox">boundingBox</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference">RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygon">polygon</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList">RekognitionStreamProcessorRegionsOfInterestPolygonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBoxInput">boundingBoxInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygonInput">polygonInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `boundingBox`<sup>Required</sup> <a name="boundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBox"></a>

```typescript
public readonly boundingBox: RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference">RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference</a>

---

##### `polygon`<sup>Required</sup> <a name="polygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygon"></a>

```typescript
public readonly polygon: RekognitionStreamProcessorRegionsOfInterestPolygonList;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList">RekognitionStreamProcessorRegionsOfInterestPolygonList</a>

---

##### `boundingBoxInput`<sup>Optional</sup> <a name="boundingBoxInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBoxInput"></a>

```typescript
public readonly boundingBoxInput: IResolvable | RekognitionStreamProcessorRegionsOfInterestBoundingBox;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox">RekognitionStreamProcessorRegionsOfInterestBoundingBox</a>

---

##### `polygonInput`<sup>Optional</sup> <a name="polygonInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygonInput"></a>

```typescript
public readonly polygonInput: IResolvable | RekognitionStreamProcessorRegionsOfInterestPolygon[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorRegionsOfInterest;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest">RekognitionStreamProcessorRegionsOfInterest</a>

---


### RekognitionStreamProcessorRegionsOfInterestPolygonList <a name="RekognitionStreamProcessorRegionsOfInterestPolygonList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.get"></a>

```typescript
public get(index: number): RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorRegionsOfInterestPolygon[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>[]

---


### RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference <a name="RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetX` <a name="resetX" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetX"></a>

```typescript
public resetX(): void
```

##### `resetY` <a name="resetY" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetY"></a>

```typescript
public resetY(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.xInput">xInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.yInput">yInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.x">x</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.y">y</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xInput`<sup>Optional</sup> <a name="xInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.xInput"></a>

```typescript
public readonly xInput: number;
```

- *Type:* number

---

##### `yInput`<sup>Optional</sup> <a name="yInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.yInput"></a>

```typescript
public readonly yInput: number;
```

- *Type:* number

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.x"></a>

```typescript
public readonly x: number;
```

- *Type:* number

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.y"></a>

```typescript
public readonly y: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorRegionsOfInterestPolygon;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon">RekognitionStreamProcessorRegionsOfInterestPolygon</a>

---


### RekognitionStreamProcessorSettingsConnectedHomeList <a name="RekognitionStreamProcessorSettingsConnectedHomeList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.get"></a>

```typescript
public get(index: number): RekognitionStreamProcessorSettingsConnectedHomeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorSettingsConnectedHome[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>[]

---


### RekognitionStreamProcessorSettingsConnectedHomeOutputReference <a name="RekognitionStreamProcessorSettingsConnectedHomeOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMinConfidence` <a name="resetMinConfidence" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetMinConfidence"></a>

```typescript
public resetMinConfidence(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidenceInput">minConfidenceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidence">minConfidence</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `minConfidenceInput`<sup>Optional</sup> <a name="minConfidenceInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidenceInput"></a>

```typescript
public readonly minConfidenceInput: number;
```

- *Type:* number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `minConfidence`<sup>Required</sup> <a name="minConfidence" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidence"></a>

```typescript
public readonly minConfidence: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorSettingsConnectedHome;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>

---


### RekognitionStreamProcessorSettingsFaceSearchList <a name="RekognitionStreamProcessorSettingsFaceSearchList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.get"></a>

```typescript
public get(index: number): RekognitionStreamProcessorSettingsFaceSearchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorSettingsFaceSearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>[]

---


### RekognitionStreamProcessorSettingsFaceSearchOutputReference <a name="RekognitionStreamProcessorSettingsFaceSearchOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFaceMatchThreshold` <a name="resetFaceMatchThreshold" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resetFaceMatchThreshold"></a>

```typescript
public resetFaceMatchThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThresholdInput">faceMatchThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThreshold">faceMatchThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `faceMatchThresholdInput`<sup>Optional</sup> <a name="faceMatchThresholdInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThresholdInput"></a>

```typescript
public readonly faceMatchThresholdInput: number;
```

- *Type:* number

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `faceMatchThreshold`<sup>Required</sup> <a name="faceMatchThreshold" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThreshold"></a>

```typescript
public readonly faceMatchThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorSettingsFaceSearch;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>

---


### RekognitionStreamProcessorSettingsList <a name="RekognitionStreamProcessorSettingsList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.get"></a>

```typescript
public get(index: number): RekognitionStreamProcessorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>[]

---


### RekognitionStreamProcessorSettingsOutputReference <a name="RekognitionStreamProcessorSettingsOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectedHome` <a name="putConnectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putConnectedHome"></a>

```typescript
public putConnectedHome(value: IResolvable | RekognitionStreamProcessorSettingsConnectedHome[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putConnectedHome.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>[]

---

##### `putFaceSearch` <a name="putFaceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putFaceSearch"></a>

```typescript
public putFaceSearch(value: IResolvable | RekognitionStreamProcessorSettingsFaceSearch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putFaceSearch.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>[]

---

##### `resetConnectedHome` <a name="resetConnectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetConnectedHome"></a>

```typescript
public resetConnectedHome(): void
```

##### `resetFaceSearch` <a name="resetFaceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetFaceSearch"></a>

```typescript
public resetFaceSearch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHome">connectedHome</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList">RekognitionStreamProcessorSettingsConnectedHomeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearch">faceSearch</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList">RekognitionStreamProcessorSettingsFaceSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHomeInput">connectedHomeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearchInput">faceSearchInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectedHome`<sup>Required</sup> <a name="connectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHome"></a>

```typescript
public readonly connectedHome: RekognitionStreamProcessorSettingsConnectedHomeList;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList">RekognitionStreamProcessorSettingsConnectedHomeList</a>

---

##### `faceSearch`<sup>Required</sup> <a name="faceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearch"></a>

```typescript
public readonly faceSearch: RekognitionStreamProcessorSettingsFaceSearchList;
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList">RekognitionStreamProcessorSettingsFaceSearchList</a>

---

##### `connectedHomeInput`<sup>Optional</sup> <a name="connectedHomeInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHomeInput"></a>

```typescript
public readonly connectedHomeInput: IResolvable | RekognitionStreamProcessorSettingsConnectedHome[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome">RekognitionStreamProcessorSettingsConnectedHome</a>[]

---

##### `faceSearchInput`<sup>Optional</sup> <a name="faceSearchInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearchInput"></a>

```typescript
public readonly faceSearchInput: IResolvable | RekognitionStreamProcessorSettingsFaceSearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch">RekognitionStreamProcessorSettingsFaceSearch</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings">RekognitionStreamProcessorSettings</a>

---


### RekognitionStreamProcessorTimeoutsOutputReference <a name="RekognitionStreamProcessorTimeoutsOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer"></a>

```typescript
import { rekognitionStreamProcessor } from '@cdktf/provider-aws'

new rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RekognitionStreamProcessorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>

---



