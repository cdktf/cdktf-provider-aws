# `transferWorkflow` Submodule <a name="`transferWorkflow` Submodule" id="@cdktf/provider-aws.transferWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWorkflow <a name="TransferWorkflow" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow aws_transfer_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflow(scope: Construct, id: string, config: TransferWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig">TransferWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig">TransferWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putOnExceptionSteps">putOnExceptionSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetOnExceptionSteps">resetOnExceptionSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOnExceptionSteps` <a name="putOnExceptionSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putOnExceptionSteps"></a>

```typescript
public putOnExceptionSteps(value: IResolvable | TransferWorkflowOnExceptionSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putOnExceptionSteps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]

---

##### `putSteps` <a name="putSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putSteps"></a>

```typescript
public putSteps(value: IResolvable | TransferWorkflowSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putSteps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOnExceptionSteps` <a name="resetOnExceptionSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetOnExceptionSteps"></a>

```typescript
public resetOnExceptionSteps(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TransferWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isConstruct"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

transferWorkflow.TransferWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformElement"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

transferWorkflow.TransferWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformResource"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

transferWorkflow.TransferWorkflow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

transferWorkflow.TransferWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TransferWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransferWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.onExceptionSteps">onExceptionSteps</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList">TransferWorkflowOnExceptionStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList">TransferWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.onExceptionStepsInput">onExceptionStepsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.stepsInput">stepsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `onExceptionSteps`<sup>Required</sup> <a name="onExceptionSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.onExceptionSteps"></a>

```typescript
public readonly onExceptionSteps: TransferWorkflowOnExceptionStepsList;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList">TransferWorkflowOnExceptionStepsList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.steps"></a>

```typescript
public readonly steps: TransferWorkflowStepsList;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList">TransferWorkflowStepsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `onExceptionStepsInput`<sup>Optional</sup> <a name="onExceptionStepsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.onExceptionStepsInput"></a>

```typescript
public readonly onExceptionStepsInput: IResolvable | TransferWorkflowOnExceptionSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | TransferWorkflowSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWorkflowConfig <a name="TransferWorkflowConfig" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowConfig: transferWorkflow.TransferWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.steps">steps</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]</code> | steps block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#description TransferWorkflow#description}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#id TransferWorkflow#id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.onExceptionSteps">onExceptionSteps</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]</code> | on_exception_steps block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags_all TransferWorkflow#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.steps"></a>

```typescript
public readonly steps: IResolvable | TransferWorkflowSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#steps TransferWorkflow#steps}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#description TransferWorkflow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#id TransferWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onExceptionSteps`<sup>Optional</sup> <a name="onExceptionSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.onExceptionSteps"></a>

```typescript
public readonly onExceptionSteps: IResolvable | TransferWorkflowOnExceptionSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]

on_exception_steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#on_exception_steps TransferWorkflow#on_exception_steps}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#region TransferWorkflow#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags_all TransferWorkflow#tags_all}.

---

### TransferWorkflowOnExceptionSteps <a name="TransferWorkflowOnExceptionSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowOnExceptionSteps: transferWorkflow.TransferWorkflowOnExceptionSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.copyStepDetails">copyStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | copy_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.customStepDetails">customStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | custom_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.decryptStepDetails">decryptStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | decrypt_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.deleteStepDetails">deleteStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | delete_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.tagStepDetails">tagStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | tag_step_details block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

##### `copyStepDetails`<sup>Optional</sup> <a name="copyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.copyStepDetails"></a>

```typescript
public readonly copyStepDetails: TransferWorkflowOnExceptionStepsCopyStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

copy_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}

---

##### `customStepDetails`<sup>Optional</sup> <a name="customStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.customStepDetails"></a>

```typescript
public readonly customStepDetails: TransferWorkflowOnExceptionStepsCustomStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

custom_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}

---

##### `decryptStepDetails`<sup>Optional</sup> <a name="decryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.decryptStepDetails"></a>

```typescript
public readonly decryptStepDetails: TransferWorkflowOnExceptionStepsDecryptStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

decrypt_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}

---

##### `deleteStepDetails`<sup>Optional</sup> <a name="deleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.deleteStepDetails"></a>

