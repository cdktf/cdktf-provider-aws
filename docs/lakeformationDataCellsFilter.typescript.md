# `lakeformationDataCellsFilter` Submodule <a name="`lakeformationDataCellsFilter` Submodule" id="@cdktf/provider-aws.lakeformationDataCellsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationDataCellsFilter <a name="LakeformationDataCellsFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter aws_lakeformation_data_cells_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

new lakeformationDataCellsFilter.LakeformationDataCellsFilter(scope: Construct, id: string, config?: LakeformationDataCellsFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig">LakeformationDataCellsFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig">LakeformationDataCellsFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTableData">putTableData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTableData">resetTableData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTableData` <a name="putTableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTableData"></a>

```typescript
public putTableData(value: IResolvable | LakeformationDataCellsFilterTableData[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTableData.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTimeouts"></a>

```typescript
public putTimeouts(value: LakeformationDataCellsFilterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>

---

##### `resetTableData` <a name="resetTableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTableData"></a>

```typescript
public resetTableData(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LakeformationDataCellsFilter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LakeformationDataCellsFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationDataCellsFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationDataCellsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationDataCellsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableData">tableData</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList">LakeformationDataCellsFilterTableDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference">LakeformationDataCellsFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableDataInput">tableDataInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tableData`<sup>Required</sup> <a name="tableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableData"></a>

```typescript
public readonly tableData: LakeformationDataCellsFilterTableDataList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList">LakeformationDataCellsFilterTableDataList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeouts"></a>

```typescript
public readonly timeouts: LakeformationDataCellsFilterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference">LakeformationDataCellsFilterTimeoutsOutputReference</a>

---

##### `tableDataInput`<sup>Optional</sup> <a name="tableDataInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableDataInput"></a>

```typescript
public readonly tableDataInput: IResolvable | LakeformationDataCellsFilterTableData[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LakeformationDataCellsFilterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationDataCellsFilterConfig <a name="LakeformationDataCellsFilterConfig" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

const lakeformationDataCellsFilterConfig: lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableData">tableData</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>[]</code> | table_data block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tableData`<sup>Optional</sup> <a name="tableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableData"></a>

```typescript
public readonly tableData: IResolvable | LakeformationDataCellsFilterTableData[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>[]

table_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#table_data LakeformationDataCellsFilter#table_data}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LakeformationDataCellsFilterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#timeouts LakeformationDataCellsFilter#timeouts}

---

### LakeformationDataCellsFilterTableData <a name="LakeformationDataCellsFilterTableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

const lakeformationDataCellsFilterTableData: lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableCatalogId">tableCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnNames">columnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnWildcard">columnWildcard</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>[]</code> | column_wildcard block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.rowFilter">rowFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>[]</code> | row_filter block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.versionId">versionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#version_id LakeformationDataCellsFilter#version_id}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}.

---

##### `tableCatalogId`<sup>Required</sup> <a name="tableCatalogId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableCatalogId"></a>

```typescript
public readonly tableCatalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}.

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}.

---

##### `columnWildcard`<sup>Optional</sup> <a name="columnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnWildcard"></a>

```typescript
public readonly columnWildcard: IResolvable | LakeformationDataCellsFilterTableDataColumnWildcard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>[]

column_wildcard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#column_wildcard LakeformationDataCellsFilter#column_wildcard}

---

##### `rowFilter`<sup>Optional</sup> <a name="rowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.rowFilter"></a>

```typescript
public readonly rowFilter: IResolvable | LakeformationDataCellsFilterTableDataRowFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>[]

row_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#row_filter LakeformationDataCellsFilter#row_filter}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#version_id LakeformationDataCellsFilter#version_id}.

---

### LakeformationDataCellsFilterTableDataColumnWildcard <a name="LakeformationDataCellsFilterTableDataColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

const lakeformationDataCellsFilterTableDataColumnWildcard: lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}. |

---

##### `excludedColumnNames`<sup>Optional</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}.

---

### LakeformationDataCellsFilterTableDataRowFilter <a name="LakeformationDataCellsFilterTableDataRowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

const lakeformationDataCellsFilterTableDataRowFilter: lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.allRowsWildcard">allRowsWildcard</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>[]</code> | all_rows_wildcard block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.filterExpression">filterExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}. |

---

##### `allRowsWildcard`<sup>Optional</sup> <a name="allRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.allRowsWildcard"></a>

```typescript
public readonly allRowsWildcard: IResolvable | LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>[]

all_rows_wildcard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#all_rows_wildcard LakeformationDataCellsFilter#all_rows_wildcard}

---

##### `filterExpression`<sup>Optional</sup> <a name="filterExpression" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.filterExpression"></a>

```typescript
public readonly filterExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}.

---

### LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard <a name="LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

const lakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard: lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard = { ... }
```


### LakeformationDataCellsFilterTimeouts <a name="LakeformationDataCellsFilterTimeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

const lakeformationDataCellsFilterTimeouts: lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/lakeformation_data_cells_filter#create LakeformationDataCellsFilter#create}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationDataCellsFilterTableDataColumnWildcardList <a name="LakeformationDataCellsFilterTableDataColumnWildcardList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

new lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.get"></a>

```typescript
public get(index: number): LakeformationDataCellsFilterTableDataColumnWildcardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataCellsFilterTableDataColumnWildcard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>[]

---


### LakeformationDataCellsFilterTableDataColumnWildcardOutputReference <a name="LakeformationDataCellsFilterTableDataColumnWildcardOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

new lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resetExcludedColumnNames">resetExcludedColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedColumnNames` <a name="resetExcludedColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```typescript
public resetExcludedColumnNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNamesInput">excludedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedColumnNamesInput`<sup>Optional</sup> <a name="excludedColumnNamesInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```typescript
public readonly excludedColumnNamesInput: string[];
```

- *Type:* string[]

---

##### `excludedColumnNames`<sup>Required</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataCellsFilterTableDataColumnWildcard;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>

---


### LakeformationDataCellsFilterTableDataList <a name="LakeformationDataCellsFilterTableDataList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

new lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.get"></a>

```typescript
public get(index: number): LakeformationDataCellsFilterTableDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataCellsFilterTableData[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>[]

---


### LakeformationDataCellsFilterTableDataOutputReference <a name="LakeformationDataCellsFilterTableDataOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

new lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putColumnWildcard">putColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putRowFilter">putRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnWildcard">resetColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetRowFilter">resetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnWildcard` <a name="putColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putColumnWildcard"></a>

```typescript
public putColumnWildcard(value: IResolvable | LakeformationDataCellsFilterTableDataColumnWildcard[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putColumnWildcard.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>[]

---

##### `putRowFilter` <a name="putRowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putRowFilter"></a>

```typescript
public putRowFilter(value: IResolvable | LakeformationDataCellsFilterTableDataRowFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putRowFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>[]

---

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnNames"></a>

```typescript
public resetColumnNames(): void
```

##### `resetColumnWildcard` <a name="resetColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnWildcard"></a>

```typescript
public resetColumnWildcard(): void
```

##### `resetRowFilter` <a name="resetRowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetRowFilter"></a>

```typescript
public resetRowFilter(): void
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetVersionId"></a>

```typescript
public resetVersionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcard">columnWildcard</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList">LakeformationDataCellsFilterTableDataColumnWildcardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList">LakeformationDataCellsFilterTableDataRowFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcardInput">columnWildcardInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilterInput">rowFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogIdInput">tableCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogId">tableCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnWildcard`<sup>Required</sup> <a name="columnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcard"></a>

```typescript
public readonly columnWildcard: LakeformationDataCellsFilterTableDataColumnWildcardList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList">LakeformationDataCellsFilterTableDataColumnWildcardList</a>

---

##### `rowFilter`<sup>Required</sup> <a name="rowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilter"></a>

```typescript
public readonly rowFilter: LakeformationDataCellsFilterTableDataRowFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList">LakeformationDataCellsFilterTableDataRowFilterList</a>

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNamesInput"></a>

```typescript
public readonly columnNamesInput: string[];
```

- *Type:* string[]

---

##### `columnWildcardInput`<sup>Optional</sup> <a name="columnWildcardInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcardInput"></a>

```typescript
public readonly columnWildcardInput: IResolvable | LakeformationDataCellsFilterTableDataColumnWildcard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>[]

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rowFilterInput`<sup>Optional</sup> <a name="rowFilterInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilterInput"></a>

```typescript
public readonly rowFilterInput: IResolvable | LakeformationDataCellsFilterTableDataRowFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>[]

---

##### `tableCatalogIdInput`<sup>Optional</sup> <a name="tableCatalogIdInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogIdInput"></a>

```typescript
public readonly tableCatalogIdInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tableCatalogId`<sup>Required</sup> <a name="tableCatalogId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogId"></a>

```typescript
public readonly tableCatalogId: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataCellsFilterTableData;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>

---


### LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList <a name="LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

new lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.get"></a>

```typescript
public get(index: number): LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>[]

---


### LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference <a name="LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

new lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>

---


### LakeformationDataCellsFilterTableDataRowFilterList <a name="LakeformationDataCellsFilterTableDataRowFilterList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

new lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.get"></a>

```typescript
public get(index: number): LakeformationDataCellsFilterTableDataRowFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataCellsFilterTableDataRowFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>[]

---


### LakeformationDataCellsFilterTableDataRowFilterOutputReference <a name="LakeformationDataCellsFilterTableDataRowFilterOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

new lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.putAllRowsWildcard">putAllRowsWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetAllRowsWildcard">resetAllRowsWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetFilterExpression">resetFilterExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllRowsWildcard` <a name="putAllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.putAllRowsWildcard"></a>

```typescript
public putAllRowsWildcard(value: IResolvable | LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.putAllRowsWildcard.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>[]

---

##### `resetAllRowsWildcard` <a name="resetAllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetAllRowsWildcard"></a>

```typescript
public resetAllRowsWildcard(): void
```

##### `resetFilterExpression` <a name="resetFilterExpression" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetFilterExpression"></a>

```typescript
public resetFilterExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcard">allRowsWildcard</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcardInput">allRowsWildcardInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpressionInput">filterExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpression">filterExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allRowsWildcard`<sup>Required</sup> <a name="allRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcard"></a>

```typescript
public readonly allRowsWildcard: LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList</a>

---

##### `allRowsWildcardInput`<sup>Optional</sup> <a name="allRowsWildcardInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcardInput"></a>

```typescript
public readonly allRowsWildcardInput: IResolvable | LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>[]

---

##### `filterExpressionInput`<sup>Optional</sup> <a name="filterExpressionInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpressionInput"></a>

```typescript
public readonly filterExpressionInput: string;
```

- *Type:* string

---

##### `filterExpression`<sup>Required</sup> <a name="filterExpression" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpression"></a>

```typescript
public readonly filterExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataCellsFilterTableDataRowFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>

---


### LakeformationDataCellsFilterTimeoutsOutputReference <a name="LakeformationDataCellsFilterTimeoutsOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer"></a>

```typescript
import { lakeformationDataCellsFilter } from '@cdktf/provider-aws'

new lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationDataCellsFilterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>

---



