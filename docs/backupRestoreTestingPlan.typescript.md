# `backupRestoreTestingPlan` Submodule <a name="`backupRestoreTestingPlan` Submodule" id="@cdktf/provider-aws.backupRestoreTestingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupRestoreTestingPlan <a name="BackupRestoreTestingPlan" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan aws_backup_restore_testing_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer"></a>

```typescript
import { backupRestoreTestingPlan } from '@cdktf/provider-aws'

new backupRestoreTestingPlan.BackupRestoreTestingPlan(scope: Construct, id: string, config: BackupRestoreTestingPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig">BackupRestoreTestingPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig">BackupRestoreTestingPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection">putRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetRecoveryPointSelection">resetRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetScheduleExpressionTimezone">resetScheduleExpressionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetStartWindowHours">resetStartWindowHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecoveryPointSelection` <a name="putRecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection"></a>

```typescript
public putRecoveryPointSelection(value: IResolvable | BackupRestoreTestingPlanRecoveryPointSelection[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>[]

---

##### `resetRecoveryPointSelection` <a name="resetRecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetRecoveryPointSelection"></a>

```typescript
public resetRecoveryPointSelection(): void
```

##### `resetScheduleExpressionTimezone` <a name="resetScheduleExpressionTimezone" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetScheduleExpressionTimezone"></a>

```typescript
public resetScheduleExpressionTimezone(): void
```

##### `resetStartWindowHours` <a name="resetStartWindowHours" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetStartWindowHours"></a>

```typescript
public resetStartWindowHours(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BackupRestoreTestingPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct"></a>

```typescript
import { backupRestoreTestingPlan } from '@cdktf/provider-aws'

backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement"></a>

```typescript
import { backupRestoreTestingPlan } from '@cdktf/provider-aws'

backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource"></a>

```typescript
import { backupRestoreTestingPlan } from '@cdktf/provider-aws'

backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport"></a>

```typescript
import { backupRestoreTestingPlan } from '@cdktf/provider-aws'

backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BackupRestoreTestingPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupRestoreTestingPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupRestoreTestingPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupRestoreTestingPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelection">recoveryPointSelection</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList">BackupRestoreTestingPlanRecoveryPointSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelectionInput">recoveryPointSelectionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezoneInput">scheduleExpressionTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHoursInput">startWindowHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHours">startWindowHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `recoveryPointSelection`<sup>Required</sup> <a name="recoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelection"></a>

```typescript
public readonly recoveryPointSelection: BackupRestoreTestingPlanRecoveryPointSelectionList;
```

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList">BackupRestoreTestingPlanRecoveryPointSelectionList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recoveryPointSelectionInput`<sup>Optional</sup> <a name="recoveryPointSelectionInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelectionInput"></a>

```typescript
public readonly recoveryPointSelectionInput: IResolvable | BackupRestoreTestingPlanRecoveryPointSelection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>[]

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `scheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="scheduleExpressionTimezoneInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezoneInput"></a>

```typescript
public readonly scheduleExpressionTimezoneInput: string;
```

- *Type:* string

---

##### `startWindowHoursInput`<sup>Optional</sup> <a name="startWindowHoursInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHoursInput"></a>

```typescript
public readonly startWindowHoursInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `scheduleExpressionTimezone`<sup>Required</sup> <a name="scheduleExpressionTimezone" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezone"></a>

```typescript
public readonly scheduleExpressionTimezone: string;
```

- *Type:* string

---

##### `startWindowHours`<sup>Required</sup> <a name="startWindowHours" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHours"></a>

```typescript
public readonly startWindowHours: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupRestoreTestingPlanConfig <a name="BackupRestoreTestingPlanConfig" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.Initializer"></a>

```typescript
import { backupRestoreTestingPlan } from '@cdktf/provider-aws'

const backupRestoreTestingPlanConfig: backupRestoreTestingPlan.BackupRestoreTestingPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#name BackupRestoreTestingPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.recoveryPointSelection">recoveryPointSelection</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>[]</code> | recovery_point_selection block. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.startWindowHours">startWindowHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#name BackupRestoreTestingPlan#name}.

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}.

---

##### `recoveryPointSelection`<sup>Optional</sup> <a name="recoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.recoveryPointSelection"></a>

```typescript
public readonly recoveryPointSelection: IResolvable | BackupRestoreTestingPlanRecoveryPointSelection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>[]

recovery_point_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#recovery_point_selection BackupRestoreTestingPlan#recovery_point_selection}

---

##### `scheduleExpressionTimezone`<sup>Optional</sup> <a name="scheduleExpressionTimezone" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpressionTimezone"></a>

```typescript
public readonly scheduleExpressionTimezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}.

---

##### `startWindowHours`<sup>Optional</sup> <a name="startWindowHours" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.startWindowHours"></a>

```typescript
public readonly startWindowHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}.

