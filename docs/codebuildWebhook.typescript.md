# `codebuildWebhook` Submodule <a name="`codebuildWebhook` Submodule" id="@cdktf/provider-aws.codebuildWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildWebhook <a name="CodebuildWebhook" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook aws_codebuild_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

new codebuildWebhook.CodebuildWebhook(scope: Construct, id: string, config: CodebuildWebhookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig">CodebuildWebhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig">CodebuildWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putFilterGroup">putFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putScopeConfiguration">putScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetBranchFilter">resetBranchFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetBuildType">resetBuildType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetFilterGroup">resetFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetManualCreation">resetManualCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetScopeConfiguration">resetScopeConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilterGroup` <a name="putFilterGroup" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putFilterGroup"></a>

```typescript
public putFilterGroup(value: IResolvable | CodebuildWebhookFilterGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putFilterGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]

---

##### `putScopeConfiguration` <a name="putScopeConfiguration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putScopeConfiguration"></a>

```typescript
public putScopeConfiguration(value: CodebuildWebhookScopeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putScopeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a>

---

##### `resetBranchFilter` <a name="resetBranchFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetBranchFilter"></a>

```typescript
public resetBranchFilter(): void
```

##### `resetBuildType` <a name="resetBuildType" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetBuildType"></a>

```typescript
public resetBuildType(): void
```

##### `resetFilterGroup` <a name="resetFilterGroup" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetFilterGroup"></a>

```typescript
public resetFilterGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManualCreation` <a name="resetManualCreation" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetManualCreation"></a>

```typescript
public resetManualCreation(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetScopeConfiguration` <a name="resetScopeConfiguration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetScopeConfiguration"></a>

```typescript
public resetScopeConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodebuildWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isConstruct"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

codebuildWebhook.CodebuildWebhook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformElement"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

codebuildWebhook.CodebuildWebhook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformResource"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

codebuildWebhook.CodebuildWebhook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

codebuildWebhook.CodebuildWebhook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CodebuildWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodebuildWebhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodebuildWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodebuildWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.filterGroup">filterGroup</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList">CodebuildWebhookFilterGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.payloadUrl">payloadUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.scopeConfiguration">scopeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference">CodebuildWebhookScopeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.branchFilterInput">branchFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.buildTypeInput">buildTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.filterGroupInput">filterGroupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.manualCreationInput">manualCreationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.projectNameInput">projectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.scopeConfigurationInput">scopeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.branchFilter">branchFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.buildType">buildType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.manualCreation">manualCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.projectName">projectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filterGroup`<sup>Required</sup> <a name="filterGroup" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.filterGroup"></a>

```typescript
public readonly filterGroup: CodebuildWebhookFilterGroupList;
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList">CodebuildWebhookFilterGroupList</a>

---

##### `payloadUrl`<sup>Required</sup> <a name="payloadUrl" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.payloadUrl"></a>

```typescript
public readonly payloadUrl: string;
```

- *Type:* string

---

##### `scopeConfiguration`<sup>Required</sup> <a name="scopeConfiguration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.scopeConfiguration"></a>

```typescript
public readonly scopeConfiguration: CodebuildWebhookScopeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference">CodebuildWebhookScopeConfigurationOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `branchFilterInput`<sup>Optional</sup> <a name="branchFilterInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.branchFilterInput"></a>

```typescript
public readonly branchFilterInput: string;
```

- *Type:* string

---

##### `buildTypeInput`<sup>Optional</sup> <a name="buildTypeInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.buildTypeInput"></a>

```typescript
public readonly buildTypeInput: string;
```

- *Type:* string

---

##### `filterGroupInput`<sup>Optional</sup> <a name="filterGroupInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.filterGroupInput"></a>

```typescript
public readonly filterGroupInput: IResolvable | CodebuildWebhookFilterGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `manualCreationInput`<sup>Optional</sup> <a name="manualCreationInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.manualCreationInput"></a>

```typescript
public readonly manualCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.projectNameInput"></a>

```typescript
public readonly projectNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scopeConfigurationInput`<sup>Optional</sup> <a name="scopeConfigurationInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.scopeConfigurationInput"></a>

```typescript
public readonly scopeConfigurationInput: CodebuildWebhookScopeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a>

---

##### `branchFilter`<sup>Required</sup> <a name="branchFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.branchFilter"></a>

```typescript
public readonly branchFilter: string;
```

- *Type:* string

---

##### `buildType`<sup>Required</sup> <a name="buildType" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.buildType"></a>

```typescript
public readonly buildType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `manualCreation`<sup>Required</sup> <a name="manualCreation" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.manualCreation"></a>

```typescript
public readonly manualCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildWebhookConfig <a name="CodebuildWebhookConfig" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

const codebuildWebhookConfig: codebuildWebhook.CodebuildWebhookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.projectName">projectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.branchFilter">branchFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.buildType">buildType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.filterGroup">filterGroup</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]</code> | filter_group block. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#id CodebuildWebhook#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.manualCreation">manualCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#manual_creation CodebuildWebhook#manual_creation}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.scopeConfiguration">scopeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a></code> | scope_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}.

---

##### `branchFilter`<sup>Optional</sup> <a name="branchFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.branchFilter"></a>

```typescript
public readonly branchFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}.

---

##### `buildType`<sup>Optional</sup> <a name="buildType" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.buildType"></a>

```typescript
public readonly buildType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}.

---

##### `filterGroup`<sup>Optional</sup> <a name="filterGroup" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.filterGroup"></a>

```typescript
public readonly filterGroup: IResolvable | CodebuildWebhookFilterGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]

