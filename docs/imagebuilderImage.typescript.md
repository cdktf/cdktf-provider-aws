# `imagebuilderImage` Submodule <a name="`imagebuilderImage` Submodule" id="@cdktf/provider-aws.imagebuilderImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImage <a name="ImagebuilderImage" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image aws_imagebuilder_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImage(scope: Construct, id: string, config: ImagebuilderImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig">ImagebuilderImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig">ImagebuilderImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putImageScanningConfiguration">putImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration">putImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putWorkflow">putWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetContainerRecipeArn">resetContainerRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetDistributionConfigurationArn">resetDistributionConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetEnhancedImageMetadataEnabled">resetEnhancedImageMetadataEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageRecipeArn">resetImageRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageScanningConfiguration">resetImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageTestsConfiguration">resetImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetWorkflow">resetWorkflow</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImageScanningConfiguration` <a name="putImageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putImageScanningConfiguration"></a>

```typescript
public putImageScanningConfiguration(value: ImagebuilderImageImageScanningConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putImageScanningConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a>

---

##### `putImageTestsConfiguration` <a name="putImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration"></a>

```typescript
public putImageTestsConfiguration(value: ImagebuilderImageImageTestsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putTimeouts"></a>

```typescript
public putTimeouts(value: ImagebuilderImageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a>

---

##### `putWorkflow` <a name="putWorkflow" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putWorkflow"></a>

```typescript
public putWorkflow(value: IResolvable | ImagebuilderImageWorkflow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putWorkflow.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]

---

##### `resetContainerRecipeArn` <a name="resetContainerRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetContainerRecipeArn"></a>

```typescript
public resetContainerRecipeArn(): void
```

##### `resetDistributionConfigurationArn` <a name="resetDistributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetDistributionConfigurationArn"></a>

```typescript
public resetDistributionConfigurationArn(): void
```

##### `resetEnhancedImageMetadataEnabled` <a name="resetEnhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetEnhancedImageMetadataEnabled"></a>

```typescript
public resetEnhancedImageMetadataEnabled(): void
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetExecutionRole"></a>

```typescript
public resetExecutionRole(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageRecipeArn` <a name="resetImageRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageRecipeArn"></a>

```typescript
public resetImageRecipeArn(): void
```

##### `resetImageScanningConfiguration` <a name="resetImageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageScanningConfiguration"></a>

```typescript
public resetImageScanningConfiguration(): void
```

##### `resetImageTestsConfiguration` <a name="resetImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageTestsConfiguration"></a>

```typescript
public resetImageTestsConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkflow` <a name="resetWorkflow" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetWorkflow"></a>

```typescript
public resetWorkflow(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ImagebuilderImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isConstruct"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

imagebuilderImage.ImagebuilderImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformElement"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

imagebuilderImage.ImagebuilderImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformResource"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

imagebuilderImage.ImagebuilderImage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.generateConfigForImport"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

imagebuilderImage.ImagebuilderImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ImagebuilderImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ImagebuilderImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.dateCreated">dateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageScanningConfiguration">imageScanningConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference">ImagebuilderImageImageScanningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfiguration">imageTestsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference">ImagebuilderImageImageTestsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.osVersion">osVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.outputResources">outputResources</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList">ImagebuilderImageOutputResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference">ImagebuilderImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.workflow">workflow</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList">ImagebuilderImageWorkflowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArnInput">containerRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArnInput">distributionConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabledInput">enhancedImageMetadataEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArnInput">imageRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageScanningConfigurationInput">imageScanningConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfigurationInput">imageTestsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArnInput">infrastructureConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.workflowInput">workflowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArn">containerRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArn">distributionConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabled">enhancedImageMetadataEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArn">imageRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArn">infrastructureConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dateCreated`<sup>Required</sup> <a name="dateCreated" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.dateCreated"></a>

```typescript
public readonly dateCreated: string;
```

- *Type:* string

---

##### `imageScanningConfiguration`<sup>Required</sup> <a name="imageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageScanningConfiguration"></a>

```typescript
public readonly imageScanningConfiguration: ImagebuilderImageImageScanningConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference">ImagebuilderImageImageScanningConfigurationOutputReference</a>

---

##### `imageTestsConfiguration`<sup>Required</sup> <a name="imageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfiguration"></a>

```typescript
public readonly imageTestsConfiguration: ImagebuilderImageImageTestsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference">ImagebuilderImageImageTestsConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

---

##### `outputResources`<sup>Required</sup> <a name="outputResources" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.outputResources"></a>

```typescript
public readonly outputResources: ImagebuilderImageOutputResourcesList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList">ImagebuilderImageOutputResourcesList</a>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeouts"></a>

```typescript
public readonly timeouts: ImagebuilderImageTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference">ImagebuilderImageTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.workflow"></a>

```typescript
public readonly workflow: ImagebuilderImageWorkflowList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList">ImagebuilderImageWorkflowList</a>

---

##### `containerRecipeArnInput`<sup>Optional</sup> <a name="containerRecipeArnInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArnInput"></a>

```typescript
public readonly containerRecipeArnInput: string;
```

- *Type:* string

---

##### `distributionConfigurationArnInput`<sup>Optional</sup> <a name="distributionConfigurationArnInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArnInput"></a>

```typescript
public readonly distributionConfigurationArnInput: string;
```

- *Type:* string

---

##### `enhancedImageMetadataEnabledInput`<sup>Optional</sup> <a name="enhancedImageMetadataEnabledInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabledInput"></a>

```typescript
public readonly enhancedImageMetadataEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageRecipeArnInput`<sup>Optional</sup> <a name="imageRecipeArnInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArnInput"></a>

```typescript
public readonly imageRecipeArnInput: string;
```

- *Type:* string

---

##### `imageScanningConfigurationInput`<sup>Optional</sup> <a name="imageScanningConfigurationInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageScanningConfigurationInput"></a>

```typescript
public readonly imageScanningConfigurationInput: ImagebuilderImageImageScanningConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a>

---

##### `imageTestsConfigurationInput`<sup>Optional</sup> <a name="imageTestsConfigurationInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfigurationInput"></a>

```typescript
public readonly imageTestsConfigurationInput: ImagebuilderImageImageTestsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---

##### `infrastructureConfigurationArnInput`<sup>Optional</sup> <a name="infrastructureConfigurationArnInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArnInput"></a>

```typescript
public readonly infrastructureConfigurationArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ImagebuilderImageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a>

---

##### `workflowInput`<sup>Optional</sup> <a name="workflowInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.workflowInput"></a>

```typescript
public readonly workflowInput: IResolvable | ImagebuilderImageWorkflow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]

---

##### `containerRecipeArn`<sup>Required</sup> <a name="containerRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArn"></a>

```typescript
public readonly containerRecipeArn: string;
```

- *Type:* string

---

##### `distributionConfigurationArn`<sup>Required</sup> <a name="distributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArn"></a>

```typescript
public readonly distributionConfigurationArn: string;
```

- *Type:* string

---

##### `enhancedImageMetadataEnabled`<sup>Required</sup> <a name="enhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabled"></a>

```typescript
public readonly enhancedImageMetadataEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageRecipeArn`<sup>Required</sup> <a name="imageRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArn"></a>

```typescript
public readonly imageRecipeArn: string;
```

- *Type:* string

---

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="infrastructureConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArn"></a>

```typescript
public readonly infrastructureConfigurationArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImageConfig <a name="ImagebuilderImageConfig" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

const imagebuilderImageConfig: imagebuilderImage.ImagebuilderImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.infrastructureConfigurationArn">infrastructureConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.containerRecipeArn">containerRecipeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#container_recipe_arn ImagebuilderImage#container_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.distributionConfigurationArn">distributionConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.enhancedImageMetadataEnabled">enhancedImageMetadataEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.executionRole">executionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#execution_role ImagebuilderImage#execution_role}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#id ImagebuilderImage#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageRecipeArn">imageRecipeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#image_recipe_arn ImagebuilderImage#image_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageScanningConfiguration">imageScanningConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a></code> | image_scanning_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageTestsConfiguration">imageTestsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | image_tests_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#tags ImagebuilderImage#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#tags_all ImagebuilderImage#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.workflow">workflow</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]</code> | workflow block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="infrastructureConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.infrastructureConfigurationArn"></a>

```typescript
public readonly infrastructureConfigurationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}.

---

##### `containerRecipeArn`<sup>Optional</sup> <a name="containerRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.containerRecipeArn"></a>

```typescript
public readonly containerRecipeArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#container_recipe_arn ImagebuilderImage#container_recipe_arn}.

---

##### `distributionConfigurationArn`<sup>Optional</sup> <a name="distributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.distributionConfigurationArn"></a>

```typescript
public readonly distributionConfigurationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}.

