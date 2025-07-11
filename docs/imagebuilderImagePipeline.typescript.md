# `imagebuilderImagePipeline` Submodule <a name="`imagebuilderImagePipeline` Submodule" id="@cdktf/provider-aws.imagebuilderImagePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImagePipeline <a name="ImagebuilderImagePipeline" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline aws_imagebuilder_image_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

new imagebuilderImagePipeline.ImagebuilderImagePipeline(scope: Construct, id: string, config: ImagebuilderImagePipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig">ImagebuilderImagePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig">ImagebuilderImagePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageScanningConfiguration">putImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration">putImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putWorkflow">putWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetContainerRecipeArn">resetContainerRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDistributionConfigurationArn">resetDistributionConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetEnhancedImageMetadataEnabled">resetEnhancedImageMetadataEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageRecipeArn">resetImageRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageScanningConfiguration">resetImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageTestsConfiguration">resetImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetWorkflow">resetWorkflow</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImageScanningConfiguration` <a name="putImageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageScanningConfiguration"></a>

```typescript
public putImageScanningConfiguration(value: ImagebuilderImagePipelineImageScanningConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageScanningConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

---

##### `putImageTestsConfiguration` <a name="putImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration"></a>

```typescript
public putImageTestsConfiguration(value: ImagebuilderImagePipelineImageTestsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule"></a>

```typescript
public putSchedule(value: ImagebuilderImagePipelineSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

---

##### `putWorkflow` <a name="putWorkflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putWorkflow"></a>

```typescript
public putWorkflow(value: IResolvable | ImagebuilderImagePipelineWorkflow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putWorkflow.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>[]

---

##### `resetContainerRecipeArn` <a name="resetContainerRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetContainerRecipeArn"></a>

```typescript
public resetContainerRecipeArn(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDistributionConfigurationArn` <a name="resetDistributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDistributionConfigurationArn"></a>

```typescript
public resetDistributionConfigurationArn(): void
```

##### `resetEnhancedImageMetadataEnabled` <a name="resetEnhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetEnhancedImageMetadataEnabled"></a>

```typescript
public resetEnhancedImageMetadataEnabled(): void
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetExecutionRole"></a>

```typescript
public resetExecutionRole(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageRecipeArn` <a name="resetImageRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageRecipeArn"></a>

```typescript
public resetImageRecipeArn(): void
```

##### `resetImageScanningConfiguration` <a name="resetImageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageScanningConfiguration"></a>

```typescript
public resetImageScanningConfiguration(): void
```

##### `resetImageTestsConfiguration` <a name="resetImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageTestsConfiguration"></a>

```typescript
public resetImageTestsConfiguration(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetWorkflow` <a name="resetWorkflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetWorkflow"></a>

```typescript
public resetWorkflow(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ImagebuilderImagePipeline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ImagebuilderImagePipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderImagePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderImagePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ImagebuilderImagePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateCreated">dateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateLastRun">dateLastRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateNextRun">dateNextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateUpdated">dateUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfiguration">imageScanningConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfiguration">imageTestsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference">ImagebuilderImagePipelineImageTestsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference">ImagebuilderImagePipelineScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflow">workflow</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList">ImagebuilderImagePipelineWorkflowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArnInput">containerRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArnInput">distributionConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabledInput">enhancedImageMetadataEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArnInput">imageRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfigurationInput">imageScanningConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfigurationInput">imageTestsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArnInput">infrastructureConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflowInput">workflowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArn">containerRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArn">distributionConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabled">enhancedImageMetadataEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArn">imageRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArn">infrastructureConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dateCreated`<sup>Required</sup> <a name="dateCreated" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateCreated"></a>

```typescript
public readonly dateCreated: string;
```

- *Type:* string

---

##### `dateLastRun`<sup>Required</sup> <a name="dateLastRun" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateLastRun"></a>

```typescript
public readonly dateLastRun: string;
```

- *Type:* string

---

##### `dateNextRun`<sup>Required</sup> <a name="dateNextRun" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateNextRun"></a>

```typescript
public readonly dateNextRun: string;
```

- *Type:* string

---

##### `dateUpdated`<sup>Required</sup> <a name="dateUpdated" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateUpdated"></a>

```typescript
public readonly dateUpdated: string;
```

- *Type:* string

---

##### `imageScanningConfiguration`<sup>Required</sup> <a name="imageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfiguration"></a>

```typescript
public readonly imageScanningConfiguration: ImagebuilderImagePipelineImageScanningConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationOutputReference</a>

---

##### `imageTestsConfiguration`<sup>Required</sup> <a name="imageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfiguration"></a>

```typescript
public readonly imageTestsConfiguration: ImagebuilderImagePipelineImageTestsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference">ImagebuilderImagePipelineImageTestsConfigurationOutputReference</a>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.schedule"></a>

```typescript
public readonly schedule: ImagebuilderImagePipelineScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference">ImagebuilderImagePipelineScheduleOutputReference</a>

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflow"></a>

```typescript
public readonly workflow: ImagebuilderImagePipelineWorkflowList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList">ImagebuilderImagePipelineWorkflowList</a>

---

##### `containerRecipeArnInput`<sup>Optional</sup> <a name="containerRecipeArnInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArnInput"></a>

```typescript
public readonly containerRecipeArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `distributionConfigurationArnInput`<sup>Optional</sup> <a name="distributionConfigurationArnInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArnInput"></a>

```typescript
public readonly distributionConfigurationArnInput: string;
```

- *Type:* string

---

##### `enhancedImageMetadataEnabledInput`<sup>Optional</sup> <a name="enhancedImageMetadataEnabledInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabledInput"></a>

```typescript
public readonly enhancedImageMetadataEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageRecipeArnInput`<sup>Optional</sup> <a name="imageRecipeArnInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArnInput"></a>

```typescript
public readonly imageRecipeArnInput: string;
```

- *Type:* string

---

##### `imageScanningConfigurationInput`<sup>Optional</sup> <a name="imageScanningConfigurationInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfigurationInput"></a>

```typescript
public readonly imageScanningConfigurationInput: ImagebuilderImagePipelineImageScanningConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

---

##### `imageTestsConfigurationInput`<sup>Optional</sup> <a name="imageTestsConfigurationInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfigurationInput"></a>

```typescript
public readonly imageTestsConfigurationInput: ImagebuilderImagePipelineImageTestsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

---

##### `infrastructureConfigurationArnInput`<sup>Optional</sup> <a name="infrastructureConfigurationArnInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArnInput"></a>

```typescript
public readonly infrastructureConfigurationArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: ImagebuilderImagePipelineSchedule;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workflowInput`<sup>Optional</sup> <a name="workflowInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflowInput"></a>

```typescript
public readonly workflowInput: IResolvable | ImagebuilderImagePipelineWorkflow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>[]

---

##### `containerRecipeArn`<sup>Required</sup> <a name="containerRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArn"></a>

```typescript
public readonly containerRecipeArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `distributionConfigurationArn`<sup>Required</sup> <a name="distributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArn"></a>

```typescript
public readonly distributionConfigurationArn: string;
```

- *Type:* string

---

##### `enhancedImageMetadataEnabled`<sup>Required</sup> <a name="enhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabled"></a>

```typescript
public readonly enhancedImageMetadataEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageRecipeArn`<sup>Required</sup> <a name="imageRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArn"></a>

```typescript
public readonly imageRecipeArn: string;
```

- *Type:* string

---

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="infrastructureConfigurationArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArn"></a>

```typescript
public readonly infrastructureConfigurationArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImagePipelineConfig <a name="ImagebuilderImagePipelineConfig" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

const imagebuilderImagePipelineConfig: imagebuilderImagePipeline.ImagebuilderImagePipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.infrastructureConfigurationArn">infrastructureConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.containerRecipeArn">containerRecipeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#description ImagebuilderImagePipeline#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.distributionConfigurationArn">distributionConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.enhancedImageMetadataEnabled">enhancedImageMetadataEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.executionRole">executionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#execution_role ImagebuilderImagePipeline#execution_role}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#id ImagebuilderImagePipeline#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageRecipeArn">imageRecipeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageScanningConfiguration">imageScanningConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a></code> | image_scanning_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageTestsConfiguration">imageTestsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a></code> | image_tests_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#status ImagebuilderImagePipeline#status}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#tags ImagebuilderImagePipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#tags_all ImagebuilderImagePipeline#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.workflow">workflow</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>[]</code> | workflow block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="infrastructureConfigurationArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.infrastructureConfigurationArn"></a>

```typescript
public readonly infrastructureConfigurationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}.

---

##### `containerRecipeArn`<sup>Optional</sup> <a name="containerRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.containerRecipeArn"></a>

```typescript
public readonly containerRecipeArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#description ImagebuilderImagePipeline#description}.

---

##### `distributionConfigurationArn`<sup>Optional</sup> <a name="distributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.distributionConfigurationArn"></a>

```typescript
public readonly distributionConfigurationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}.

---

##### `enhancedImageMetadataEnabled`<sup>Optional</sup> <a name="enhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.enhancedImageMetadataEnabled"></a>

```typescript
public readonly enhancedImageMetadataEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#execution_role ImagebuilderImagePipeline#execution_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#id ImagebuilderImagePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageRecipeArn`<sup>Optional</sup> <a name="imageRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageRecipeArn"></a>

```typescript
public readonly imageRecipeArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}.

---

##### `imageScanningConfiguration`<sup>Optional</sup> <a name="imageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageScanningConfiguration"></a>

```typescript
public readonly imageScanningConfiguration: ImagebuilderImagePipelineImageScanningConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

image_scanning_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#image_scanning_configuration ImagebuilderImagePipeline#image_scanning_configuration}

---

##### `imageTestsConfiguration`<sup>Optional</sup> <a name="imageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageTestsConfiguration"></a>

```typescript
public readonly imageTestsConfiguration: ImagebuilderImagePipelineImageTestsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

image_tests_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#image_tests_configuration ImagebuilderImagePipeline#image_tests_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#region ImagebuilderImagePipeline#region}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.schedule"></a>

```typescript
public readonly schedule: ImagebuilderImagePipelineSchedule;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#schedule ImagebuilderImagePipeline#schedule}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#status ImagebuilderImagePipeline#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#tags ImagebuilderImagePipeline#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#tags_all ImagebuilderImagePipeline#tags_all}.

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.workflow"></a>

```typescript
public readonly workflow: IResolvable | ImagebuilderImagePipelineWorkflow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>[]

workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#workflow ImagebuilderImagePipeline#workflow}

---

### ImagebuilderImagePipelineImageScanningConfiguration <a name="ImagebuilderImagePipelineImageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

const imagebuilderImagePipelineImageScanningConfiguration: imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.ecrConfiguration">ecrConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a></code> | ecr_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.imageScanningEnabled">imageScanningEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#image_scanning_enabled ImagebuilderImagePipeline#image_scanning_enabled}. |

---

##### `ecrConfiguration`<sup>Optional</sup> <a name="ecrConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.ecrConfiguration"></a>

```typescript
public readonly ecrConfiguration: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

ecr_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#ecr_configuration ImagebuilderImagePipeline#ecr_configuration}

---

##### `imageScanningEnabled`<sup>Optional</sup> <a name="imageScanningEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.imageScanningEnabled"></a>

```typescript
public readonly imageScanningEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#image_scanning_enabled ImagebuilderImagePipeline#image_scanning_enabled}.

---

### ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration <a name="ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

const imagebuilderImagePipelineImageScanningConfigurationEcrConfiguration: imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.containerTags">containerTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#container_tags ImagebuilderImagePipeline#container_tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.repositoryName">repositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#repository_name ImagebuilderImagePipeline#repository_name}. |

---

##### `containerTags`<sup>Optional</sup> <a name="containerTags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.containerTags"></a>

```typescript
public readonly containerTags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#container_tags ImagebuilderImagePipeline#container_tags}.

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#repository_name ImagebuilderImagePipeline#repository_name}.

---

### ImagebuilderImagePipelineImageTestsConfiguration <a name="ImagebuilderImagePipelineImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

const imagebuilderImagePipelineImageTestsConfiguration: imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.imageTestsEnabled">imageTestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}. |

---

##### `imageTestsEnabled`<sup>Optional</sup> <a name="imageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.imageTestsEnabled"></a>

```typescript
public readonly imageTestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}.

---

### ImagebuilderImagePipelineSchedule <a name="ImagebuilderImagePipelineSchedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

const imagebuilderImagePipelineSchedule: imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#schedule_expression ImagebuilderImagePipeline#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.pipelineExecutionStartCondition">pipelineExecutionStartCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#timezone ImagebuilderImagePipeline#timezone}. |

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#schedule_expression ImagebuilderImagePipeline#schedule_expression}.

---

##### `pipelineExecutionStartCondition`<sup>Optional</sup> <a name="pipelineExecutionStartCondition" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.pipelineExecutionStartCondition"></a>

```typescript
public readonly pipelineExecutionStartCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#timezone ImagebuilderImagePipeline#timezone}.

---

### ImagebuilderImagePipelineWorkflow <a name="ImagebuilderImagePipelineWorkflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

const imagebuilderImagePipelineWorkflow: imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.workflowArn">workflowArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#workflow_arn ImagebuilderImagePipeline#workflow_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.onFailure">onFailure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#on_failure ImagebuilderImagePipeline#on_failure}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.parallelGroup">parallelGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#parallel_group ImagebuilderImagePipeline#parallel_group}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>[]</code> | parameter block. |

---

##### `workflowArn`<sup>Required</sup> <a name="workflowArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.workflowArn"></a>

```typescript
public readonly workflowArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#workflow_arn ImagebuilderImagePipeline#workflow_arn}.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.onFailure"></a>

```typescript
public readonly onFailure: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#on_failure ImagebuilderImagePipeline#on_failure}.

---

##### `parallelGroup`<sup>Optional</sup> <a name="parallelGroup" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.parallelGroup"></a>

```typescript
public readonly parallelGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#parallel_group ImagebuilderImagePipeline#parallel_group}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | ImagebuilderImagePipelineWorkflowParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#parameter ImagebuilderImagePipeline#parameter}

---

### ImagebuilderImagePipelineWorkflowParameter <a name="ImagebuilderImagePipelineWorkflowParameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

const imagebuilderImagePipelineWorkflowParameter: imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#value ImagebuilderImagePipeline#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/imagebuilder_image_pipeline#value ImagebuilderImagePipeline#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference <a name="ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

new imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags">resetContainerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName">resetRepositoryName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerTags` <a name="resetContainerTags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags"></a>

```typescript
public resetContainerTags(): void
```

##### `resetRepositoryName` <a name="resetRepositoryName" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName"></a>

```typescript
public resetRepositoryName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput">containerTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags">containerTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerTagsInput`<sup>Optional</sup> <a name="containerTagsInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput"></a>

```typescript
public readonly containerTagsInput: string[];
```

- *Type:* string[]

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `containerTags`<sup>Required</sup> <a name="containerTags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags"></a>

```typescript
public readonly containerTags: string[];
```

- *Type:* string[]

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

---


### ImagebuilderImagePipelineImageScanningConfigurationOutputReference <a name="ImagebuilderImagePipelineImageScanningConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

new imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.putEcrConfiguration">putEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetEcrConfiguration">resetEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetImageScanningEnabled">resetImageScanningEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEcrConfiguration` <a name="putEcrConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.putEcrConfiguration"></a>

```typescript
public putEcrConfiguration(value: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.putEcrConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

---

##### `resetEcrConfiguration` <a name="resetEcrConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetEcrConfiguration"></a>

```typescript
public resetEcrConfiguration(): void
```

##### `resetImageScanningEnabled` <a name="resetImageScanningEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetImageScanningEnabled"></a>

```typescript
public resetImageScanningEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfiguration">ecrConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfigurationInput">ecrConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabledInput">imageScanningEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabled">imageScanningEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ecrConfiguration`<sup>Required</sup> <a name="ecrConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfiguration"></a>

```typescript
public readonly ecrConfiguration: ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference</a>

---

##### `ecrConfigurationInput`<sup>Optional</sup> <a name="ecrConfigurationInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfigurationInput"></a>

```typescript
public readonly ecrConfigurationInput: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

---

##### `imageScanningEnabledInput`<sup>Optional</sup> <a name="imageScanningEnabledInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabledInput"></a>

```typescript
public readonly imageScanningEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `imageScanningEnabled`<sup>Required</sup> <a name="imageScanningEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabled"></a>

```typescript
public readonly imageScanningEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderImagePipelineImageScanningConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

---


### ImagebuilderImagePipelineImageTestsConfigurationOutputReference <a name="ImagebuilderImagePipelineImageTestsConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

new imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetImageTestsEnabled">resetImageTestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetTimeoutMinutes">resetTimeoutMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageTestsEnabled` <a name="resetImageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetImageTestsEnabled"></a>

```typescript
public resetImageTestsEnabled(): void
```

##### `resetTimeoutMinutes` <a name="resetTimeoutMinutes" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetTimeoutMinutes"></a>

```typescript
public resetTimeoutMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabledInput">imageTestsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutesInput">timeoutMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabled">imageTestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageTestsEnabledInput`<sup>Optional</sup> <a name="imageTestsEnabledInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabledInput"></a>

```typescript
public readonly imageTestsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutMinutesInput`<sup>Optional</sup> <a name="timeoutMinutesInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutesInput"></a>

```typescript
public readonly timeoutMinutesInput: number;
```

- *Type:* number

---

##### `imageTestsEnabled`<sup>Required</sup> <a name="imageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabled"></a>

```typescript
public readonly imageTestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutMinutes`<sup>Required</sup> <a name="timeoutMinutes" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderImagePipelineImageTestsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

---


### ImagebuilderImagePipelineScheduleOutputReference <a name="ImagebuilderImagePipelineScheduleOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

new imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetPipelineExecutionStartCondition">resetPipelineExecutionStartCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPipelineExecutionStartCondition` <a name="resetPipelineExecutionStartCondition" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetPipelineExecutionStartCondition"></a>

```typescript
public resetPipelineExecutionStartCondition(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetTimezone"></a>

```typescript
public resetTimezone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartConditionInput">pipelineExecutionStartConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartCondition">pipelineExecutionStartCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pipelineExecutionStartConditionInput`<sup>Optional</sup> <a name="pipelineExecutionStartConditionInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartConditionInput"></a>

```typescript
public readonly pipelineExecutionStartConditionInput: string;
```

- *Type:* string

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `pipelineExecutionStartCondition`<sup>Required</sup> <a name="pipelineExecutionStartCondition" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartCondition"></a>

```typescript
public readonly pipelineExecutionStartCondition: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderImagePipelineSchedule;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

---


### ImagebuilderImagePipelineWorkflowList <a name="ImagebuilderImagePipelineWorkflowList" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

new imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.get"></a>

```typescript
public get(index: number): ImagebuilderImagePipelineWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImagePipelineWorkflow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>[]

---


### ImagebuilderImagePipelineWorkflowOutputReference <a name="ImagebuilderImagePipelineWorkflowOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

new imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetParallelGroup">resetParallelGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetParameter">resetParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameter` <a name="putParameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.putParameter"></a>

```typescript
public putParameter(value: IResolvable | ImagebuilderImagePipelineWorkflowParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>[]

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetOnFailure"></a>

```typescript
public resetOnFailure(): void
```

##### `resetParallelGroup` <a name="resetParallelGroup" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetParallelGroup"></a>

```typescript
public resetParallelGroup(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList">ImagebuilderImagePipelineWorkflowParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.onFailureInput">onFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parallelGroupInput">parallelGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.workflowArnInput">workflowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.onFailure">onFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parallelGroup">parallelGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.workflowArn">workflowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parameter"></a>

```typescript
public readonly parameter: ImagebuilderImagePipelineWorkflowParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList">ImagebuilderImagePipelineWorkflowParameterList</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.onFailureInput"></a>

```typescript
public readonly onFailureInput: string;
```

- *Type:* string

---

##### `parallelGroupInput`<sup>Optional</sup> <a name="parallelGroupInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parallelGroupInput"></a>

```typescript
public readonly parallelGroupInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | ImagebuilderImagePipelineWorkflowParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>[]

---

##### `workflowArnInput`<sup>Optional</sup> <a name="workflowArnInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.workflowArnInput"></a>

```typescript
public readonly workflowArnInput: string;
```

- *Type:* string

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.onFailure"></a>

```typescript
public readonly onFailure: string;
```

- *Type:* string

---

##### `parallelGroup`<sup>Required</sup> <a name="parallelGroup" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parallelGroup"></a>

```typescript
public readonly parallelGroup: string;
```

- *Type:* string

---

##### `workflowArn`<sup>Required</sup> <a name="workflowArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.workflowArn"></a>

```typescript
public readonly workflowArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImagePipelineWorkflow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>

---


### ImagebuilderImagePipelineWorkflowParameterList <a name="ImagebuilderImagePipelineWorkflowParameterList" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

new imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.get"></a>

```typescript
public get(index: number): ImagebuilderImagePipelineWorkflowParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImagePipelineWorkflowParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>[]

---


### ImagebuilderImagePipelineWorkflowParameterOutputReference <a name="ImagebuilderImagePipelineWorkflowParameterOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer"></a>

```typescript
import { imagebuilderImagePipeline } from '@cdktf/provider-aws'

new imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImagePipelineWorkflowParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>

---