filter_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#filter_group CodebuildWebhook#filter_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#id CodebuildWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manualCreation`<sup>Optional</sup> <a name="manualCreation" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.manualCreation"></a>

```typescript
public readonly manualCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#manual_creation CodebuildWebhook#manual_creation}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#region CodebuildWebhook#region}

---

##### `scopeConfiguration`<sup>Optional</sup> <a name="scopeConfiguration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.scopeConfiguration"></a>

```typescript
public readonly scopeConfiguration: CodebuildWebhookScopeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a>

scope_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#scope_configuration CodebuildWebhook#scope_configuration}

---

### CodebuildWebhookFilterGroup <a name="CodebuildWebhookFilterGroup" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

const codebuildWebhookFilterGroup: codebuildWebhook.CodebuildWebhookFilterGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]</code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup.property.filter"></a>

```typescript
public readonly filter: IResolvable | CodebuildWebhookFilterGroupFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#filter CodebuildWebhook#filter}

---

### CodebuildWebhookFilterGroupFilter <a name="CodebuildWebhookFilterGroupFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

const codebuildWebhookFilterGroupFilter: codebuildWebhook.CodebuildWebhookFilterGroupFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.pattern">pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#pattern CodebuildWebhook#pattern}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#type CodebuildWebhook#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.excludeMatchedPattern">excludeMatchedPattern</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#pattern CodebuildWebhook#pattern}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#type CodebuildWebhook#type}.

---

##### `excludeMatchedPattern`<sup>Optional</sup> <a name="excludeMatchedPattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.excludeMatchedPattern"></a>

```typescript
public readonly excludeMatchedPattern: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}.

---

### CodebuildWebhookScopeConfiguration <a name="CodebuildWebhookScopeConfiguration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

const codebuildWebhookScopeConfiguration: codebuildWebhook.CodebuildWebhookScopeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#name CodebuildWebhook#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#scope CodebuildWebhook#scope}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#domain CodebuildWebhook#domain}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#name CodebuildWebhook#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#scope CodebuildWebhook#scope}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#domain CodebuildWebhook#domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildWebhookFilterGroupFilterList <a name="CodebuildWebhookFilterGroupFilterList" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

new codebuildWebhook.CodebuildWebhookFilterGroupFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.get"></a>

```typescript
public get(index: number): CodebuildWebhookFilterGroupFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildWebhookFilterGroupFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]

---


### CodebuildWebhookFilterGroupFilterOutputReference <a name="CodebuildWebhookFilterGroupFilterOutputReference" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

new codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resetExcludeMatchedPattern">resetExcludeMatchedPattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeMatchedPattern` <a name="resetExcludeMatchedPattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resetExcludeMatchedPattern"></a>

```typescript
public resetExcludeMatchedPattern(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPatternInput">excludeMatchedPatternInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPattern">excludeMatchedPattern</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeMatchedPatternInput`<sup>Optional</sup> <a name="excludeMatchedPatternInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPatternInput"></a>

```typescript
public readonly excludeMatchedPatternInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `excludeMatchedPattern`<sup>Required</sup> <a name="excludeMatchedPattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPattern"></a>

```typescript
public readonly excludeMatchedPattern: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildWebhookFilterGroupFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>

---


### CodebuildWebhookFilterGroupList <a name="CodebuildWebhookFilterGroupList" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

new codebuildWebhook.CodebuildWebhookFilterGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.get"></a>

```typescript
public get(index: number): CodebuildWebhookFilterGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildWebhookFilterGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]

---


### CodebuildWebhookFilterGroupOutputReference <a name="CodebuildWebhookFilterGroupOutputReference" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

new codebuildWebhook.CodebuildWebhookFilterGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | CodebuildWebhookFilterGroupFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList">CodebuildWebhookFilterGroupFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filter"></a>

```typescript
public readonly filter: CodebuildWebhookFilterGroupFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList">CodebuildWebhookFilterGroupFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | CodebuildWebhookFilterGroupFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildWebhookFilterGroup;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>

---


### CodebuildWebhookScopeConfigurationOutputReference <a name="CodebuildWebhookScopeConfigurationOutputReference" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/provider-aws'

new codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resetDomain">resetDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildWebhookScopeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a>

---