---

##### `enhancedImageMetadataEnabled`<sup>Optional</sup> <a name="enhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.enhancedImageMetadataEnabled"></a>

```typescript
public readonly enhancedImageMetadataEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#execution_role ImagebuilderImage#execution_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#id ImagebuilderImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageRecipeArn`<sup>Optional</sup> <a name="imageRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageRecipeArn"></a>

```typescript
public readonly imageRecipeArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#image_recipe_arn ImagebuilderImage#image_recipe_arn}.

---

##### `imageScanningConfiguration`<sup>Optional</sup> <a name="imageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageScanningConfiguration"></a>

```typescript
public readonly imageScanningConfiguration: ImagebuilderImageImageScanningConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a>

image_scanning_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#image_scanning_configuration ImagebuilderImage#image_scanning_configuration}

---

##### `imageTestsConfiguration`<sup>Optional</sup> <a name="imageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageTestsConfiguration"></a>

```typescript
public readonly imageTestsConfiguration: ImagebuilderImageImageTestsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

image_tests_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#image_tests_configuration ImagebuilderImage#image_tests_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#tags ImagebuilderImage#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#tags_all ImagebuilderImage#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ImagebuilderImageTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#timeouts ImagebuilderImage#timeouts}

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.workflow"></a>

```typescript
public readonly workflow: IResolvable | ImagebuilderImageWorkflow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]

workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#workflow ImagebuilderImage#workflow}

---

### ImagebuilderImageImageScanningConfiguration <a name="ImagebuilderImageImageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

const imagebuilderImageImageScanningConfiguration: imagebuilderImage.ImagebuilderImageImageScanningConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.property.ecrConfiguration">ecrConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a></code> | ecr_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.property.imageScanningEnabled">imageScanningEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#image_scanning_enabled ImagebuilderImage#image_scanning_enabled}. |

---

##### `ecrConfiguration`<sup>Optional</sup> <a name="ecrConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.property.ecrConfiguration"></a>

```typescript
public readonly ecrConfiguration: ImagebuilderImageImageScanningConfigurationEcrConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a>

ecr_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#ecr_configuration ImagebuilderImage#ecr_configuration}

---

##### `imageScanningEnabled`<sup>Optional</sup> <a name="imageScanningEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.property.imageScanningEnabled"></a>

```typescript
public readonly imageScanningEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#image_scanning_enabled ImagebuilderImage#image_scanning_enabled}.

---

### ImagebuilderImageImageScanningConfigurationEcrConfiguration <a name="ImagebuilderImageImageScanningConfigurationEcrConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

const imagebuilderImageImageScanningConfigurationEcrConfiguration: imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.property.containerTags">containerTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#container_tags ImagebuilderImage#container_tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.property.repositoryName">repositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#repository_name ImagebuilderImage#repository_name}. |

---