```typescript
public readonly deleteStepDetails: TransferWorkflowOnExceptionStepsDeleteStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

delete_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}

---

##### `tagStepDetails`<sup>Optional</sup> <a name="tagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.tagStepDetails"></a>

```typescript
public readonly tagStepDetails: TransferWorkflowOnExceptionStepsTagStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

tag_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}

---

### TransferWorkflowOnExceptionStepsCopyStepDetails <a name="TransferWorkflowOnExceptionStepsCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowOnExceptionStepsCopyStepDetails: transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | destination_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `destinationFileLocation`<sup>Optional</sup> <a name="destinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `overwriteExisting`<sup>Optional</sup> <a name="overwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation: transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | efs_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | s3_file_location block. |

---

##### `efsFileLocation`<sup>Optional</sup> <a name="efsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```typescript
public readonly efsFileLocation: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `s3FileLocation`<sup>Optional</sup> <a name="s3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation: transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation: transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

### TransferWorkflowOnExceptionStepsCustomStepDetails <a name="TransferWorkflowOnExceptionStepsCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowOnExceptionStepsCustomStepDetails: transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}.

---

### TransferWorkflowOnExceptionStepsDecryptStepDetails <a name="TransferWorkflowOnExceptionStepsDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowOnExceptionStepsDecryptStepDetails: transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | destination_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

##### `destinationFileLocation`<sup>Optional</sup> <a name="destinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `overwriteExisting`<sup>Optional</sup> <a name="overwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation: transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | efs_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | s3_file_location block. |

---

##### `efsFileLocation`<sup>Optional</sup> <a name="efsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```typescript
public readonly efsFileLocation: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `s3FileLocation`<sup>Optional</sup> <a name="s3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation: transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation: transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

### TransferWorkflowOnExceptionStepsDeleteStepDetails <a name="TransferWorkflowOnExceptionStepsDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowOnExceptionStepsDeleteStepDetails: transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowOnExceptionStepsTagStepDetails <a name="TransferWorkflowOnExceptionStepsTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowOnExceptionStepsTagStepDetails: transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]</code> | tags block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.tags"></a>

```typescript
public readonly tags: IResolvable | TransferWorkflowOnExceptionStepsTagStepDetailsTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

### TransferWorkflowOnExceptionStepsTagStepDetailsTags <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowOnExceptionStepsTagStepDetailsTags: transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}.

---

### TransferWorkflowSteps <a name="TransferWorkflowSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowSteps: transferWorkflow.TransferWorkflowSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.copyStepDetails">copyStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | copy_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.customStepDetails">customStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | custom_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.decryptStepDetails">decryptStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | decrypt_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.deleteStepDetails">deleteStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | delete_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.tagStepDetails">tagStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | tag_step_details block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

##### `copyStepDetails`<sup>Optional</sup> <a name="copyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.copyStepDetails"></a>

```typescript
public readonly copyStepDetails: TransferWorkflowStepsCopyStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

copy_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}

---

##### `customStepDetails`<sup>Optional</sup> <a name="customStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.customStepDetails"></a>

```typescript
public readonly customStepDetails: TransferWorkflowStepsCustomStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

custom_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}

---

##### `decryptStepDetails`<sup>Optional</sup> <a name="decryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.decryptStepDetails"></a>

```typescript
public readonly decryptStepDetails: TransferWorkflowStepsDecryptStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

decrypt_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}

---

##### `deleteStepDetails`<sup>Optional</sup> <a name="deleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.deleteStepDetails"></a>

```typescript
public readonly deleteStepDetails: TransferWorkflowStepsDeleteStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

delete_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}

---

##### `tagStepDetails`<sup>Optional</sup> <a name="tagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.tagStepDetails"></a>

```typescript
public readonly tagStepDetails: TransferWorkflowStepsTagStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

tag_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}

---

### TransferWorkflowStepsCopyStepDetails <a name="TransferWorkflowStepsCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowStepsCopyStepDetails: transferWorkflow.TransferWorkflowStepsCopyStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | destination_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `destinationFileLocation`<sup>Optional</sup> <a name="destinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `overwriteExisting`<sup>Optional</sup> <a name="overwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowStepsCopyStepDetailsDestinationFileLocation <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowStepsCopyStepDetailsDestinationFileLocation: transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | efs_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | s3_file_location block. |