---

### BackupRestoreTestingPlanRecoveryPointSelection <a name="BackupRestoreTestingPlanRecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.Initializer"></a>

```typescript
import { backupRestoreTestingPlan } from '@cdktf/provider-aws'

const backupRestoreTestingPlanRecoveryPointSelection: backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.algorithm">algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#algorithm BackupRestoreTestingPlan#algorithm}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.includeVaults">includeVaults</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#include_vaults BackupRestoreTestingPlan#include_vaults}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.recoveryPointTypes">recoveryPointTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#recovery_point_types BackupRestoreTestingPlan#recovery_point_types}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.excludeVaults">excludeVaults</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#exclude_vaults BackupRestoreTestingPlan#exclude_vaults}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.selectionWindowDays">selectionWindowDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#selection_window_days BackupRestoreTestingPlan#selection_window_days}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#algorithm BackupRestoreTestingPlan#algorithm}.

---

##### `includeVaults`<sup>Required</sup> <a name="includeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.includeVaults"></a>

```typescript
public readonly includeVaults: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#include_vaults BackupRestoreTestingPlan#include_vaults}.

---

##### `recoveryPointTypes`<sup>Required</sup> <a name="recoveryPointTypes" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.recoveryPointTypes"></a>

```typescript
public readonly recoveryPointTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#recovery_point_types BackupRestoreTestingPlan#recovery_point_types}.

---

##### `excludeVaults`<sup>Optional</sup> <a name="excludeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.excludeVaults"></a>

```typescript
public readonly excludeVaults: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#exclude_vaults BackupRestoreTestingPlan#exclude_vaults}.

---

##### `selectionWindowDays`<sup>Optional</sup> <a name="selectionWindowDays" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.selectionWindowDays"></a>

```typescript
public readonly selectionWindowDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/backup_restore_testing_plan#selection_window_days BackupRestoreTestingPlan#selection_window_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupRestoreTestingPlanRecoveryPointSelectionList <a name="BackupRestoreTestingPlanRecoveryPointSelectionList" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer"></a>

```typescript
import { backupRestoreTestingPlan } from '@cdktf/provider-aws'

new backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.get"></a>

```typescript
public get(index: number): BackupRestoreTestingPlanRecoveryPointSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupRestoreTestingPlanRecoveryPointSelection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>[]

---


### BackupRestoreTestingPlanRecoveryPointSelectionOutputReference <a name="BackupRestoreTestingPlanRecoveryPointSelectionOutputReference" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer"></a>

```typescript
import { backupRestoreTestingPlan } from '@cdktf/provider-aws'

new backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetExcludeVaults">resetExcludeVaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetSelectionWindowDays">resetSelectionWindowDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeVaults` <a name="resetExcludeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetExcludeVaults"></a>

```typescript
public resetExcludeVaults(): void
```

##### `resetSelectionWindowDays` <a name="resetSelectionWindowDays" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetSelectionWindowDays"></a>

```typescript
public resetSelectionWindowDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaultsInput">excludeVaultsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaultsInput">includeVaultsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypesInput">recoveryPointTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDaysInput">selectionWindowDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaults">excludeVaults</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaults">includeVaults</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypes">recoveryPointTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDays">selectionWindowDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `excludeVaultsInput`<sup>Optional</sup> <a name="excludeVaultsInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaultsInput"></a>

```typescript
public readonly excludeVaultsInput: string[];
```

- *Type:* string[]

---

##### `includeVaultsInput`<sup>Optional</sup> <a name="includeVaultsInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaultsInput"></a>

```typescript
public readonly includeVaultsInput: string[];
```

- *Type:* string[]

---

##### `recoveryPointTypesInput`<sup>Optional</sup> <a name="recoveryPointTypesInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypesInput"></a>

```typescript
public readonly recoveryPointTypesInput: string[];
```

- *Type:* string[]

---

##### `selectionWindowDaysInput`<sup>Optional</sup> <a name="selectionWindowDaysInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDaysInput"></a>

```typescript
public readonly selectionWindowDaysInput: number;
```

- *Type:* number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `excludeVaults`<sup>Required</sup> <a name="excludeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaults"></a>

```typescript
public readonly excludeVaults: string[];
```

- *Type:* string[]

---

##### `includeVaults`<sup>Required</sup> <a name="includeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaults"></a>

```typescript
public readonly includeVaults: string[];
```

- *Type:* string[]

---

##### `recoveryPointTypes`<sup>Required</sup> <a name="recoveryPointTypes" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypes"></a>

```typescript
public readonly recoveryPointTypes: string[];
```

- *Type:* string[]

---

##### `selectionWindowDays`<sup>Required</sup> <a name="selectionWindowDays" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDays"></a>

```typescript
public readonly selectionWindowDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupRestoreTestingPlanRecoveryPointSelection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>

---