##### `containerTags`<sup>Optional</sup> <a name="containerTags" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.property.containerTags"></a>

```typescript
public readonly containerTags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#container_tags ImagebuilderImage#container_tags}.

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#repository_name ImagebuilderImage#repository_name}.

---

### ImagebuilderImageImageTestsConfiguration <a name="ImagebuilderImageImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

const imagebuilderImageImageTestsConfiguration: imagebuilderImage.ImagebuilderImageImageTestsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.imageTestsEnabled">imageTestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#image_tests_enabled ImagebuilderImage#image_tests_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#timeout_minutes ImagebuilderImage#timeout_minutes}. |

---

##### `imageTestsEnabled`<sup>Optional</sup> <a name="imageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.imageTestsEnabled"></a>

```typescript
public readonly imageTestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#image_tests_enabled ImagebuilderImage#image_tests_enabled}.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#timeout_minutes ImagebuilderImage#timeout_minutes}.

---

### ImagebuilderImageOutputResources <a name="ImagebuilderImageOutputResources" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

const imagebuilderImageOutputResources: imagebuilderImage.ImagebuilderImageOutputResources = { ... }
```


### ImagebuilderImageOutputResourcesAmis <a name="ImagebuilderImageOutputResourcesAmis" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

const imagebuilderImageOutputResourcesAmis: imagebuilderImage.ImagebuilderImageOutputResourcesAmis = { ... }
```


### ImagebuilderImageOutputResourcesContainers <a name="ImagebuilderImageOutputResourcesContainers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainers.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

const imagebuilderImageOutputResourcesContainers: imagebuilderImage.ImagebuilderImageOutputResourcesContainers = { ... }
```


### ImagebuilderImageTimeouts <a name="ImagebuilderImageTimeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

const imagebuilderImageTimeouts: imagebuilderImage.ImagebuilderImageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#create ImagebuilderImage#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#create ImagebuilderImage#create}.

---

### ImagebuilderImageWorkflow <a name="ImagebuilderImageWorkflow" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

const imagebuilderImageWorkflow: imagebuilderImage.ImagebuilderImageWorkflow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.workflowArn">workflowArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#workflow_arn ImagebuilderImage#workflow_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.onFailure">onFailure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#on_failure ImagebuilderImage#on_failure}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.parallelGroup">parallelGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#parallel_group ImagebuilderImage#parallel_group}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]</code> | parameter block. |

---

##### `workflowArn`<sup>Required</sup> <a name="workflowArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.workflowArn"></a>

```typescript
public readonly workflowArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#workflow_arn ImagebuilderImage#workflow_arn}.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.onFailure"></a>

```typescript
public readonly onFailure: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#on_failure ImagebuilderImage#on_failure}.

---

##### `parallelGroup`<sup>Optional</sup> <a name="parallelGroup" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.parallelGroup"></a>

```typescript
public readonly parallelGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#parallel_group ImagebuilderImage#parallel_group}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | ImagebuilderImageWorkflowParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#parameter ImagebuilderImage#parameter}

---

### ImagebuilderImageWorkflowParameter <a name="ImagebuilderImageWorkflowParameter" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

const imagebuilderImageWorkflowParameter: imagebuilderImage.ImagebuilderImageWorkflowParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#name ImagebuilderImage#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#value ImagebuilderImage#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#name ImagebuilderImage#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/imagebuilder_image#value ImagebuilderImage#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference <a name="ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags">resetContainerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName">resetRepositoryName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerTags` <a name="resetContainerTags" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags"></a>

```typescript
public resetContainerTags(): void
```

##### `resetRepositoryName` <a name="resetRepositoryName" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName"></a>

```typescript
public resetRepositoryName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput">containerTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags">containerTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerTagsInput`<sup>Optional</sup> <a name="containerTagsInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput"></a>

```typescript
public readonly containerTagsInput: string[];
```

- *Type:* string[]

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `containerTags`<sup>Required</sup> <a name="containerTags" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags"></a>