---

##### `efsFileLocation`<sup>Optional</sup> <a name="efsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```typescript
public readonly efsFileLocation: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `s3FileLocation`<sup>Optional</sup> <a name="s3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation: transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation: transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

### TransferWorkflowStepsCustomStepDetails <a name="TransferWorkflowStepsCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowStepsCustomStepDetails: transferWorkflow.TransferWorkflowStepsCustomStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}.

---

### TransferWorkflowStepsDecryptStepDetails <a name="TransferWorkflowStepsDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowStepsDecryptStepDetails: transferWorkflow.TransferWorkflowStepsDecryptStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | destination_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

##### `destinationFileLocation`<sup>Optional</sup> <a name="destinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `overwriteExisting`<sup>Optional</sup> <a name="overwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowStepsDecryptStepDetailsDestinationFileLocation: transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | efs_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | s3_file_location block. |

---

##### `efsFileLocation`<sup>Optional</sup> <a name="efsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```typescript
public readonly efsFileLocation: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `s3FileLocation`<sup>Optional</sup> <a name="s3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation: transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation: transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

### TransferWorkflowStepsDeleteStepDetails <a name="TransferWorkflowStepsDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowStepsDeleteStepDetails: transferWorkflow.TransferWorkflowStepsDeleteStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowStepsTagStepDetails <a name="TransferWorkflowStepsTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowStepsTagStepDetails: transferWorkflow.TransferWorkflowStepsTagStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]</code> | tags block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.tags"></a>

