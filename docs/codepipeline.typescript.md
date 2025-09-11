# `codepipeline` Submodule <a name="`codepipeline` Submodule" id="@cdktf/provider-aws.codepipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Codepipeline <a name="Codepipeline" id="@cdktf/provider-aws.codepipeline.Codepipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline aws_codepipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.Codepipeline(scope: Construct, id: string, config: CodepipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig">CodepipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig">CodepipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putArtifactStore">putArtifactStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putStage">putStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putVariable">putVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetExecutionMode">resetExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetPipelineType">resetPipelineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetTrigger">resetTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetVariable">resetVariable</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.Codepipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codepipeline.Codepipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codepipeline.Codepipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codepipeline.Codepipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codepipeline.Codepipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.codepipeline.Codepipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codepipeline.Codepipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codepipeline.Codepipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.codepipeline.Codepipeline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codepipeline.Codepipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.codepipeline.Codepipeline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.codepipeline.Codepipeline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.Codepipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArtifactStore` <a name="putArtifactStore" id="@cdktf/provider-aws.codepipeline.Codepipeline.putArtifactStore"></a>

```typescript
public putArtifactStore(value: IResolvable | CodepipelineArtifactStore[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putArtifactStore.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]

---

##### `putStage` <a name="putStage" id="@cdktf/provider-aws.codepipeline.Codepipeline.putStage"></a>

```typescript
public putStage(value: IResolvable | CodepipelineStage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putStage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]

---

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-aws.codepipeline.Codepipeline.putTrigger"></a>