```typescript
public readonly containerTags: string[];
```

- *Type:* string[]

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderImageImageScanningConfigurationEcrConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a>

---


### ImagebuilderImageImageScanningConfigurationOutputReference <a name="ImagebuilderImageImageScanningConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.putEcrConfiguration">putEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resetEcrConfiguration">resetEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resetImageScanningEnabled">resetImageScanningEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEcrConfiguration` <a name="putEcrConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.putEcrConfiguration"></a>

```typescript
public putEcrConfiguration(value: ImagebuilderImageImageScanningConfigurationEcrConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.putEcrConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a>

---

##### `resetEcrConfiguration` <a name="resetEcrConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resetEcrConfiguration"></a>

```typescript
public resetEcrConfiguration(): void
```

##### `resetImageScanningEnabled` <a name="resetImageScanningEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resetImageScanningEnabled"></a>

```typescript
public resetImageScanningEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.ecrConfiguration">ecrConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.ecrConfigurationInput">ecrConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.imageScanningEnabledInput">imageScanningEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.imageScanningEnabled">imageScanningEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ecrConfiguration`<sup>Required</sup> <a name="ecrConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.ecrConfiguration"></a>

```typescript
public readonly ecrConfiguration: ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference</a>

---

##### `ecrConfigurationInput`<sup>Optional</sup> <a name="ecrConfigurationInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.ecrConfigurationInput"></a>

```typescript
public readonly ecrConfigurationInput: ImagebuilderImageImageScanningConfigurationEcrConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a>

---

##### `imageScanningEnabledInput`<sup>Optional</sup> <a name="imageScanningEnabledInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.imageScanningEnabledInput"></a>

```typescript
public readonly imageScanningEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `imageScanningEnabled`<sup>Required</sup> <a name="imageScanningEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.imageScanningEnabled"></a>

```typescript
public readonly imageScanningEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderImageImageScanningConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a>

---


### ImagebuilderImageImageTestsConfigurationOutputReference <a name="ImagebuilderImageImageTestsConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetImageTestsEnabled">resetImageTestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetTimeoutMinutes">resetTimeoutMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageTestsEnabled` <a name="resetImageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetImageTestsEnabled"></a>

```typescript
public resetImageTestsEnabled(): void
```

##### `resetTimeoutMinutes` <a name="resetTimeoutMinutes" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetTimeoutMinutes"></a>

```typescript
public resetTimeoutMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabledInput">imageTestsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutesInput">timeoutMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabled">imageTestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageTestsEnabledInput`<sup>Optional</sup> <a name="imageTestsEnabledInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabledInput"></a>

```typescript
public readonly imageTestsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutMinutesInput`<sup>Optional</sup> <a name="timeoutMinutesInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutesInput"></a>

```typescript
public readonly timeoutMinutesInput: number;
```

- *Type:* number

---

##### `imageTestsEnabled`<sup>Required</sup> <a name="imageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabled"></a>

```typescript
public readonly imageTestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutMinutes`<sup>Required</sup> <a name="timeoutMinutes" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderImageImageTestsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---


### ImagebuilderImageOutputResourcesAmisList <a name="ImagebuilderImageOutputResourcesAmisList" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageOutputResourcesAmisList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.get"></a>

```typescript
public get(index: number): ImagebuilderImageOutputResourcesAmisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ImagebuilderImageOutputResourcesAmisOutputReference <a name="ImagebuilderImageOutputResourcesAmisOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis">ImagebuilderImageOutputResourcesAmis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderImageOutputResourcesAmis;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis">ImagebuilderImageOutputResourcesAmis</a>

---


### ImagebuilderImageOutputResourcesContainersList <a name="ImagebuilderImageOutputResourcesContainersList" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageOutputResourcesContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.get"></a>

```typescript
public get(index: number): ImagebuilderImageOutputResourcesContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ImagebuilderImageOutputResourcesContainersOutputReference <a name="ImagebuilderImageOutputResourcesContainersOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.imageUris">imageUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainers">ImagebuilderImageOutputResourcesContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageUris`<sup>Required</sup> <a name="imageUris" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.imageUris"></a>