```typescript
public readonly tags: IResolvable | TransferWorkflowStepsTagStepDetailsTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

### TransferWorkflowStepsTagStepDetailsTags <a name="TransferWorkflowStepsTagStepDetailsTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

const transferWorkflowStepsTagStepDetailsTags: transferWorkflow.TransferWorkflowStepsTagStepDetailsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">putEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">putS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">resetEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">resetS3FileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfsFileLocation` <a name="putEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```typescript
public putEfsFileLocation(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `putS3FileLocation` <a name="putS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```typescript
public putS3FileLocation(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `resetEfsFileLocation` <a name="resetEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```typescript
public resetEfsFileLocation(): void
```

##### `resetS3FileLocation` <a name="resetS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```typescript
public resetS3FileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">efsFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3FileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `efsFileLocation`<sup>Required</sup> <a name="efsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```typescript
public readonly efsFileLocation: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `s3FileLocation`<sup>Required</sup> <a name="s3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `efsFileLocationInput`<sup>Optional</sup> <a name="efsFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```typescript
public readonly efsFileLocationInput: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `s3FileLocationInput`<sup>Optional</sup> <a name="s3FileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```typescript
public readonly s3FileLocationInput: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation">putDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetDestinationFileLocation">resetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetOverwriteExisting">resetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationFileLocation` <a name="putDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation"></a>

```typescript
public putDestinationFileLocation(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `resetDestinationFileLocation` <a name="resetDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetDestinationFileLocation"></a>

```typescript
public resetDestinationFileLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOverwriteExisting` <a name="resetOverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetOverwriteExisting"></a>

```typescript
public resetOverwriteExisting(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput">destinationFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExistingInput">overwriteExistingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationFileLocation`<sup>Required</sup> <a name="destinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destinationFileLocationInput`<sup>Optional</sup> <a name="destinationFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```typescript
public readonly destinationFileLocationInput: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overwriteExistingInput`<sup>Optional</sup> <a name="overwriteExistingInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExistingInput"></a>

```typescript
public readonly overwriteExistingInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overwriteExisting`<sup>Required</sup> <a name="overwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowOnExceptionStepsCopyStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---


### TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowOnExceptionStepsCustomStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">putEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">putS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">resetEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">resetS3FileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfsFileLocation` <a name="putEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```typescript
public putEfsFileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `putS3FileLocation` <a name="putS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```typescript
public putS3FileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `resetEfsFileLocation` <a name="resetEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```typescript
public resetEfsFileLocation(): void
```

##### `resetS3FileLocation` <a name="resetS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```typescript
public resetS3FileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">efsFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3FileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `efsFileLocation`<sup>Required</sup> <a name="efsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```typescript
public readonly efsFileLocation: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `s3FileLocation`<sup>Required</sup> <a name="s3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `efsFileLocationInput`<sup>Optional</sup> <a name="efsFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```typescript
public readonly efsFileLocationInput: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `s3FileLocationInput`<sup>Optional</sup> <a name="s3FileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```typescript
public readonly s3FileLocationInput: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation">putDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation">resetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetOverwriteExisting">resetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationFileLocation` <a name="putDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation"></a>

```typescript
public putDestinationFileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `resetDestinationFileLocation` <a name="resetDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation"></a>

```typescript
public resetDestinationFileLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOverwriteExisting` <a name="resetOverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetOverwriteExisting"></a>

```typescript
public resetOverwriteExisting(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput">destinationFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput">overwriteExistingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationFileLocation`<sup>Required</sup> <a name="destinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destinationFileLocationInput`<sup>Optional</sup> <a name="destinationFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```typescript
public readonly destinationFileLocationInput: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overwriteExistingInput`<sup>Optional</sup> <a name="overwriteExistingInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput"></a>

```typescript
public readonly overwriteExistingInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overwriteExisting`<sup>Required</sup> <a name="overwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowOnExceptionStepsDecryptStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---


### TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowOnExceptionStepsDeleteStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---


### TransferWorkflowOnExceptionStepsList <a name="TransferWorkflowOnExceptionStepsList" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.get"></a>

```typescript
public get(index: number): TransferWorkflowOnExceptionStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>[]

---


### TransferWorkflowOnExceptionStepsOutputReference <a name="TransferWorkflowOnExceptionStepsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails">putCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails">putCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails">putDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails">putDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails">putTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCopyStepDetails">resetCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCustomStepDetails">resetCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDecryptStepDetails">resetDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDeleteStepDetails">resetDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetTagStepDetails">resetTagStepDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCopyStepDetails` <a name="putCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails"></a>

```typescript
public putCopyStepDetails(value: TransferWorkflowOnExceptionStepsCopyStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---

##### `putCustomStepDetails` <a name="putCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails"></a>

```typescript
public putCustomStepDetails(value: TransferWorkflowOnExceptionStepsCustomStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---

##### `putDecryptStepDetails` <a name="putDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails"></a>

```typescript
public putDecryptStepDetails(value: TransferWorkflowOnExceptionStepsDecryptStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---

##### `putDeleteStepDetails` <a name="putDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails"></a>

```typescript
public putDeleteStepDetails(value: TransferWorkflowOnExceptionStepsDeleteStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---

##### `putTagStepDetails` <a name="putTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails"></a>

```typescript
public putTagStepDetails(value: TransferWorkflowOnExceptionStepsTagStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---

##### `resetCopyStepDetails` <a name="resetCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCopyStepDetails"></a>

```typescript
public resetCopyStepDetails(): void
```

##### `resetCustomStepDetails` <a name="resetCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCustomStepDetails"></a>

```typescript
public resetCustomStepDetails(): void
```

##### `resetDecryptStepDetails` <a name="resetDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDecryptStepDetails"></a>

```typescript
public resetDecryptStepDetails(): void
```

##### `resetDeleteStepDetails` <a name="resetDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDeleteStepDetails"></a>

```typescript
public resetDeleteStepDetails(): void
```

##### `resetTagStepDetails` <a name="resetTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetTagStepDetails"></a>

```typescript
public resetTagStepDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetails">copyStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetails">customStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetails">decryptStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetails">deleteStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetails">tagStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference">TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetailsInput">copyStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetailsInput">customStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetailsInput">decryptStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetailsInput">deleteStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetailsInput">tagStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyStepDetails`<sup>Required</sup> <a name="copyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetails"></a>

```typescript
public readonly copyStepDetails: TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference</a>

---

##### `customStepDetails`<sup>Required</sup> <a name="customStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetails"></a>

```typescript
public readonly customStepDetails: TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference</a>

---

##### `decryptStepDetails`<sup>Required</sup> <a name="decryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetails"></a>

```typescript
public readonly decryptStepDetails: TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference</a>

---

##### `deleteStepDetails`<sup>Required</sup> <a name="deleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetails"></a>

```typescript
public readonly deleteStepDetails: TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference</a>

---

##### `tagStepDetails`<sup>Required</sup> <a name="tagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetails"></a>

```typescript
public readonly tagStepDetails: TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference">TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference</a>

---

##### `copyStepDetailsInput`<sup>Optional</sup> <a name="copyStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetailsInput"></a>

```typescript
public readonly copyStepDetailsInput: TransferWorkflowOnExceptionStepsCopyStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---

##### `customStepDetailsInput`<sup>Optional</sup> <a name="customStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetailsInput"></a>

```typescript
public readonly customStepDetailsInput: TransferWorkflowOnExceptionStepsCustomStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---

##### `decryptStepDetailsInput`<sup>Optional</sup> <a name="decryptStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetailsInput"></a>

```typescript
public readonly decryptStepDetailsInput: TransferWorkflowOnExceptionStepsDecryptStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---

##### `deleteStepDetailsInput`<sup>Optional</sup> <a name="deleteStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetailsInput"></a>

```typescript
public readonly deleteStepDetailsInput: TransferWorkflowOnExceptionStepsDeleteStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---

##### `tagStepDetailsInput`<sup>Optional</sup> <a name="tagStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetailsInput"></a>

```typescript
public readonly tagStepDetailsInput: TransferWorkflowOnExceptionStepsTagStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionSteps;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>

---


### TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | TransferWorkflowOnExceptionStepsTagStepDetailsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]

---

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList">TransferWorkflowOnExceptionStepsTagStepDetailsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tags"></a>

```typescript
public readonly tags: TransferWorkflowOnExceptionStepsTagStepDetailsTagsList;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList">TransferWorkflowOnExceptionStepsTagStepDetailsTagsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TransferWorkflowOnExceptionStepsTagStepDetailsTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowOnExceptionStepsTagStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---


### TransferWorkflowOnExceptionStepsTagStepDetailsTagsList <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTagsList" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get"></a>

```typescript
public get(index: number): TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsTagStepDetailsTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>[]

---


### TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowOnExceptionStepsTagStepDetailsTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>

---


### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">putEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">putS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">resetEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">resetS3FileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfsFileLocation` <a name="putEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```typescript
public putEfsFileLocation(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `putS3FileLocation` <a name="putS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```typescript
public putS3FileLocation(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `resetEfsFileLocation` <a name="resetEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```typescript
public resetEfsFileLocation(): void
```

##### `resetS3FileLocation` <a name="resetS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```typescript
public resetS3FileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">efsFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3FileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `efsFileLocation`<sup>Required</sup> <a name="efsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```typescript
public readonly efsFileLocation: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `s3FileLocation`<sup>Required</sup> <a name="s3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `efsFileLocationInput`<sup>Optional</sup> <a name="efsFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```typescript
public readonly efsFileLocationInput: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `s3FileLocationInput`<sup>Optional</sup> <a name="s3FileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```typescript
public readonly s3FileLocationInput: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowStepsCopyStepDetailsOutputReference <a name="TransferWorkflowStepsCopyStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation">putDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetDestinationFileLocation">resetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetOverwriteExisting">resetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationFileLocation` <a name="putDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation"></a>

```typescript
public putDestinationFileLocation(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `resetDestinationFileLocation` <a name="resetDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetDestinationFileLocation"></a>

```typescript
public resetDestinationFileLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOverwriteExisting` <a name="resetOverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetOverwriteExisting"></a>

```typescript
public resetOverwriteExisting(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput">destinationFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExistingInput">overwriteExistingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationFileLocation`<sup>Required</sup> <a name="destinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destinationFileLocationInput`<sup>Optional</sup> <a name="destinationFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```typescript
public readonly destinationFileLocationInput: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overwriteExistingInput`<sup>Optional</sup> <a name="overwriteExistingInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExistingInput"></a>

```typescript
public readonly overwriteExistingInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overwriteExisting`<sup>Required</sup> <a name="overwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowStepsCopyStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---


### TransferWorkflowStepsCustomStepDetailsOutputReference <a name="TransferWorkflowStepsCustomStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowStepsCustomStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">putEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">putS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">resetEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">resetS3FileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfsFileLocation` <a name="putEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```typescript
public putEfsFileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `putS3FileLocation` <a name="putS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```typescript
public putS3FileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `resetEfsFileLocation` <a name="resetEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```typescript
public resetEfsFileLocation(): void
```

##### `resetS3FileLocation` <a name="resetS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```typescript
public resetS3FileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">efsFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3FileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `efsFileLocation`<sup>Required</sup> <a name="efsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```typescript
public readonly efsFileLocation: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `s3FileLocation`<sup>Required</sup> <a name="s3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```typescript
public readonly s3FileLocation: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `efsFileLocationInput`<sup>Optional</sup> <a name="efsFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```typescript
public readonly efsFileLocationInput: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `s3FileLocationInput`<sup>Optional</sup> <a name="s3FileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```typescript
public readonly s3FileLocationInput: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation">putDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation">resetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetOverwriteExisting">resetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationFileLocation` <a name="putDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation"></a>

```typescript
public putDestinationFileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `resetDestinationFileLocation` <a name="resetDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation"></a>

```typescript
public resetDestinationFileLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOverwriteExisting` <a name="resetOverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetOverwriteExisting"></a>

```typescript
public resetOverwriteExisting(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput">destinationFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput">overwriteExistingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExisting">overwriteExisting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationFileLocation`<sup>Required</sup> <a name="destinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocation"></a>

```typescript
public readonly destinationFileLocation: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destinationFileLocationInput`<sup>Optional</sup> <a name="destinationFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```typescript
public readonly destinationFileLocationInput: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overwriteExistingInput`<sup>Optional</sup> <a name="overwriteExistingInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput"></a>

```typescript
public readonly overwriteExistingInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overwriteExisting`<sup>Required</sup> <a name="overwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExisting"></a>

```typescript
public readonly overwriteExisting: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowStepsDecryptStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---


### TransferWorkflowStepsDeleteStepDetailsOutputReference <a name="TransferWorkflowStepsDeleteStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowStepsDeleteStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---


### TransferWorkflowStepsList <a name="TransferWorkflowStepsList" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.get"></a>

```typescript
public get(index: number): TransferWorkflowStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>[]

---


### TransferWorkflowStepsOutputReference <a name="TransferWorkflowStepsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails">putCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails">putCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails">putDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails">putDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails">putTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetCopyStepDetails">resetCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetCustomStepDetails">resetCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetDecryptStepDetails">resetDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetDeleteStepDetails">resetDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetTagStepDetails">resetTagStepDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCopyStepDetails` <a name="putCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails"></a>

```typescript
public putCopyStepDetails(value: TransferWorkflowStepsCopyStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---

##### `putCustomStepDetails` <a name="putCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails"></a>

```typescript
public putCustomStepDetails(value: TransferWorkflowStepsCustomStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---

##### `putDecryptStepDetails` <a name="putDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails"></a>

```typescript
public putDecryptStepDetails(value: TransferWorkflowStepsDecryptStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---

##### `putDeleteStepDetails` <a name="putDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails"></a>

```typescript
public putDeleteStepDetails(value: TransferWorkflowStepsDeleteStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---

##### `putTagStepDetails` <a name="putTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails"></a>

```typescript
public putTagStepDetails(value: TransferWorkflowStepsTagStepDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---

##### `resetCopyStepDetails` <a name="resetCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetCopyStepDetails"></a>

```typescript
public resetCopyStepDetails(): void
```

##### `resetCustomStepDetails` <a name="resetCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetCustomStepDetails"></a>

```typescript
public resetCustomStepDetails(): void
```

##### `resetDecryptStepDetails` <a name="resetDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetDecryptStepDetails"></a>

```typescript
public resetDecryptStepDetails(): void
```

##### `resetDeleteStepDetails` <a name="resetDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetDeleteStepDetails"></a>

```typescript
public resetDeleteStepDetails(): void
```

##### `resetTagStepDetails` <a name="resetTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetTagStepDetails"></a>

```typescript
public resetTagStepDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetails">copyStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference">TransferWorkflowStepsCopyStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetails">customStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference">TransferWorkflowStepsCustomStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetails">decryptStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference">TransferWorkflowStepsDecryptStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetails">deleteStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference">TransferWorkflowStepsDeleteStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetails">tagStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference">TransferWorkflowStepsTagStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetailsInput">copyStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetailsInput">customStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetailsInput">decryptStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetailsInput">deleteStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetailsInput">tagStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyStepDetails`<sup>Required</sup> <a name="copyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetails"></a>

```typescript
public readonly copyStepDetails: TransferWorkflowStepsCopyStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference">TransferWorkflowStepsCopyStepDetailsOutputReference</a>

---

##### `customStepDetails`<sup>Required</sup> <a name="customStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetails"></a>

```typescript
public readonly customStepDetails: TransferWorkflowStepsCustomStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference">TransferWorkflowStepsCustomStepDetailsOutputReference</a>

---

##### `decryptStepDetails`<sup>Required</sup> <a name="decryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetails"></a>

```typescript
public readonly decryptStepDetails: TransferWorkflowStepsDecryptStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference">TransferWorkflowStepsDecryptStepDetailsOutputReference</a>

---

##### `deleteStepDetails`<sup>Required</sup> <a name="deleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetails"></a>

```typescript
public readonly deleteStepDetails: TransferWorkflowStepsDeleteStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference">TransferWorkflowStepsDeleteStepDetailsOutputReference</a>

---

##### `tagStepDetails`<sup>Required</sup> <a name="tagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetails"></a>

```typescript
public readonly tagStepDetails: TransferWorkflowStepsTagStepDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference">TransferWorkflowStepsTagStepDetailsOutputReference</a>

---

##### `copyStepDetailsInput`<sup>Optional</sup> <a name="copyStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetailsInput"></a>

```typescript
public readonly copyStepDetailsInput: TransferWorkflowStepsCopyStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---

##### `customStepDetailsInput`<sup>Optional</sup> <a name="customStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetailsInput"></a>

```typescript
public readonly customStepDetailsInput: TransferWorkflowStepsCustomStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---

##### `decryptStepDetailsInput`<sup>Optional</sup> <a name="decryptStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetailsInput"></a>

```typescript
public readonly decryptStepDetailsInput: TransferWorkflowStepsDecryptStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---

##### `deleteStepDetailsInput`<sup>Optional</sup> <a name="deleteStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetailsInput"></a>

```typescript
public readonly deleteStepDetailsInput: TransferWorkflowStepsDeleteStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---

##### `tagStepDetailsInput`<sup>Optional</sup> <a name="tagStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetailsInput"></a>

```typescript
public readonly tagStepDetailsInput: TransferWorkflowStepsTagStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowSteps;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>

---


### TransferWorkflowStepsTagStepDetailsOutputReference <a name="TransferWorkflowStepsTagStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | TransferWorkflowStepsTagStepDetailsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]

---

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetSourceFileLocation"></a>

```typescript
public resetSourceFileLocation(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList">TransferWorkflowStepsTagStepDetailsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tags"></a>

```typescript
public readonly tags: TransferWorkflowStepsTagStepDetailsTagsList;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList">TransferWorkflowStepsTagStepDetailsTagsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```typescript
public readonly sourceFileLocationInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TransferWorkflowStepsTagStepDetailsTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocation"></a>

```typescript
public readonly sourceFileLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferWorkflowStepsTagStepDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---


### TransferWorkflowStepsTagStepDetailsTagsList <a name="TransferWorkflowStepsTagStepDetailsTagsList" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get"></a>

```typescript
public get(index: number): TransferWorkflowStepsTagStepDetailsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsTagStepDetailsTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>[]

---


### TransferWorkflowStepsTagStepDetailsTagsOutputReference <a name="TransferWorkflowStepsTagStepDetailsTagsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer"></a>

```typescript
import { transferWorkflow } from '@cdktf/provider-aws'

new transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWorkflowStepsTagStepDetailsTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>

---