```typescript
public putTrigger(value: IResolvable | CodepipelineTrigger[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putTrigger.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>[]

---

##### `putVariable` <a name="putVariable" id="@cdktf/provider-aws.codepipeline.Codepipeline.putVariable"></a>

```typescript
public putVariable(value: IResolvable | CodepipelineVariable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putVariable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>[]

---

##### `resetExecutionMode` <a name="resetExecutionMode" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetExecutionMode"></a>

```typescript
public resetExecutionMode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPipelineType` <a name="resetPipelineType" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetPipelineType"></a>

```typescript
public resetPipelineType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetTrigger"></a>

```typescript
public resetTrigger(): void
```

##### `resetVariable` <a name="resetVariable" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetVariable"></a>

```typescript
public resetVariable(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Codepipeline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codepipeline.Codepipeline.isConstruct"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

codepipeline.Codepipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipeline.Codepipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformElement"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

codepipeline.Codepipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformResource"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

codepipeline.Codepipeline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

codepipeline.Codepipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Codepipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Codepipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Codepipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Codepipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStore">artifactStore</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList">CodepipelineArtifactStoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.stage">stage</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList">CodepipelineStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList">CodepipelineTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.triggerAll">triggerAll</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList">CodepipelineTriggerAllList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList">CodepipelineVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStoreInput">artifactStoreInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.executionModeInput">executionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.pipelineTypeInput">pipelineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.stageInput">stageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.triggerInput">triggerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.variableInput">variableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.executionMode">executionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.pipelineType">pipelineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `artifactStore`<sup>Required</sup> <a name="artifactStore" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStore"></a>

```typescript
public readonly artifactStore: CodepipelineArtifactStoreList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList">CodepipelineArtifactStoreList</a>

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.stage"></a>

```typescript
public readonly stage: CodepipelineStageList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList">CodepipelineStageList</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.trigger"></a>

```typescript
public readonly trigger: CodepipelineTriggerList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList">CodepipelineTriggerList</a>

---

##### `triggerAll`<sup>Required</sup> <a name="triggerAll" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.triggerAll"></a>

```typescript
public readonly triggerAll: CodepipelineTriggerAllList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList">CodepipelineTriggerAllList</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.variable"></a>

```typescript
public readonly variable: CodepipelineVariableList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList">CodepipelineVariableList</a>

---

##### `artifactStoreInput`<sup>Optional</sup> <a name="artifactStoreInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStoreInput"></a>

```typescript
public readonly artifactStoreInput: IResolvable | CodepipelineArtifactStore[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]

---

##### `executionModeInput`<sup>Optional</sup> <a name="executionModeInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.executionModeInput"></a>

```typescript
public readonly executionModeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pipelineTypeInput`<sup>Optional</sup> <a name="pipelineTypeInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.pipelineTypeInput"></a>

```typescript
public readonly pipelineTypeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.stageInput"></a>

```typescript
public readonly stageInput: IResolvable | CodepipelineStage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.triggerInput"></a>

```typescript
public readonly triggerInput: IResolvable | CodepipelineTrigger[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>[]

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.variableInput"></a>

```typescript
public readonly variableInput: IResolvable | CodepipelineVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>[]

---

##### `executionMode`<sup>Required</sup> <a name="executionMode" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.executionMode"></a>

```typescript
public readonly executionMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pipelineType`<sup>Required</sup> <a name="pipelineType" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.pipelineType"></a>

```typescript
public readonly pipelineType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineArtifactStore <a name="CodepipelineArtifactStore" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineArtifactStore: codepipeline.CodepipelineArtifactStore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#location Codepipeline#location}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#type Codepipeline#type}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#region Codepipeline#region}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#location Codepipeline#location}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#type Codepipeline#type}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: CodepipelineArtifactStoreEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#encryption_key Codepipeline#encryption_key}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#region Codepipeline#region}.

---

### CodepipelineArtifactStoreEncryptionKey <a name="CodepipelineArtifactStoreEncryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineArtifactStoreEncryptionKey: codepipeline.CodepipelineArtifactStoreEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#id Codepipeline#id}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#type Codepipeline#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#type Codepipeline#type}.

---

### CodepipelineConfig <a name="CodepipelineConfig" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineConfig: codepipeline.CodepipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.artifactStore">artifactStore</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]</code> | artifact_store block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.stage">stage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]</code> | stage block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.executionMode">executionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#execution_mode Codepipeline#execution_mode}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#id Codepipeline#id}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.pipelineType">pipelineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#tags Codepipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#tags_all Codepipeline#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.trigger">trigger</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>[]</code> | trigger block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.variable">variable</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>[]</code> | variable block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactStore`<sup>Required</sup> <a name="artifactStore" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.artifactStore"></a>

```typescript
public readonly artifactStore: IResolvable | CodepipelineArtifactStore[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]

artifact_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#artifact_store Codepipeline#artifact_store}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.stage"></a>

```typescript
public readonly stage: IResolvable | CodepipelineStage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#stage Codepipeline#stage}

---

##### `executionMode`<sup>Optional</sup> <a name="executionMode" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.executionMode"></a>

```typescript
public readonly executionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#execution_mode Codepipeline#execution_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipelineType`<sup>Optional</sup> <a name="pipelineType" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.pipelineType"></a>

```typescript
public readonly pipelineType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#region Codepipeline#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#tags Codepipeline#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#tags_all Codepipeline#tags_all}.

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.trigger"></a>

```typescript
public readonly trigger: IResolvable | CodepipelineTrigger[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>[]

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#trigger Codepipeline#trigger}

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.variable"></a>

```typescript
public readonly variable: IResolvable | CodepipelineVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>[]

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#variable Codepipeline#variable}

---

### CodepipelineStage <a name="CodepipelineStage" id="@cdktf/provider-aws.codepipeline.CodepipelineStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStage: codepipeline.CodepipelineStage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.action">action</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.beforeEntry">beforeEntry</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry">CodepipelineStageBeforeEntry</a></code> | before_entry block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure">CodepipelineStageOnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess">CodepipelineStageOnSuccess</a></code> | on_success block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.action"></a>

```typescript
public readonly action: IResolvable | CodepipelineStageAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#action Codepipeline#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `beforeEntry`<sup>Optional</sup> <a name="beforeEntry" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.beforeEntry"></a>

```typescript
public readonly beforeEntry: CodepipelineStageBeforeEntry;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry">CodepipelineStageBeforeEntry</a>

before_entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#before_entry Codepipeline#before_entry}

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.onFailure"></a>

```typescript
public readonly onFailure: CodepipelineStageOnFailure;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure">CodepipelineStageOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#on_failure Codepipeline#on_failure}

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.onSuccess"></a>

```typescript
public readonly onSuccess: CodepipelineStageOnSuccess;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess">CodepipelineStageOnSuccess</a>

on_success block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#on_success Codepipeline#on_success}

---

### CodepipelineStageAction <a name="CodepipelineStageAction" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageAction: codepipeline.CodepipelineStageAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#category Codepipeline#category}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#owner Codepipeline#owner}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#provider Codepipeline#provider}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#version Codepipeline#version}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#configuration Codepipeline#configuration}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.inputArtifacts">inputArtifacts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#namespace Codepipeline#namespace}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.outputArtifacts">outputArtifacts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#output_artifacts Codepipeline#output_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#region Codepipeline#region}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.runOrder">runOrder</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#run_order Codepipeline#run_order}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#category Codepipeline#category}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#owner Codepipeline#owner}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#provider Codepipeline#provider}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#version Codepipeline#version}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#configuration Codepipeline#configuration}.

---

##### `inputArtifacts`<sup>Optional</sup> <a name="inputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#namespace Codepipeline#namespace}.

---

##### `outputArtifacts`<sup>Optional</sup> <a name="outputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.outputArtifacts"></a>

```typescript
public readonly outputArtifacts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#output_artifacts Codepipeline#output_artifacts}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#region Codepipeline#region}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `runOrder`<sup>Optional</sup> <a name="runOrder" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.runOrder"></a>

```typescript
public readonly runOrder: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#run_order Codepipeline#run_order}.

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}.

---

### CodepipelineStageBeforeEntry <a name="CodepipelineStageBeforeEntry" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageBeforeEntry: codepipeline.CodepipelineStageBeforeEntry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a></code> | condition block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry.property.condition"></a>

```typescript
public readonly condition: CodepipelineStageBeforeEntryCondition;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#condition Codepipeline#condition}

---

### CodepipelineStageBeforeEntryCondition <a name="CodepipelineStageBeforeEntryCondition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageBeforeEntryCondition: codepipeline.CodepipelineStageBeforeEntryCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition.property.result">result</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#result Codepipeline#result}. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition.property.rule"></a>

```typescript
public readonly rule: IResolvable | CodepipelineStageBeforeEntryConditionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#rule Codepipeline#rule}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#result Codepipeline#result}.

---

### CodepipelineStageBeforeEntryConditionRule <a name="CodepipelineStageBeforeEntryConditionRule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageBeforeEntryConditionRule: codepipeline.CodepipelineStageBeforeEntryConditionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.ruleTypeId">ruleTypeId</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId">CodepipelineStageBeforeEntryConditionRuleRuleTypeId</a></code> | rule_type_id block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.commands">commands</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#commands Codepipeline#commands}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#configuration Codepipeline#configuration}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.inputArtifacts">inputArtifacts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#region Codepipeline#region}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `ruleTypeId`<sup>Required</sup> <a name="ruleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.ruleTypeId"></a>

```typescript
public readonly ruleTypeId: CodepipelineStageBeforeEntryConditionRuleRuleTypeId;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId">CodepipelineStageBeforeEntryConditionRuleRuleTypeId</a>

rule_type_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#rule_type_id Codepipeline#rule_type_id}

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#commands Codepipeline#commands}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#configuration Codepipeline#configuration}.

---

##### `inputArtifacts`<sup>Optional</sup> <a name="inputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#region Codepipeline#region}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}.

---

### CodepipelineStageBeforeEntryConditionRuleRuleTypeId <a name="CodepipelineStageBeforeEntryConditionRuleRuleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageBeforeEntryConditionRuleRuleTypeId: codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#category Codepipeline#category}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#provider Codepipeline#provider}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#owner Codepipeline#owner}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#version Codepipeline#version}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#category Codepipeline#category}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#provider Codepipeline#provider}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#owner Codepipeline#owner}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#version Codepipeline#version}.

---

### CodepipelineStageOnFailure <a name="CodepipelineStageOnFailure" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageOnFailure: codepipeline.CodepipelineStageOnFailure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.property.result">result</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#result Codepipeline#result}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.property.retryConfiguration">retryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a></code> | retry_configuration block. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.property.condition"></a>

```typescript
public readonly condition: CodepipelineStageOnFailureCondition;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#condition Codepipeline#condition}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#result Codepipeline#result}.

---

##### `retryConfiguration`<sup>Optional</sup> <a name="retryConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.property.retryConfiguration"></a>

```typescript
public readonly retryConfiguration: CodepipelineStageOnFailureRetryConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a>

retry_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#retry_configuration Codepipeline#retry_configuration}

---

### CodepipelineStageOnFailureCondition <a name="CodepipelineStageOnFailureCondition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageOnFailureCondition: codepipeline.CodepipelineStageOnFailureCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition.property.result">result</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#result Codepipeline#result}. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition.property.rule"></a>

```typescript
public readonly rule: IResolvable | CodepipelineStageOnFailureConditionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#rule Codepipeline#rule}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#result Codepipeline#result}.

---

### CodepipelineStageOnFailureConditionRule <a name="CodepipelineStageOnFailureConditionRule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageOnFailureConditionRule: codepipeline.CodepipelineStageOnFailureConditionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.ruleTypeId">ruleTypeId</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId">CodepipelineStageOnFailureConditionRuleRuleTypeId</a></code> | rule_type_id block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.commands">commands</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#commands Codepipeline#commands}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#configuration Codepipeline#configuration}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.inputArtifacts">inputArtifacts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#region Codepipeline#region}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `ruleTypeId`<sup>Required</sup> <a name="ruleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.ruleTypeId"></a>

```typescript
public readonly ruleTypeId: CodepipelineStageOnFailureConditionRuleRuleTypeId;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId">CodepipelineStageOnFailureConditionRuleRuleTypeId</a>

rule_type_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#rule_type_id Codepipeline#rule_type_id}

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#commands Codepipeline#commands}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#configuration Codepipeline#configuration}.

---

##### `inputArtifacts`<sup>Optional</sup> <a name="inputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#region Codepipeline#region}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}.

---

### CodepipelineStageOnFailureConditionRuleRuleTypeId <a name="CodepipelineStageOnFailureConditionRuleRuleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageOnFailureConditionRuleRuleTypeId: codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#category Codepipeline#category}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#provider Codepipeline#provider}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#owner Codepipeline#owner}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#version Codepipeline#version}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#category Codepipeline#category}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#provider Codepipeline#provider}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#owner Codepipeline#owner}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#version Codepipeline#version}.

---

### CodepipelineStageOnFailureRetryConfiguration <a name="CodepipelineStageOnFailureRetryConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageOnFailureRetryConfiguration: codepipeline.CodepipelineStageOnFailureRetryConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration.property.retryMode">retryMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#retry_mode Codepipeline#retry_mode}. |

---

##### `retryMode`<sup>Optional</sup> <a name="retryMode" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration.property.retryMode"></a>

```typescript
public readonly retryMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#retry_mode Codepipeline#retry_mode}.

---

### CodepipelineStageOnSuccess <a name="CodepipelineStageOnSuccess" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageOnSuccess: codepipeline.CodepipelineStageOnSuccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a></code> | condition block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess.property.condition"></a>

```typescript
public readonly condition: CodepipelineStageOnSuccessCondition;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#condition Codepipeline#condition}

---

### CodepipelineStageOnSuccessCondition <a name="CodepipelineStageOnSuccessCondition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageOnSuccessCondition: codepipeline.CodepipelineStageOnSuccessCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition.property.result">result</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#result Codepipeline#result}. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition.property.rule"></a>

```typescript
public readonly rule: IResolvable | CodepipelineStageOnSuccessConditionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#rule Codepipeline#rule}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#result Codepipeline#result}.

---

### CodepipelineStageOnSuccessConditionRule <a name="CodepipelineStageOnSuccessConditionRule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageOnSuccessConditionRule: codepipeline.CodepipelineStageOnSuccessConditionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.ruleTypeId">ruleTypeId</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId">CodepipelineStageOnSuccessConditionRuleRuleTypeId</a></code> | rule_type_id block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.commands">commands</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#commands Codepipeline#commands}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#configuration Codepipeline#configuration}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.inputArtifacts">inputArtifacts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#region Codepipeline#region}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `ruleTypeId`<sup>Required</sup> <a name="ruleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.ruleTypeId"></a>

```typescript
public readonly ruleTypeId: CodepipelineStageOnSuccessConditionRuleRuleTypeId;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId">CodepipelineStageOnSuccessConditionRuleRuleTypeId</a>

rule_type_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#rule_type_id Codepipeline#rule_type_id}

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#commands Codepipeline#commands}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#configuration Codepipeline#configuration}.

---

##### `inputArtifacts`<sup>Optional</sup> <a name="inputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#region Codepipeline#region}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}.

---

### CodepipelineStageOnSuccessConditionRuleRuleTypeId <a name="CodepipelineStageOnSuccessConditionRuleRuleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageOnSuccessConditionRuleRuleTypeId: codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#category Codepipeline#category}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#provider Codepipeline#provider}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#owner Codepipeline#owner}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#version Codepipeline#version}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#category Codepipeline#category}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#provider Codepipeline#provider}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#owner Codepipeline#owner}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#version Codepipeline#version}.

---

### CodepipelineTrigger <a name="CodepipelineTrigger" id="@cdktf/provider-aws.codepipeline.CodepipelineTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTrigger.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTrigger: codepipeline.CodepipelineTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger.property.gitConfiguration">gitConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a></code> | git_configuration block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger.property.providerType">providerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#provider_type Codepipeline#provider_type}. |

---

##### `gitConfiguration`<sup>Required</sup> <a name="gitConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineTrigger.property.gitConfiguration"></a>

```typescript
public readonly gitConfiguration: CodepipelineTriggerGitConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a>

git_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#git_configuration Codepipeline#git_configuration}

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktf/provider-aws.codepipeline.CodepipelineTrigger.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#provider_type Codepipeline#provider_type}.

---

### CodepipelineTriggerAll <a name="CodepipelineTriggerAll" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAll.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerAll: codepipeline.CodepipelineTriggerAll = { ... }
```


### CodepipelineTriggerAllGitConfiguration <a name="CodepipelineTriggerAllGitConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfiguration.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerAllGitConfiguration: codepipeline.CodepipelineTriggerAllGitConfiguration = { ... }
```


### CodepipelineTriggerAllGitConfigurationPullRequest <a name="CodepipelineTriggerAllGitConfigurationPullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequest.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerAllGitConfigurationPullRequest: codepipeline.CodepipelineTriggerAllGitConfigurationPullRequest = { ... }
```


### CodepipelineTriggerAllGitConfigurationPullRequestBranches <a name="CodepipelineTriggerAllGitConfigurationPullRequestBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranches.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerAllGitConfigurationPullRequestBranches: codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranches = { ... }
```


### CodepipelineTriggerAllGitConfigurationPullRequestFilePaths <a name="CodepipelineTriggerAllGitConfigurationPullRequestFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePaths.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerAllGitConfigurationPullRequestFilePaths: codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePaths = { ... }
```


### CodepipelineTriggerAllGitConfigurationPush <a name="CodepipelineTriggerAllGitConfigurationPush" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPush.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerAllGitConfigurationPush: codepipeline.CodepipelineTriggerAllGitConfigurationPush = { ... }
```


### CodepipelineTriggerAllGitConfigurationPushBranches <a name="CodepipelineTriggerAllGitConfigurationPushBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranches.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerAllGitConfigurationPushBranches: codepipeline.CodepipelineTriggerAllGitConfigurationPushBranches = { ... }
```


### CodepipelineTriggerAllGitConfigurationPushFilePaths <a name="CodepipelineTriggerAllGitConfigurationPushFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePaths.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerAllGitConfigurationPushFilePaths: codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePaths = { ... }
```


### CodepipelineTriggerAllGitConfigurationPushTags <a name="CodepipelineTriggerAllGitConfigurationPushTags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTags.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerAllGitConfigurationPushTags: codepipeline.CodepipelineTriggerAllGitConfigurationPushTags = { ... }
```


### CodepipelineTriggerGitConfiguration <a name="CodepipelineTriggerGitConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerGitConfiguration: codepipeline.CodepipelineTriggerGitConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.sourceActionName">sourceActionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#source_action_name Codepipeline#source_action_name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.pullRequest">pullRequest</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>[]</code> | pull_request block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.push">push</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>[]</code> | push block. |

---

##### `sourceActionName`<sup>Required</sup> <a name="sourceActionName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.sourceActionName"></a>

```typescript
public readonly sourceActionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#source_action_name Codepipeline#source_action_name}.

---

##### `pullRequest`<sup>Optional</sup> <a name="pullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.pullRequest"></a>

```typescript
public readonly pullRequest: IResolvable | CodepipelineTriggerGitConfigurationPullRequest[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>[]

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#pull_request Codepipeline#pull_request}

---

##### `push`<sup>Optional</sup> <a name="push" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.push"></a>

```typescript
public readonly push: IResolvable | CodepipelineTriggerGitConfigurationPush[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>[]

push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#push Codepipeline#push}

---

### CodepipelineTriggerGitConfigurationPullRequest <a name="CodepipelineTriggerGitConfigurationPullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerGitConfigurationPullRequest: codepipeline.CodepipelineTriggerGitConfigurationPullRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a></code> | branches block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.events">events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#events Codepipeline#events}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.filePaths">filePaths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a></code> | file_paths block. |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.branches"></a>

```typescript
public readonly branches: CodepipelineTriggerGitConfigurationPullRequestBranches;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a>

branches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#branches Codepipeline#branches}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#events Codepipeline#events}.

---

##### `filePaths`<sup>Optional</sup> <a name="filePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.filePaths"></a>

```typescript
public readonly filePaths: CodepipelineTriggerGitConfigurationPullRequestFilePaths;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a>

file_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#file_paths Codepipeline#file_paths}

---

### CodepipelineTriggerGitConfigurationPullRequestBranches <a name="CodepipelineTriggerGitConfigurationPullRequestBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerGitConfigurationPullRequestBranches: codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.property.excludes">excludes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.property.includes">includes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineTriggerGitConfigurationPullRequestFilePaths <a name="CodepipelineTriggerGitConfigurationPullRequestFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerGitConfigurationPullRequestFilePaths: codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.property.excludes">excludes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.property.includes">includes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineTriggerGitConfigurationPush <a name="CodepipelineTriggerGitConfigurationPush" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerGitConfigurationPush: codepipeline.CodepipelineTriggerGitConfigurationPush = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a></code> | branches block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.filePaths">filePaths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a></code> | file_paths block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a></code> | tags block. |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.branches"></a>

```typescript
public readonly branches: CodepipelineTriggerGitConfigurationPushBranches;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a>

branches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#branches Codepipeline#branches}

---

##### `filePaths`<sup>Optional</sup> <a name="filePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.filePaths"></a>

```typescript
public readonly filePaths: CodepipelineTriggerGitConfigurationPushFilePaths;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a>

file_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#file_paths Codepipeline#file_paths}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.tags"></a>

```typescript
public readonly tags: CodepipelineTriggerGitConfigurationPushTags;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#tags Codepipeline#tags}

---

### CodepipelineTriggerGitConfigurationPushBranches <a name="CodepipelineTriggerGitConfigurationPushBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerGitConfigurationPushBranches: codepipeline.CodepipelineTriggerGitConfigurationPushBranches = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.property.excludes">excludes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.property.includes">includes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineTriggerGitConfigurationPushFilePaths <a name="CodepipelineTriggerGitConfigurationPushFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerGitConfigurationPushFilePaths: codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.property.excludes">excludes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.property.includes">includes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineTriggerGitConfigurationPushTags <a name="CodepipelineTriggerGitConfigurationPushTags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineTriggerGitConfigurationPushTags: codepipeline.CodepipelineTriggerGitConfigurationPushTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.property.excludes">excludes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.property.includes">includes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineVariable <a name="CodepipelineVariable" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineVariable: codepipeline.CodepipelineVariable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#default_value Codepipeline#default_value}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#description Codepipeline#description}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#default_value Codepipeline#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codepipeline#description Codepipeline#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineArtifactStoreEncryptionKeyOutputReference <a name="CodepipelineArtifactStoreEncryptionKeyOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineArtifactStoreEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

---


### CodepipelineArtifactStoreList <a name="CodepipelineArtifactStoreList" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineArtifactStoreList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.get"></a>

```typescript
public get(index: number): CodepipelineArtifactStoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineArtifactStore[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]

---


### CodepipelineArtifactStoreOutputReference <a name="CodepipelineArtifactStoreOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineArtifactStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey"></a>

```typescript
public putEncryptionKey(value: CodepipelineArtifactStoreEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

---

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference">CodepipelineArtifactStoreEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: CodepipelineArtifactStoreEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference">CodepipelineArtifactStoreEncryptionKeyOutputReference</a>

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: CodepipelineArtifactStoreEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineArtifactStore;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>

---


### CodepipelineStageActionList <a name="CodepipelineStageActionList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.get"></a>

```typescript
public get(index: number): CodepipelineStageActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineStageAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]

---


### CodepipelineStageActionOutputReference <a name="CodepipelineStageActionOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetInputArtifacts">resetInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetOutputArtifacts">resetOutputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRunOrder">resetRunOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetTimeoutInMinutes">resetTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetInputArtifacts` <a name="resetInputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetInputArtifacts"></a>

```typescript
public resetInputArtifacts(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOutputArtifacts` <a name="resetOutputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetOutputArtifacts"></a>

```typescript
public resetOutputArtifacts(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetRunOrder` <a name="resetRunOrder" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRunOrder"></a>

```typescript
public resetRunOrder(): void
```

##### `resetTimeoutInMinutes` <a name="resetTimeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetTimeoutInMinutes"></a>

```typescript
public resetTimeoutInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configurationInput">configurationInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifactsInput">inputArtifactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifactsInput">outputArtifactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrderInput">runOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.timeoutInMinutesInput">timeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifacts">outputArtifacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrder">runOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configurationInput"></a>

```typescript
public readonly configurationInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputArtifactsInput`<sup>Optional</sup> <a name="inputArtifactsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifactsInput"></a>

```typescript
public readonly inputArtifactsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `outputArtifactsInput`<sup>Optional</sup> <a name="outputArtifactsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifactsInput"></a>

```typescript
public readonly outputArtifactsInput: string[];
```

- *Type:* string[]

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `runOrderInput`<sup>Optional</sup> <a name="runOrderInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrderInput"></a>

```typescript
public readonly runOrderInput: number;
```

- *Type:* number

---

##### `timeoutInMinutesInput`<sup>Optional</sup> <a name="timeoutInMinutesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.timeoutInMinutesInput"></a>

```typescript
public readonly timeoutInMinutesInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `outputArtifacts`<sup>Required</sup> <a name="outputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifacts"></a>

```typescript
public readonly outputArtifacts: string[];
```

- *Type:* string[]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `runOrder`<sup>Required</sup> <a name="runOrder" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrder"></a>

```typescript
public readonly runOrder: number;
```

- *Type:* number

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineStageAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>

---


### CodepipelineStageBeforeEntryConditionOutputReference <a name="CodepipelineStageBeforeEntryConditionOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageBeforeEntryConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.resetResult">resetResult</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | CodepipelineStageBeforeEntryConditionRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>[]

---

##### `resetResult` <a name="resetResult" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.resetResult"></a>

```typescript
public resetResult(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList">CodepipelineStageBeforeEntryConditionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.resultInput">resultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.rule"></a>

```typescript
public readonly rule: CodepipelineStageBeforeEntryConditionRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList">CodepipelineStageBeforeEntryConditionRuleList</a>

---

##### `resultInput`<sup>Optional</sup> <a name="resultInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.resultInput"></a>

```typescript
public readonly resultInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | CodepipelineStageBeforeEntryConditionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>[]

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineStageBeforeEntryCondition;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a>

---


### CodepipelineStageBeforeEntryConditionRuleList <a name="CodepipelineStageBeforeEntryConditionRuleList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageBeforeEntryConditionRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.get"></a>

```typescript
public get(index: number): CodepipelineStageBeforeEntryConditionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineStageBeforeEntryConditionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>[]

---


### CodepipelineStageBeforeEntryConditionRuleOutputReference <a name="CodepipelineStageBeforeEntryConditionRuleOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.putRuleTypeId">putRuleTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetCommands">resetCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetInputArtifacts">resetInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetTimeoutInMinutes">resetTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRuleTypeId` <a name="putRuleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.putRuleTypeId"></a>

```typescript
public putRuleTypeId(value: CodepipelineStageBeforeEntryConditionRuleRuleTypeId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.putRuleTypeId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId">CodepipelineStageBeforeEntryConditionRuleRuleTypeId</a>

---

##### `resetCommands` <a name="resetCommands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetCommands"></a>

```typescript
public resetCommands(): void
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetInputArtifacts` <a name="resetInputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetInputArtifacts"></a>

```typescript
public resetInputArtifacts(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTimeoutInMinutes` <a name="resetTimeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetTimeoutInMinutes"></a>

```typescript
public resetTimeoutInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.ruleTypeId">ruleTypeId</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference">CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.commandsInput">commandsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.configurationInput">configurationInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.inputArtifactsInput">inputArtifactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.ruleTypeIdInput">ruleTypeIdInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId">CodepipelineStageBeforeEntryConditionRuleRuleTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.timeoutInMinutesInput">timeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.commands">commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleTypeId`<sup>Required</sup> <a name="ruleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.ruleTypeId"></a>

```typescript
public readonly ruleTypeId: CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference">CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference</a>

---

##### `commandsInput`<sup>Optional</sup> <a name="commandsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.commandsInput"></a>

```typescript
public readonly commandsInput: string[];
```

- *Type:* string[]

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.configurationInput"></a>

```typescript
public readonly configurationInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputArtifactsInput`<sup>Optional</sup> <a name="inputArtifactsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.inputArtifactsInput"></a>

```typescript
public readonly inputArtifactsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `ruleTypeIdInput`<sup>Optional</sup> <a name="ruleTypeIdInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.ruleTypeIdInput"></a>

```typescript
public readonly ruleTypeIdInput: CodepipelineStageBeforeEntryConditionRuleRuleTypeId;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId">CodepipelineStageBeforeEntryConditionRuleRuleTypeId</a>

---

##### `timeoutInMinutesInput`<sup>Optional</sup> <a name="timeoutInMinutesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.timeoutInMinutesInput"></a>

```typescript
public readonly timeoutInMinutesInput: number;
```

- *Type:* number

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineStageBeforeEntryConditionRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>

---


### CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference <a name="CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId">CodepipelineStageBeforeEntryConditionRuleRuleTypeId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineStageBeforeEntryConditionRuleRuleTypeId;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId">CodepipelineStageBeforeEntryConditionRuleRuleTypeId</a>

---


### CodepipelineStageBeforeEntryOutputReference <a name="CodepipelineStageBeforeEntryOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageBeforeEntryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.putCondition">putCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.putCondition"></a>

```typescript
public putCondition(value: CodepipelineStageBeforeEntryCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference">CodepipelineStageBeforeEntryConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry">CodepipelineStageBeforeEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.condition"></a>

```typescript
public readonly condition: CodepipelineStageBeforeEntryConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference">CodepipelineStageBeforeEntryConditionOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: CodepipelineStageBeforeEntryCondition;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineStageBeforeEntry;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry">CodepipelineStageBeforeEntry</a>

---


### CodepipelineStageList <a name="CodepipelineStageList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.get"></a>

```typescript
public get(index: number): CodepipelineStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineStage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]

---


### CodepipelineStageOnFailureConditionOutputReference <a name="CodepipelineStageOnFailureConditionOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageOnFailureConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.resetResult">resetResult</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | CodepipelineStageOnFailureConditionRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>[]

---

##### `resetResult` <a name="resetResult" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.resetResult"></a>

```typescript
public resetResult(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList">CodepipelineStageOnFailureConditionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.resultInput">resultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.rule"></a>

```typescript
public readonly rule: CodepipelineStageOnFailureConditionRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList">CodepipelineStageOnFailureConditionRuleList</a>

---

##### `resultInput`<sup>Optional</sup> <a name="resultInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.resultInput"></a>

```typescript
public readonly resultInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | CodepipelineStageOnFailureConditionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>[]

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineStageOnFailureCondition;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a>

---


### CodepipelineStageOnFailureConditionRuleList <a name="CodepipelineStageOnFailureConditionRuleList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageOnFailureConditionRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.get"></a>

```typescript
public get(index: number): CodepipelineStageOnFailureConditionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineStageOnFailureConditionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>[]

---


### CodepipelineStageOnFailureConditionRuleOutputReference <a name="CodepipelineStageOnFailureConditionRuleOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.putRuleTypeId">putRuleTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetCommands">resetCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetInputArtifacts">resetInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetTimeoutInMinutes">resetTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRuleTypeId` <a name="putRuleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.putRuleTypeId"></a>

```typescript
public putRuleTypeId(value: CodepipelineStageOnFailureConditionRuleRuleTypeId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.putRuleTypeId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId">CodepipelineStageOnFailureConditionRuleRuleTypeId</a>

---

##### `resetCommands` <a name="resetCommands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetCommands"></a>

```typescript
public resetCommands(): void
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetInputArtifacts` <a name="resetInputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetInputArtifacts"></a>

```typescript
public resetInputArtifacts(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTimeoutInMinutes` <a name="resetTimeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetTimeoutInMinutes"></a>

```typescript
public resetTimeoutInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.ruleTypeId">ruleTypeId</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference">CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.commandsInput">commandsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.configurationInput">configurationInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.inputArtifactsInput">inputArtifactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.ruleTypeIdInput">ruleTypeIdInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId">CodepipelineStageOnFailureConditionRuleRuleTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.timeoutInMinutesInput">timeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.commands">commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleTypeId`<sup>Required</sup> <a name="ruleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.ruleTypeId"></a>

```typescript
public readonly ruleTypeId: CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference">CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference</a>

---

##### `commandsInput`<sup>Optional</sup> <a name="commandsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.commandsInput"></a>

```typescript
public readonly commandsInput: string[];
```

- *Type:* string[]

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.configurationInput"></a>

```typescript
public readonly configurationInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputArtifactsInput`<sup>Optional</sup> <a name="inputArtifactsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.inputArtifactsInput"></a>

```typescript
public readonly inputArtifactsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `ruleTypeIdInput`<sup>Optional</sup> <a name="ruleTypeIdInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.ruleTypeIdInput"></a>

```typescript
public readonly ruleTypeIdInput: CodepipelineStageOnFailureConditionRuleRuleTypeId;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId">CodepipelineStageOnFailureConditionRuleRuleTypeId</a>

---

##### `timeoutInMinutesInput`<sup>Optional</sup> <a name="timeoutInMinutesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.timeoutInMinutesInput"></a>

```typescript
public readonly timeoutInMinutesInput: number;
```

- *Type:* number

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineStageOnFailureConditionRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>

---


### CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference <a name="CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId">CodepipelineStageOnFailureConditionRuleRuleTypeId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineStageOnFailureConditionRuleRuleTypeId;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId">CodepipelineStageOnFailureConditionRuleRuleTypeId</a>

---


### CodepipelineStageOnFailureOutputReference <a name="CodepipelineStageOnFailureOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageOnFailureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.putRetryConfiguration">putRetryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resetResult">resetResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resetRetryConfiguration">resetRetryConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.putCondition"></a>

```typescript
public putCondition(value: CodepipelineStageOnFailureCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a>

---

##### `putRetryConfiguration` <a name="putRetryConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.putRetryConfiguration"></a>

```typescript
public putRetryConfiguration(value: CodepipelineStageOnFailureRetryConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.putRetryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetResult` <a name="resetResult" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resetResult"></a>

```typescript
public resetResult(): void
```

##### `resetRetryConfiguration` <a name="resetRetryConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resetRetryConfiguration"></a>

```typescript
public resetRetryConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference">CodepipelineStageOnFailureConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.retryConfiguration">retryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference">CodepipelineStageOnFailureRetryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.resultInput">resultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.retryConfigurationInput">retryConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure">CodepipelineStageOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.condition"></a>

```typescript
public readonly condition: CodepipelineStageOnFailureConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference">CodepipelineStageOnFailureConditionOutputReference</a>

---

##### `retryConfiguration`<sup>Required</sup> <a name="retryConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.retryConfiguration"></a>

```typescript
public readonly retryConfiguration: CodepipelineStageOnFailureRetryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference">CodepipelineStageOnFailureRetryConfigurationOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: CodepipelineStageOnFailureCondition;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a>

---

##### `resultInput`<sup>Optional</sup> <a name="resultInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.resultInput"></a>

```typescript
public readonly resultInput: string;
```

- *Type:* string

---

##### `retryConfigurationInput`<sup>Optional</sup> <a name="retryConfigurationInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.retryConfigurationInput"></a>

```typescript
public readonly retryConfigurationInput: CodepipelineStageOnFailureRetryConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineStageOnFailure;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure">CodepipelineStageOnFailure</a>

---


### CodepipelineStageOnFailureRetryConfigurationOutputReference <a name="CodepipelineStageOnFailureRetryConfigurationOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.resetRetryMode">resetRetryMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetryMode` <a name="resetRetryMode" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.resetRetryMode"></a>

```typescript
public resetRetryMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.retryModeInput">retryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.retryMode">retryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retryModeInput`<sup>Optional</sup> <a name="retryModeInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.retryModeInput"></a>

```typescript
public readonly retryModeInput: string;
```

- *Type:* string

---

##### `retryMode`<sup>Required</sup> <a name="retryMode" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.retryMode"></a>

```typescript
public readonly retryMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineStageOnFailureRetryConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a>

---


### CodepipelineStageOnSuccessConditionOutputReference <a name="CodepipelineStageOnSuccessConditionOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageOnSuccessConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.resetResult">resetResult</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | CodepipelineStageOnSuccessConditionRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>[]

---

##### `resetResult` <a name="resetResult" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.resetResult"></a>

```typescript
public resetResult(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList">CodepipelineStageOnSuccessConditionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.resultInput">resultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.rule"></a>

```typescript
public readonly rule: CodepipelineStageOnSuccessConditionRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList">CodepipelineStageOnSuccessConditionRuleList</a>

---

##### `resultInput`<sup>Optional</sup> <a name="resultInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.resultInput"></a>

```typescript
public readonly resultInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | CodepipelineStageOnSuccessConditionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>[]

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineStageOnSuccessCondition;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a>

---


### CodepipelineStageOnSuccessConditionRuleList <a name="CodepipelineStageOnSuccessConditionRuleList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageOnSuccessConditionRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.get"></a>

```typescript
public get(index: number): CodepipelineStageOnSuccessConditionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineStageOnSuccessConditionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>[]

---


### CodepipelineStageOnSuccessConditionRuleOutputReference <a name="CodepipelineStageOnSuccessConditionRuleOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.putRuleTypeId">putRuleTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetCommands">resetCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetInputArtifacts">resetInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetTimeoutInMinutes">resetTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRuleTypeId` <a name="putRuleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.putRuleTypeId"></a>

```typescript
public putRuleTypeId(value: CodepipelineStageOnSuccessConditionRuleRuleTypeId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.putRuleTypeId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId">CodepipelineStageOnSuccessConditionRuleRuleTypeId</a>

---

##### `resetCommands` <a name="resetCommands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetCommands"></a>

```typescript
public resetCommands(): void
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetInputArtifacts` <a name="resetInputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetInputArtifacts"></a>

```typescript
public resetInputArtifacts(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTimeoutInMinutes` <a name="resetTimeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetTimeoutInMinutes"></a>

```typescript
public resetTimeoutInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.ruleTypeId">ruleTypeId</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference">CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.commandsInput">commandsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.configurationInput">configurationInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.inputArtifactsInput">inputArtifactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.ruleTypeIdInput">ruleTypeIdInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId">CodepipelineStageOnSuccessConditionRuleRuleTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.timeoutInMinutesInput">timeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.commands">commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleTypeId`<sup>Required</sup> <a name="ruleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.ruleTypeId"></a>

```typescript
public readonly ruleTypeId: CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference">CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference</a>

---

##### `commandsInput`<sup>Optional</sup> <a name="commandsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.commandsInput"></a>

```typescript
public readonly commandsInput: string[];
```

- *Type:* string[]

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.configurationInput"></a>

```typescript
public readonly configurationInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputArtifactsInput`<sup>Optional</sup> <a name="inputArtifactsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.inputArtifactsInput"></a>

```typescript
public readonly inputArtifactsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `ruleTypeIdInput`<sup>Optional</sup> <a name="ruleTypeIdInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.ruleTypeIdInput"></a>

```typescript
public readonly ruleTypeIdInput: CodepipelineStageOnSuccessConditionRuleRuleTypeId;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId">CodepipelineStageOnSuccessConditionRuleRuleTypeId</a>

---

##### `timeoutInMinutesInput`<sup>Optional</sup> <a name="timeoutInMinutesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.timeoutInMinutesInput"></a>

```typescript
public readonly timeoutInMinutesInput: number;
```

- *Type:* number

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineStageOnSuccessConditionRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>

---


### CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference <a name="CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId">CodepipelineStageOnSuccessConditionRuleRuleTypeId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineStageOnSuccessConditionRuleRuleTypeId;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId">CodepipelineStageOnSuccessConditionRuleRuleTypeId</a>

---


### CodepipelineStageOnSuccessOutputReference <a name="CodepipelineStageOnSuccessOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageOnSuccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.putCondition">putCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.putCondition"></a>

```typescript
public putCondition(value: CodepipelineStageOnSuccessCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference">CodepipelineStageOnSuccessConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess">CodepipelineStageOnSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.condition"></a>

```typescript
public readonly condition: CodepipelineStageOnSuccessConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference">CodepipelineStageOnSuccessConditionOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: CodepipelineStageOnSuccessCondition;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineStageOnSuccess;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess">CodepipelineStageOnSuccess</a>

---


### CodepipelineStageOutputReference <a name="CodepipelineStageOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putBeforeEntry">putBeforeEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnSuccess">putOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resetBeforeEntry">resetBeforeEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resetOnSuccess">resetOnSuccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putAction"></a>

```typescript
public putAction(value: IResolvable | CodepipelineStageAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]

---

##### `putBeforeEntry` <a name="putBeforeEntry" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putBeforeEntry"></a>

```typescript
public putBeforeEntry(value: CodepipelineStageBeforeEntry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putBeforeEntry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry">CodepipelineStageBeforeEntry</a>

---

##### `putOnFailure` <a name="putOnFailure" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnFailure"></a>

```typescript
public putOnFailure(value: CodepipelineStageOnFailure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure">CodepipelineStageOnFailure</a>

---

##### `putOnSuccess` <a name="putOnSuccess" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnSuccess"></a>

```typescript
public putOnSuccess(value: CodepipelineStageOnSuccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess">CodepipelineStageOnSuccess</a>

---

##### `resetBeforeEntry` <a name="resetBeforeEntry" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resetBeforeEntry"></a>

```typescript
public resetBeforeEntry(): void
```

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resetOnFailure"></a>

```typescript
public resetOnFailure(): void
```

##### `resetOnSuccess` <a name="resetOnSuccess" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resetOnSuccess"></a>

```typescript
public resetOnSuccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList">CodepipelineStageActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.beforeEntry">beforeEntry</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference">CodepipelineStageBeforeEntryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference">CodepipelineStageOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference">CodepipelineStageOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.actionInput">actionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.beforeEntryInput">beforeEntryInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry">CodepipelineStageBeforeEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onFailureInput">onFailureInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure">CodepipelineStageOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onSuccessInput">onSuccessInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess">CodepipelineStageOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.action"></a>

```typescript
public readonly action: CodepipelineStageActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList">CodepipelineStageActionList</a>

---

##### `beforeEntry`<sup>Required</sup> <a name="beforeEntry" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.beforeEntry"></a>

```typescript
public readonly beforeEntry: CodepipelineStageBeforeEntryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference">CodepipelineStageBeforeEntryOutputReference</a>

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onFailure"></a>

```typescript
public readonly onFailure: CodepipelineStageOnFailureOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference">CodepipelineStageOnFailureOutputReference</a>

---

##### `onSuccess`<sup>Required</sup> <a name="onSuccess" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onSuccess"></a>

```typescript
public readonly onSuccess: CodepipelineStageOnSuccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference">CodepipelineStageOnSuccessOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | CodepipelineStageAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]

---

##### `beforeEntryInput`<sup>Optional</sup> <a name="beforeEntryInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.beforeEntryInput"></a>

```typescript
public readonly beforeEntryInput: CodepipelineStageBeforeEntry;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry">CodepipelineStageBeforeEntry</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onFailureInput"></a>

```typescript
public readonly onFailureInput: CodepipelineStageOnFailure;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure">CodepipelineStageOnFailure</a>

---

##### `onSuccessInput`<sup>Optional</sup> <a name="onSuccessInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onSuccessInput"></a>

```typescript
public readonly onSuccessInput: CodepipelineStageOnSuccess;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess">CodepipelineStageOnSuccess</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineStage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>

---


### CodepipelineTriggerAllGitConfigurationList <a name="CodepipelineTriggerAllGitConfigurationList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.get"></a>

```typescript
public get(index: number): CodepipelineTriggerAllGitConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CodepipelineTriggerAllGitConfigurationOutputReference <a name="CodepipelineTriggerAllGitConfigurationOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList">CodepipelineTriggerAllGitConfigurationPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList">CodepipelineTriggerAllGitConfigurationPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.sourceActionName">sourceActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfiguration">CodepipelineTriggerAllGitConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.pullRequest"></a>

```typescript
public readonly pullRequest: CodepipelineTriggerAllGitConfigurationPullRequestList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList">CodepipelineTriggerAllGitConfigurationPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.push"></a>

```typescript
public readonly push: CodepipelineTriggerAllGitConfigurationPushList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList">CodepipelineTriggerAllGitConfigurationPushList</a>

---

##### `sourceActionName`<sup>Required</sup> <a name="sourceActionName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.sourceActionName"></a>

```typescript
public readonly sourceActionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerAllGitConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfiguration">CodepipelineTriggerAllGitConfiguration</a>

---


### CodepipelineTriggerAllGitConfigurationPullRequestBranchesList <a name="CodepipelineTriggerAllGitConfigurationPullRequestBranchesList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.get"></a>

```typescript
public get(index: number): CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference <a name="CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranches">CodepipelineTriggerAllGitConfigurationPullRequestBranches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerAllGitConfigurationPullRequestBranches;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranches">CodepipelineTriggerAllGitConfigurationPullRequestBranches</a>

---


### CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList <a name="CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.get"></a>

```typescript
public get(index: number): CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference <a name="CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePaths">CodepipelineTriggerAllGitConfigurationPullRequestFilePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerAllGitConfigurationPullRequestFilePaths;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePaths">CodepipelineTriggerAllGitConfigurationPullRequestFilePaths</a>

---


### CodepipelineTriggerAllGitConfigurationPullRequestList <a name="CodepipelineTriggerAllGitConfigurationPullRequestList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.get"></a>

```typescript
public get(index: number): CodepipelineTriggerAllGitConfigurationPullRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CodepipelineTriggerAllGitConfigurationPullRequestOutputReference <a name="CodepipelineTriggerAllGitConfigurationPullRequestOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList">CodepipelineTriggerAllGitConfigurationPullRequestBranchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.filePaths">filePaths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList">CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequest">CodepipelineTriggerAllGitConfigurationPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.branches"></a>

```typescript
public readonly branches: CodepipelineTriggerAllGitConfigurationPullRequestBranchesList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList">CodepipelineTriggerAllGitConfigurationPullRequestBranchesList</a>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.filePaths"></a>

```typescript
public readonly filePaths: CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList">CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerAllGitConfigurationPullRequest;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequest">CodepipelineTriggerAllGitConfigurationPullRequest</a>

---


### CodepipelineTriggerAllGitConfigurationPushBranchesList <a name="CodepipelineTriggerAllGitConfigurationPushBranchesList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.get"></a>

```typescript
public get(index: number): CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference <a name="CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranches">CodepipelineTriggerAllGitConfigurationPushBranches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerAllGitConfigurationPushBranches;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranches">CodepipelineTriggerAllGitConfigurationPushBranches</a>

---


### CodepipelineTriggerAllGitConfigurationPushFilePathsList <a name="CodepipelineTriggerAllGitConfigurationPushFilePathsList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.get"></a>

```typescript
public get(index: number): CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference <a name="CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePaths">CodepipelineTriggerAllGitConfigurationPushFilePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerAllGitConfigurationPushFilePaths;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePaths">CodepipelineTriggerAllGitConfigurationPushFilePaths</a>

---


### CodepipelineTriggerAllGitConfigurationPushList <a name="CodepipelineTriggerAllGitConfigurationPushList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPushList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.get"></a>

```typescript
public get(index: number): CodepipelineTriggerAllGitConfigurationPushOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CodepipelineTriggerAllGitConfigurationPushOutputReference <a name="CodepipelineTriggerAllGitConfigurationPushOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList">CodepipelineTriggerAllGitConfigurationPushBranchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.filePaths">filePaths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList">CodepipelineTriggerAllGitConfigurationPushFilePathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList">CodepipelineTriggerAllGitConfigurationPushTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPush">CodepipelineTriggerAllGitConfigurationPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.branches"></a>

```typescript
public readonly branches: CodepipelineTriggerAllGitConfigurationPushBranchesList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList">CodepipelineTriggerAllGitConfigurationPushBranchesList</a>

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.filePaths"></a>

```typescript
public readonly filePaths: CodepipelineTriggerAllGitConfigurationPushFilePathsList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList">CodepipelineTriggerAllGitConfigurationPushFilePathsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.tags"></a>

```typescript
public readonly tags: CodepipelineTriggerAllGitConfigurationPushTagsList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList">CodepipelineTriggerAllGitConfigurationPushTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerAllGitConfigurationPush;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPush">CodepipelineTriggerAllGitConfigurationPush</a>

---


### CodepipelineTriggerAllGitConfigurationPushTagsList <a name="CodepipelineTriggerAllGitConfigurationPushTagsList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.get"></a>

```typescript
public get(index: number): CodepipelineTriggerAllGitConfigurationPushTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CodepipelineTriggerAllGitConfigurationPushTagsOutputReference <a name="CodepipelineTriggerAllGitConfigurationPushTagsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTags">CodepipelineTriggerAllGitConfigurationPushTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerAllGitConfigurationPushTags;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTags">CodepipelineTriggerAllGitConfigurationPushTags</a>

---


### CodepipelineTriggerAllList <a name="CodepipelineTriggerAllList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.get"></a>

```typescript
public get(index: number): CodepipelineTriggerAllOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CodepipelineTriggerAllOutputReference <a name="CodepipelineTriggerAllOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerAllOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.gitConfiguration">gitConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList">CodepipelineTriggerAllGitConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.providerType">providerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAll">CodepipelineTriggerAll</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gitConfiguration`<sup>Required</sup> <a name="gitConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.gitConfiguration"></a>

```typescript
public readonly gitConfiguration: CodepipelineTriggerAllGitConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList">CodepipelineTriggerAllGitConfigurationList</a>

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerAll;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAll">CodepipelineTriggerAll</a>

---


### CodepipelineTriggerGitConfigurationOutputReference <a name="CodepipelineTriggerGitConfigurationOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerGitConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPullRequest">putPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPush">putPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resetPullRequest">resetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resetPush">resetPush</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPullRequest` <a name="putPullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPullRequest"></a>

```typescript
public putPullRequest(value: IResolvable | CodepipelineTriggerGitConfigurationPullRequest[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPullRequest.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>[]

---

##### `putPush` <a name="putPush" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPush"></a>

```typescript
public putPush(value: IResolvable | CodepipelineTriggerGitConfigurationPush[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPush.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>[]

---

##### `resetPullRequest` <a name="resetPullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resetPullRequest"></a>

```typescript
public resetPullRequest(): void
```

##### `resetPush` <a name="resetPush" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resetPush"></a>

```typescript
public resetPush(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList">CodepipelineTriggerGitConfigurationPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList">CodepipelineTriggerGitConfigurationPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pullRequestInput">pullRequestInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pushInput">pushInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.sourceActionNameInput">sourceActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.sourceActionName">sourceActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pullRequest"></a>

```typescript
public readonly pullRequest: CodepipelineTriggerGitConfigurationPullRequestList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList">CodepipelineTriggerGitConfigurationPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.push"></a>

```typescript
public readonly push: CodepipelineTriggerGitConfigurationPushList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList">CodepipelineTriggerGitConfigurationPushList</a>

---

##### `pullRequestInput`<sup>Optional</sup> <a name="pullRequestInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pullRequestInput"></a>

```typescript
public readonly pullRequestInput: IResolvable | CodepipelineTriggerGitConfigurationPullRequest[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>[]

---

##### `pushInput`<sup>Optional</sup> <a name="pushInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pushInput"></a>

```typescript
public readonly pushInput: IResolvable | CodepipelineTriggerGitConfigurationPush[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>[]

---

##### `sourceActionNameInput`<sup>Optional</sup> <a name="sourceActionNameInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.sourceActionNameInput"></a>

```typescript
public readonly sourceActionNameInput: string;
```

- *Type:* string

---

##### `sourceActionName`<sup>Required</sup> <a name="sourceActionName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.sourceActionName"></a>

```typescript
public readonly sourceActionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerGitConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a>

---


### CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference <a name="CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resetIncludes">resetIncludes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resetExcludes"></a>

```typescript
public resetExcludes(): void
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resetIncludes"></a>

```typescript
public resetIncludes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.excludesInput">excludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.includesInput">includesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.excludesInput"></a>

```typescript
public readonly excludesInput: string[];
```

- *Type:* string[]

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.includesInput"></a>

```typescript
public readonly includesInput: string[];
```

- *Type:* string[]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerGitConfigurationPullRequestBranches;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a>

---


### CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference <a name="CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resetIncludes">resetIncludes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resetExcludes"></a>

```typescript
public resetExcludes(): void
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resetIncludes"></a>

```typescript
public resetIncludes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.excludesInput">excludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.includesInput">includesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.excludesInput"></a>

```typescript
public readonly excludesInput: string[];
```

- *Type:* string[]

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.includesInput"></a>

```typescript
public readonly includesInput: string[];
```

- *Type:* string[]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerGitConfigurationPullRequestFilePaths;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a>

---


### CodepipelineTriggerGitConfigurationPullRequestList <a name="CodepipelineTriggerGitConfigurationPullRequestList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerGitConfigurationPullRequestList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.get"></a>

```typescript
public get(index: number): CodepipelineTriggerGitConfigurationPullRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineTriggerGitConfigurationPullRequest[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>[]

---


### CodepipelineTriggerGitConfigurationPullRequestOutputReference <a name="CodepipelineTriggerGitConfigurationPullRequestOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putBranches">putBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putFilePaths">putFilePaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetBranches">resetBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetEvents">resetEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetFilePaths">resetFilePaths</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBranches` <a name="putBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putBranches"></a>

```typescript
public putBranches(value: CodepipelineTriggerGitConfigurationPullRequestBranches): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putBranches.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a>

---

##### `putFilePaths` <a name="putFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putFilePaths"></a>

```typescript
public putFilePaths(value: CodepipelineTriggerGitConfigurationPullRequestFilePaths): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putFilePaths.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a>

---

##### `resetBranches` <a name="resetBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetBranches"></a>

```typescript
public resetBranches(): void
```

##### `resetEvents` <a name="resetEvents" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetEvents"></a>

```typescript
public resetEvents(): void
```

##### `resetFilePaths` <a name="resetFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetFilePaths"></a>

```typescript
public resetFilePaths(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference">CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.filePaths">filePaths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference">CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.branchesInput">branchesInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.filePathsInput">filePathsInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.branches"></a>

```typescript
public readonly branches: CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference">CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference</a>

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.filePaths"></a>

```typescript
public readonly filePaths: CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference">CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference</a>

---

##### `branchesInput`<sup>Optional</sup> <a name="branchesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.branchesInput"></a>

```typescript
public readonly branchesInput: CodepipelineTriggerGitConfigurationPullRequestBranches;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a>

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `filePathsInput`<sup>Optional</sup> <a name="filePathsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.filePathsInput"></a>

```typescript
public readonly filePathsInput: CodepipelineTriggerGitConfigurationPullRequestFilePaths;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineTriggerGitConfigurationPullRequest;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>

---


### CodepipelineTriggerGitConfigurationPushBranchesOutputReference <a name="CodepipelineTriggerGitConfigurationPushBranchesOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resetIncludes">resetIncludes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resetExcludes"></a>

```typescript
public resetExcludes(): void
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resetIncludes"></a>

```typescript
public resetIncludes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.excludesInput">excludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.includesInput">includesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.excludesInput"></a>

```typescript
public readonly excludesInput: string[];
```

- *Type:* string[]

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.includesInput"></a>

```typescript
public readonly includesInput: string[];
```

- *Type:* string[]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerGitConfigurationPushBranches;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a>

---


### CodepipelineTriggerGitConfigurationPushFilePathsOutputReference <a name="CodepipelineTriggerGitConfigurationPushFilePathsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resetIncludes">resetIncludes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resetExcludes"></a>

```typescript
public resetExcludes(): void
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resetIncludes"></a>

```typescript
public resetIncludes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.excludesInput">excludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.includesInput">includesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.excludesInput"></a>

```typescript
public readonly excludesInput: string[];
```

- *Type:* string[]

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.includesInput"></a>

```typescript
public readonly includesInput: string[];
```

- *Type:* string[]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerGitConfigurationPushFilePaths;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a>

---


### CodepipelineTriggerGitConfigurationPushList <a name="CodepipelineTriggerGitConfigurationPushList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerGitConfigurationPushList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.get"></a>

```typescript
public get(index: number): CodepipelineTriggerGitConfigurationPushOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineTriggerGitConfigurationPush[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>[]

---


### CodepipelineTriggerGitConfigurationPushOutputReference <a name="CodepipelineTriggerGitConfigurationPushOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putBranches">putBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putFilePaths">putFilePaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetBranches">resetBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetFilePaths">resetFilePaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBranches` <a name="putBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putBranches"></a>

```typescript
public putBranches(value: CodepipelineTriggerGitConfigurationPushBranches): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putBranches.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a>

---

##### `putFilePaths` <a name="putFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putFilePaths"></a>

```typescript
public putFilePaths(value: CodepipelineTriggerGitConfigurationPushFilePaths): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putFilePaths.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putTags"></a>

```typescript
public putTags(value: CodepipelineTriggerGitConfigurationPushTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a>

---

##### `resetBranches` <a name="resetBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetBranches"></a>

```typescript
public resetBranches(): void
```

##### `resetFilePaths` <a name="resetFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetFilePaths"></a>

```typescript
public resetFilePaths(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference">CodepipelineTriggerGitConfigurationPushBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.filePaths">filePaths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference">CodepipelineTriggerGitConfigurationPushFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference">CodepipelineTriggerGitConfigurationPushTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.branchesInput">branchesInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.filePathsInput">filePathsInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.branches"></a>

```typescript
public readonly branches: CodepipelineTriggerGitConfigurationPushBranchesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference">CodepipelineTriggerGitConfigurationPushBranchesOutputReference</a>

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.filePaths"></a>

```typescript
public readonly filePaths: CodepipelineTriggerGitConfigurationPushFilePathsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference">CodepipelineTriggerGitConfigurationPushFilePathsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.tags"></a>

```typescript
public readonly tags: CodepipelineTriggerGitConfigurationPushTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference">CodepipelineTriggerGitConfigurationPushTagsOutputReference</a>

---

##### `branchesInput`<sup>Optional</sup> <a name="branchesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.branchesInput"></a>

```typescript
public readonly branchesInput: CodepipelineTriggerGitConfigurationPushBranches;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a>

---

##### `filePathsInput`<sup>Optional</sup> <a name="filePathsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.filePathsInput"></a>

```typescript
public readonly filePathsInput: CodepipelineTriggerGitConfigurationPushFilePaths;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: CodepipelineTriggerGitConfigurationPushTags;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineTriggerGitConfigurationPush;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>

---


### CodepipelineTriggerGitConfigurationPushTagsOutputReference <a name="CodepipelineTriggerGitConfigurationPushTagsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resetIncludes">resetIncludes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resetExcludes"></a>

```typescript
public resetExcludes(): void
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resetIncludes"></a>

```typescript
public resetIncludes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.excludesInput">excludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.includesInput">includesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.excludesInput"></a>

```typescript
public readonly excludesInput: string[];
```

- *Type:* string[]

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.includesInput"></a>

```typescript
public readonly includesInput: string[];
```

- *Type:* string[]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineTriggerGitConfigurationPushTags;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a>

---


### CodepipelineTriggerList <a name="CodepipelineTriggerList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.get"></a>

```typescript
public get(index: number): CodepipelineTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineTrigger[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>[]

---


### CodepipelineTriggerOutputReference <a name="CodepipelineTriggerOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.putGitConfiguration">putGitConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGitConfiguration` <a name="putGitConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.putGitConfiguration"></a>

```typescript
public putGitConfiguration(value: CodepipelineTriggerGitConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.putGitConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.gitConfiguration">gitConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference">CodepipelineTriggerGitConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.gitConfigurationInput">gitConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.providerTypeInput">providerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.providerType">providerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gitConfiguration`<sup>Required</sup> <a name="gitConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.gitConfiguration"></a>

```typescript
public readonly gitConfiguration: CodepipelineTriggerGitConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference">CodepipelineTriggerGitConfigurationOutputReference</a>

---

##### `gitConfigurationInput`<sup>Optional</sup> <a name="gitConfigurationInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.gitConfigurationInput"></a>

```typescript
public readonly gitConfigurationInput: CodepipelineTriggerGitConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a>

---

##### `providerTypeInput`<sup>Optional</sup> <a name="providerTypeInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.providerTypeInput"></a>

```typescript
public readonly providerTypeInput: string;
```

- *Type:* string

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineTrigger;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>

---


### CodepipelineVariableList <a name="CodepipelineVariableList" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineVariableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.get"></a>

```typescript
public get(index: number): CodepipelineVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>[]

---


### CodepipelineVariableOutputReference <a name="CodepipelineVariableOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineVariableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineVariable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>

---