```typescript
public readonly imageUris: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderImageOutputResourcesContainers;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainers">ImagebuilderImageOutputResourcesContainers</a>

---


### ImagebuilderImageOutputResourcesList <a name="ImagebuilderImageOutputResourcesList" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageOutputResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.get"></a>

```typescript
public get(index: number): ImagebuilderImageOutputResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ImagebuilderImageOutputResourcesOutputReference <a name="ImagebuilderImageOutputResourcesOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.amis">amis</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList">ImagebuilderImageOutputResourcesAmisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList">ImagebuilderImageOutputResourcesContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources">ImagebuilderImageOutputResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amis`<sup>Required</sup> <a name="amis" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.amis"></a>

```typescript
public readonly amis: ImagebuilderImageOutputResourcesAmisList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList">ImagebuilderImageOutputResourcesAmisList</a>

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.containers"></a>

```typescript
public readonly containers: ImagebuilderImageOutputResourcesContainersList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList">ImagebuilderImageOutputResourcesContainersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderImageOutputResources;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources">ImagebuilderImageOutputResources</a>

---


### ImagebuilderImageTimeoutsOutputReference <a name="ImagebuilderImageTimeoutsOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a>

---


### ImagebuilderImageWorkflowList <a name="ImagebuilderImageWorkflowList" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageWorkflowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.get"></a>

```typescript
public get(index: number): ImagebuilderImageWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageWorkflow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]

---


### ImagebuilderImageWorkflowOutputReference <a name="ImagebuilderImageWorkflowOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageWorkflowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resetParallelGroup">resetParallelGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resetParameter">resetParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameter` <a name="putParameter" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.putParameter"></a>

```typescript
public putParameter(value: IResolvable | ImagebuilderImageWorkflowParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resetOnFailure"></a>

```typescript
public resetOnFailure(): void
```

##### `resetParallelGroup` <a name="resetParallelGroup" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resetParallelGroup"></a>

```typescript
public resetParallelGroup(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList">ImagebuilderImageWorkflowParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.onFailureInput">onFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parallelGroupInput">parallelGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.workflowArnInput">workflowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.onFailure">onFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parallelGroup">parallelGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.workflowArn">workflowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parameter"></a>

```typescript
public readonly parameter: ImagebuilderImageWorkflowParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList">ImagebuilderImageWorkflowParameterList</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.onFailureInput"></a>

```typescript
public readonly onFailureInput: string;
```

- *Type:* string

---

##### `parallelGroupInput`<sup>Optional</sup> <a name="parallelGroupInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parallelGroupInput"></a>

```typescript
public readonly parallelGroupInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | ImagebuilderImageWorkflowParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]

---

##### `workflowArnInput`<sup>Optional</sup> <a name="workflowArnInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.workflowArnInput"></a>

```typescript
public readonly workflowArnInput: string;
```

- *Type:* string

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.onFailure"></a>

```typescript
public readonly onFailure: string;
```

- *Type:* string

---

##### `parallelGroup`<sup>Required</sup> <a name="parallelGroup" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parallelGroup"></a>

```typescript
public readonly parallelGroup: string;
```

- *Type:* string

---

##### `workflowArn`<sup>Required</sup> <a name="workflowArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.workflowArn"></a>

```typescript
public readonly workflowArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageWorkflow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>

---


### ImagebuilderImageWorkflowParameterList <a name="ImagebuilderImageWorkflowParameterList" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageWorkflowParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.get"></a>

```typescript
public get(index: number): ImagebuilderImageWorkflowParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageWorkflowParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]

---


### ImagebuilderImageWorkflowParameterOutputReference <a name="ImagebuilderImageWorkflowParameterOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktf/provider-aws'

new imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageWorkflowParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>

---



